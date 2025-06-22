"""
PDF Parser utility for extracting and chunking text from PDF files.
Uses PyMuPDF (fitz) for robust PDF text extraction.
"""

import fitz  # PyMuPDF
from typing import List, Dict, Any
import logging

logger = logging.getLogger(__name__)


class PDFParser:
    """PDF text extraction and chunking utility."""

    def __init__(self, chunk_size: int = 2000, chunk_overlap: int = 200):
        """
        Initialize PDF parser with chunking parameters.

        Args:
            chunk_size: Maximum characters per chunk
            chunk_overlap: Overlap between consecutive chunks
        """
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    async def extract_text_from_pdf(self, pdf_bytes: bytes) -> str:
        """
        Extract all text from a PDF file.

        Args:
            pdf_bytes: PDF file content as bytes

        Returns:
            Extracted text as string

        Raises:
            Exception: If PDF parsing fails
        """
        try:
            # Open PDF from bytes
            doc = fitz.open(stream=pdf_bytes, filetype="pdf")
            full_text = ""

            # Extract text from each page
            for page_num in range(doc.page_count):
                page = doc.load_page(page_num)
                text = page.get_text()

                if text.strip():  # Only add non-empty pages
                    full_text += f"\n--- Page {page_num + 1} ---\n{text}\n"

            doc.close()

            if not full_text.strip():
                raise Exception("No text content found in PDF")

            return full_text.strip()

        except Exception as e:
            logger.error(f"Error extracting text from PDF: {str(e)}")
            raise Exception(f"Failed to extract text from PDF: {str(e)}")

    def chunk_text(self, text: str) -> List[Dict[str, Any]]:
        """
        Split text into overlapping chunks for processing.

        Args:
            text: Text to chunk

        Returns:
            List of dictionaries containing chunk data
        """
        if not text or not text.strip():
            return []

        chunks = []
        start = 0
        chunk_id = 1

        while start < len(text):
            # Calculate end position for this chunk
            end = start + self.chunk_size

            # If we're not at the end, try to break at a sentence or word boundary
            if end < len(text):
                # Look for sentence endings within the last 200 characters
                sentence_break = text.rfind(".", start, end)
                if sentence_break > start + self.chunk_size - 200:
                    end = sentence_break + 1
                else:
                    # Look for word boundary
                    space_break = text.rfind(" ", start, end)
                    if space_break > start + self.chunk_size - 100:
                        end = space_break

            chunk_text = text[start:end].strip()

            if chunk_text:
                chunks.append(
                    {
                        "id": chunk_id,
                        "text": chunk_text,
                        "start_pos": start,
                        "end_pos": end,
                        "length": len(chunk_text),
                    }
                )
                chunk_id += 1

            # Move start position with overlap
            start = end - self.chunk_overlap

            # Prevent infinite loop
            if start >= end:
                start = end

        return chunks

    async def parse_pdf(self, pdf_bytes: bytes) -> Dict[str, Any]:
        """
        Complete PDF parsing pipeline: extract text and chunk it.

        Args:
            pdf_bytes: PDF file content as bytes

        Returns:
            Dictionary containing original text and chunks
        """
        try:
            # Extract text
            full_text = await self.extract_text_from_pdf(pdf_bytes)

            # Chunk the text
            chunks = self.chunk_text(full_text)

            return {
                "full_text": full_text,
                "chunks": chunks,
                "total_chunks": len(chunks),
                "total_characters": len(full_text),
                "success": True,
            }

        except Exception as e:
            logger.error(f"Error parsing PDF: {str(e)}")
            return {
                "full_text": "",
                "chunks": [],
                "total_chunks": 0,
                "total_characters": 0,
                "success": False,
                "error": str(e),
            }


# Global parser instance
pdf_parser = PDFParser()
