from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ollama_chain import get_topic_explanation
from routes.summarize import router as summarize_router

app = FastAPI(
    title="StudyPal-AI Backend",
    description="Fully offline AI-powered study assistant backend",
    version="1.0.0",
)

# Add CORS middleware to allow frontend connections
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(summarize_router, prefix="/api", tags=["PDF Summarization"])


# Request models
class TopicRequest(BaseModel):
    topic: str


class ExplanationResponse(BaseModel):
    topic: str
    explanation: str
    success: bool


@app.get("/")
async def root():
    return {"message": "Welcome to StudyPal-AI - Your Offline AI Study Assistant"}


@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "StudyPal-AI Backend"}


@app.post("/explain", response_model=ExplanationResponse)
async def explain_topic(request: TopicRequest):
    """
    Explain a topic in simple terms using AI.

    Args:
        request: TopicRequest containing the topic to explain

    Returns:
        ExplanationResponse with the explanation
    """
    try:
        explanation = await get_topic_explanation(request.topic)
        return ExplanationResponse(
            topic=request.topic, explanation=explanation, success=True
        )
    except Exception as e:
        return ExplanationResponse(
            topic=request.topic,
            explanation=f"Sorry, I couldn't explain this topic right now. Error: {str(e)}",
            success=False,
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
