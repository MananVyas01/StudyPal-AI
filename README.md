# StudyPal-AI 🤖📚

**Your fully offline AI-powered study assistant**

StudyPal-AI is a comprehensive study companion that combines the power of AI with complete offline functionality. Built with FastAPI, LangChain, Ollama, and Next.js, it provides personalized learning experiences without requiring an internet connection.

## 🌟 Features

### ✅ Stage 2: AI Topic Explainer (Current)
- 🧠 **Smart Explanations**: Get clear, simple explanations for any topic
- 🔄 **Real-time Processing**: Interactive form with loading states
- 🎯 **AI-Powered**: Uses locally running Llama3 model via Ollama
- 🎨 **Beautiful UI**: Clean, responsive design with dark mode support

### 🚧 Coming Soon

### 🧠 AI Study Plans
- Generate personalized study schedules based on your goals, timeline, and learning preferences
- Adaptive planning that adjusts to your progress and performance
- Support for multiple subjects and learning styles

### 📝 Interactive Quizzes
- AI-generated quizzes tailored to your study materials
- Multiple question types: multiple choice, true/false, short answer
- Real-time feedback and explanations
- Progress tracking and performance analytics

### 📓 Smart Notes
- Intelligent note-taking with AI-powered insights
- Automatic categorization and tagging
- Cross-reference connections between concepts
- Summary generation and key point extraction

### 🔒 Fully Offline
- No internet connection required after initial setup
- Complete data privacy - your information never leaves your device
- Works with locally running Ollama models
- Lightning-fast responses without network latency

## 🏗️ Architecture

### Backend (FastAPI + Python)
- **FastAPI**: High-performance API framework
- **LangChain**: AI workflow orchestration
- **Ollama**: Local LLM model execution
- **Python**: Core business logic and AI integrations

### Frontend (Next.js + TypeScript)
- **Next.js 15**: React framework with app router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern, responsive styling
- **React**: Component-based UI architecture

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 18+
- Ollama installed and running locally

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
python main.py
```
The backend will be available at `http://localhost:8000`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:3000`

### Ollama Setup
1. Install Ollama from [ollama.ai](https://ollama.ai)
2. Pull a model: `ollama pull llama2`
3. Start Ollama service: `ollama serve`

## 📁 Project Structure

```
StudyPal-AI/
├── backend/                 # FastAPI backend
│   ├── main.py             # FastAPI application entry point
│   ├── ollama_chain.py     # Ollama + LangChain integration
│   ├── routes/             # API route handlers
│   ├── utils/              # Utility functions
│   ├── quiz/               # Quiz generation logic
│   ├── notes/              # Note management features
│   └── requirements.txt    # Python dependencies
├── frontend/               # Next.js frontend
│   ├── src/
│   │   └── app/           # Next.js app router pages
│   ├── public/            # Static assets
│   ├── package.json       # Node.js dependencies
│   └── tailwind.config.js # Tailwind configuration
├── .gitignore             # Git ignore rules
├── LICENSE                # MIT License
└── README.md              # This file
```

## 🛠️ Development

### Backend Development
```bash
cd backend
# Install dependencies
pip install -r requirements.txt

# Run development server with auto-reload
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development
```bash
cd frontend
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for more details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Ollama](https://ollama.ai) for local LLM capabilities
- [LangChain](https://langchain.com) for AI workflow orchestration
- [FastAPI](https://fastapi.tiangolo.com) for the robust backend framework
- [Next.js](https://nextjs.org) for the powerful frontend framework
- [Tailwind CSS](https://tailwindcss.com) for beautiful, responsive styling

## 📞 Support

If you have any questions or need help getting started, please:
- Check the [documentation](docs/)
- Open an [issue](https://github.com/yourusername/StudyPal-AI/issues)
- Join our [community discussions](https://github.com/yourusername/StudyPal-AI/discussions)

---

**Built with ❤️ for learners everywhere**
