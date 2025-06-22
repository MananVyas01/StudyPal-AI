"""
PDF Summarization route for StudyPal-AI.
Handles PDF upload, text extraction, chunking, and AI-powered summarization.
"""

from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
from typing import List, Dict, Any
import logging
from utils.pdf_parser import pdf_parser
from ollama_chain import get_chunk_summary

logger = logging.getLogger(__name__)

router = APIRouter()


class ChunkSummary(BaseModel):
    """Model for individual chunk summary."""

    chunk_id: int
    original_text: str
    summary: str
    length: int
    success: bool


class PDFSummaryResponse(BaseModel):
    """Response model for PDF summarization."""

    filename: str
    total_chunks: int
    total_characters: int
    summaries: List[ChunkSummary]
    success: bool
    processing_time: float
    error: str = None


@router.post("/summarize", response_model=PDFSummaryResponse)
async def summarize_pdf(file: UploadFile = File(...)):
    """
    Upload and summarize a PDF file.

    Args:
        file: PDF file to upload and summarize

    Returns:
        PDFSummaryResponse with summaries for each chunk
    """
    import time

    start_time = time.time()

    try:
        # Validate file type
        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400, detail="Only PDF files are supported")

        # Read file content
        pdf_content = await file.read()

        if len(pdf_content) == 0:
            raise HTTPException(status_code=400, detail="Empty file uploaded")

        # Parse PDF
        logger.info(f"Parsing PDF: {file.filename}")
        parsed_result = await pdf_parser.parse_pdf(pdf_content)

        if not parsed_result["success"]:
            raise HTTPException(
                status_code=422,
                detail=f"Failed to parse PDF: {parsed_result.get('error', 'Unknown error')}",
            )

        chunks = parsed_result["chunks"]

        if not chunks:
            raise HTTPException(status_code=422, detail="No text content found in PDF")

        # Summarize each chunk
        logger.info(f"Summarizing {len(chunks)} chunks")
        summaries = []

        for chunk in chunks:
            try:
                # Get AI summary for this chunk
                summary = await get_chunk_summary(chunk["text"])

                summaries.append(
                    ChunkSummary(
                        chunk_id=chunk["id"],
                        original_text=(
                            chunk["text"][:500] + "..."
                            if len(chunk["text"]) > 500
                            else chunk["text"]
                        ),
                        summary=summary,
                        length=chunk["length"],
                        success=True,
                    )
                )

            except Exception as e:
                logger.error(f"Error summarizing chunk {chunk['id']}: {str(e)}")
                summaries.append(
                    ChunkSummary(
                        chunk_id=chunk["id"],
                        original_text=(
                            chunk["text"][:500] + "..."
                            if len(chunk["text"]) > 500
                            else chunk["text"]
                        ),
                        summary=f"Failed to summarize this section: {str(e)}",
                        length=chunk["length"],
                        success=False,
                    )
                )

        processing_time = time.time() - start_time

        return PDFSummaryResponse(
            filename=file.filename,
            total_chunks=len(chunks),
            total_characters=parsed_result["total_characters"],
            summaries=summaries,
            success=True,
            processing_time=round(processing_time, 2),
        )

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in PDF summarization: {str(e)}")
        processing_time = time.time() - start_time

        return PDFSummaryResponse(
            filename=file.filename if file else "unknown",
            total_chunks=0,
            total_characters=0,
            summaries=[],
            success=False,
            processing_time=round(processing_time, 2),
            error=str(e),
        )
