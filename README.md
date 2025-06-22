# StudyPal-AI 

<div align="center">

![StudyPal-AI Logo](https://img.shields.io/badge/StudyPal--AI-v0.1.0-blue?style=for-the-badge&logo=robot)

**🎯 Your Intelligent Study Companion - Fully Offline AI-Powered Learning**

[![Development Status](https://img.shields.io/badge/Status-Under%20Development-orange?style=flat-square)](https://github.com/yourusername/StudyPal-AI)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

---

### ⚠️ **PROJECT UNDER ACTIVE DEVELOPMENT** ⚠️
*This project is currently in early development. Features are being actively built and tested. Expect breaking changes and incomplete functionality.*

</div>

## 🌟 Vision

StudyPal-AI is being built as the ultimate **offline-first AI study assistant** that combines cutting-edge artificial intelligence with complete privacy and data ownership. Our mission is to democratize access to personalized education technology while ensuring your learning data remains entirely under your control.

## ✨ Current Features

### 🧠 AI Topic Explainer *(Beta)*
- **Smart Explanations**: Get clear, context-aware explanations for any topic
- **Interactive Interface**: Beautiful, responsive UI with real-time processing
- **Offline AI**: Powered by locally-running Llama models via Ollama
- **Privacy-First**: All processing happens on your device

### 📄 PDF Summarizer *(In Development)*
- **Document Processing**: Upload and extract text from PDF files
- **AI Summarization**: Generate concise summaries of lengthy documents
- **Chunk Analysis**: Break down large documents into manageable sections
- **Visual Interface**: Modern drag-and-drop file upload experience

## 🚧 Planned Features

<details>
<summary><strong>📚 Smart Study Plans</strong> <em>(Coming Soon)</em></summary>

- Generate personalized study schedules based on your goals and timeline
- Adaptive planning that adjusts to your progress and performance
- Multi-subject support with intelligent cross-referencing
- Learning style optimization and study method recommendations
</details>

<details>
<summary><strong>🧩 Interactive Quizzes</strong> <em>(Coming Soon)</em></summary>

- AI-generated quizzes tailored to your study materials
- Multiple question formats (MCQ, True/False, Short Answer, Essays)
- Real-time feedback with detailed explanations
- Progress tracking and performance analytics
</details>

<details>
<summary><strong>� Smart Notes</strong> <em>(Coming Soon)</em></summary>

- Intelligent note-taking with AI-powered insights
- Automatic categorization, tagging, and organization
- Cross-reference connections between concepts
- Summary generation and key point extraction
</details>

<details>
<summary><strong>🎯 Learning Analytics</strong> <em>(Coming Soon)</em></summary>

- Comprehensive learning progress tracking
- Identify knowledge gaps and suggest focus areas
- Personalized learning recommendations
- Study session optimization and time management
</details>

## 🏗️ Technical Architecture

### � Backend Stack
- **[FastAPI](https://fastapi.tiangolo.com/)** - High-performance Python web framework
- **[LangChain](https://python.langchain.com/)** - AI workflow orchestration and management
- **[Ollama](https://ollama.ai/)** - Local LLM model execution and management
- **[Python 3.8+](https://python.org/)** - Core application logic and AI integrations

### 🎨 Frontend Stack
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and RSC
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Modern utility-first CSS framework
- **[React 19](https://react.dev/)** - Component-based UI architecture

### 🔐 Core Principles
- **Privacy-First**: All data processing happens locally
- **Offline-Capable**: Works without internet after initial setup
- **Open Source**: Transparent, community-driven development
- **Performant**: Optimized for speed and resource efficiency

## 🚀 Quick Start Guide

### Prerequisites
```bash
# Required software
- Python 3.8+ 
- Node.js 18+
- Git
- Ollama (for AI functionality)
```

### 1️⃣ Clone & Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/StudyPal-AI.git
cd StudyPal-AI
```

### 2️⃣ Backend Setup
```bash
cd backend
pip install -r requirements.txt
python main.py
```
*Backend will be available at `http://localhost:8000`*

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Frontend will be available at `http://localhost:3000`*

### 4️⃣ AI Model Setup
```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
# Then pull a model:
ollama pull llama3.2
ollama serve
```

## 📁 Project Structure

```
StudyPal-AI/
├── 🔧 backend/                   # FastAPI Application
│   ├── main.py                  # Application entry point
│   ├── ollama_chain.py          # AI model integration
│   ├── routes/                  # API endpoints
│   │   ├── summarize.py         # PDF summarization
│   │   └── explain.py           # Topic explanation
│   ├── utils/                   # Utility modules
│   │   └── pdf_parser.py        # PDF processing
│   └── requirements.txt         # Python dependencies
├── 🎨 frontend/                  # Next.js Application
│   ├── src/
│   │   ├── app/                 # App Router pages
│   │   │   ├── page.tsx         # Main application page
│   │   │   ├── layout.tsx       # Root layout
│   │   │   └── globals.css      # Global styles
│   │   └── components/          # React components
│   │       └── PDFUploader.tsx  # PDF upload component
│   ├── package.json             # Node.js dependencies
│   └── tailwind.config.ts       # Tailwind configuration
├── 📄 docs/                     # Documentation
├── 📋 LICENSE                   # MIT License
└── 📖 README.md                 # This file
```

## 🛠️ Development Workflow

### Backend Development
```bash
cd backend

# Install dependencies in development mode
pip install -r requirements.txt

# Run with auto-reload for development
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Run tests
pytest tests/

# Format code
black . && isort .
```

### Frontend Development
```bash
cd frontend

# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build
npm run start

# Linting and formatting
npm run lint
npm run lint:fix
```

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

### 🐛 Bug Reports
- Use the [issue tracker](https://github.com/yourusername/StudyPal-AI/issues)
- Provide detailed reproduction steps
- Include system information and error logs

### 💡 Feature Requests
- Check existing [discussions](https://github.com/yourusername/StudyPal-AI/discussions)
- Describe the feature's value and use cases
- Consider implementation complexity

### 🔧 Development Contributions
```bash
# 1. Fork and clone the repository
git clone https://github.com/your-username/StudyPal-AI.git

# 2. Create a feature branch
git checkout -b feature/amazing-new-feature

# 3. Make your changes and test thoroughly
npm run test  # Frontend tests
pytest        # Backend tests

# 4. Commit with clear, descriptive messages
git commit -m "feat: add amazing new feature with tests"

# 5. Push and create a Pull Request
git push origin feature/amazing-new-feature
```

### 📋 Development Guidelines
- Follow existing code style and conventions
- Write comprehensive tests for new features
- Update documentation for any API changes
- Ensure all tests pass before submitting PRs

## 🚀 Deployment

### Development Deployment
```bash
# Using Docker Compose (recommended)
docker-compose up --build

# Or manually
# Terminal 1: Backend
cd backend && python main.py

# Terminal 2: Frontend  
cd frontend && npm run dev
```

### Production Deployment
```bash
# Frontend build
cd frontend
npm run build
npm run start

# Backend production
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 📊 Current Development Status

| Component | Status | Completion |
|-----------|--------|------------|
| 🧠 Topic Explainer | ✅ Beta | 85% |
| 📄 PDF Summarizer | 🚧 Development | 60% |
| 📝 Smart Notes | 📋 Planned | 0% |
| 🧩 Interactive Quizzes | 📋 Planned | 0% |
| 📚 Study Plans | 📋 Planned | 0% |
| 🎯 Analytics | 📋 Planned | 0% |

## 🧪 Testing

```bash
# Backend tests
cd backend
pytest tests/ -v --cov=.

# Frontend tests
cd frontend
npm run test
npm run test:e2e
```

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

## 🙏 Acknowledgments

- **[Ollama Team](https://ollama.ai)** - For making local LLM deployment accessible
- **[LangChain](https://langchain.com)** - For powerful AI workflow orchestration
- **[Vercel Team](https://vercel.com)** - For Next.js and deployment platform
- **[FastAPI](https://fastapi.tiangolo.com)** - For the excellent Python web framework
- **[Tailwind Labs](https://tailwindcss.com)** - For the beautiful utility-first CSS

## 📞 Support & Community

<div align="center">

### Need Help? We're Here!

[![GitHub Issues](https://img.shields.io/badge/Issues-Ask%20Questions-red?style=for-the-badge&logo=github)](https://github.com/yourusername/StudyPal-AI/issues)
[![GitHub Discussions](https://img.shields.io/badge/Discussions-Join%20Community-purple?style=for-the-badge&logo=github)](https://github.com/yourusername/StudyPal-AI/discussions)
[![Documentation](https://img.shields.io/badge/Docs-Read%20More-blue?style=for-the-badge&logo=gitbook)](docs/)

</div>

---

<div align="center">

**🎓 Built with ❤️ for learners everywhere**

*Empowering education through open-source AI technology*

[![GitHub Stars](https://img.shields.io/github/stars/yourusername/StudyPal-AI?style=social)](https://github.com/yourusername/StudyPal-AI/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/yourusername/StudyPal-AI?style=social)](https://github.com/yourusername/StudyPal-AI/network/members)

</div>
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

**Built with ❤️ by MananVyas01 for learners everywhere**
