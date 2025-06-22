"""
Ollama Chain Module for StudyPal-AI

This module provides integration with locally running Ollama models
via LangChain for AI-powered study assistance features.
"""

from langchain.llms import Ollama
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from typing import Optional, Dict, Any
import logging

logger = logging.getLogger(__name__)

class OllamaChain:
    """
    A wrapper class for Ollama model integration using LangChain.
    Provides methods for various study assistance tasks.
    """
    
    def __init__(self, model_name: str = "llama2", base_url: str = "http://localhost:11434"):
        """
        Initialize the Ollama chain.
        
        Args:
            model_name: Name of the Ollama model to use
            base_url: Base URL for the Ollama server
        """
        self.model_name = model_name
        self.base_url = base_url
        self.llm = None
        self._initialize_llm()
    
    def _initialize_llm(self):
        """Initialize the Ollama LLM instance."""
        try:
            self.llm = Ollama(
                model=self.model_name,
                base_url=self.base_url
            )
            logger.info(f"Ollama LLM initialized with model: {self.model_name}")
        except Exception as e:
            logger.error(f"Failed to initialize Ollama LLM: {e}")
            self.llm = None
    
    def is_available(self) -> bool:
        """Check if the Ollama service is available."""
        return self.llm is not None
    
    async def generate_response(self, prompt: str) -> Optional[str]:
        """
        Generate a response using the Ollama model.
        
        Args:
            prompt: The input prompt
            
        Returns:
            Generated response or None if error
        """
        if not self.is_available():
            logger.error("Ollama LLM is not available")
            return None
        
        try:
            response = await self.llm.agenerate([prompt])
            return response.generations[0][0].text
        except Exception as e:
            logger.error(f"Error generating response: {e}")
            return None
    
    async def create_study_plan(self, subject: str, duration: str, level: str) -> Optional[str]:
        """
        Create a personalized study plan.
        
        Args:
            subject: Subject to study
            duration: Duration for the study plan
            level: Student's level (beginner, intermediate, advanced)
            
        Returns:
            Generated study plan or None if error
        """
        prompt_template = PromptTemplate(
            input_variables=["subject", "duration", "level"],
            template="""
            Create a comprehensive study plan for the following:
            Subject: {subject}
            Duration: {duration}
            Level: {level}
            
            Please provide a structured study plan with daily goals, key topics to cover,
            and recommended study methods. Make it practical and achievable.
            """
        )
        
        chain = LLMChain(llm=self.llm, prompt=prompt_template)
        
        try:
            result = await chain.arun(
                subject=subject,
                duration=duration,
                level=level
            )
            return result
        except Exception as e:
            logger.error(f"Error creating study plan: {e}")
            return None
    
    async def explain_concept(self, concept: str, context: str = "") -> Optional[str]:
        """
        Explain a concept in simple terms.
        
        Args:
            concept: The concept to explain
            context: Additional context or subject area
            
        Returns:
            Explanation or None if error
        """
        prompt_template = PromptTemplate(
            input_variables=["concept", "context"],
            template="""
            Explain the following concept in clear, simple terms:
            Concept: {concept}
            Context: {context}
            
            Provide a comprehensive explanation that includes:
            1. A simple definition
            2. Key characteristics
            3. Examples or analogies
            4. Why it's important
            """
        )
        
        chain = LLMChain(llm=self.llm, prompt=prompt_template)
        
        try:
            result = await chain.arun(concept=concept, context=context)
            return result
        except Exception as e:
            logger.error(f"Error explaining concept: {e}")
            return None

# Global instance
ollama_chain = OllamaChain()
