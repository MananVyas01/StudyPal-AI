'use client';

import { useState } from 'react';
import PDFUploader from '../components/PDFUploader';

interface ExplanationResponse {
  topic: string;
  explanation: string;
  success: boolean;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'explainer' | 'summarizer'>('explainer');
  const [topic, setTopic] = useState('');
  const [explanation, setExplanation] = useState<ExplanationResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic to explain');
      return;
    }

    setLoading(true);
    setError('');
    setExplanation(null);

    try {
      const response = await fetch('http://localhost:8000/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ExplanationResponse = await response.json();
      setExplanation(result);
    } catch (err) {
      setError('Failed to get explanation. Make sure the backend is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            
            <h1 className="text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
              StudyPal-AI
            </h1>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Your AI Study Assistant
              </h2>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <p className="relative text-xl text-blue-100 max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg px-8 py-4 border border-white/20">
                ✨ Explain topics and summarize PDFs with powerful AI technology
              </p>
            </div>
          </div>

          {/* Main Interface */}
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('explainer')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === 'explainer'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    🧠 Topic Explainer
                  </button>
                  <button
                    onClick={() => setActiveTab('summarizer')}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === 'summarizer'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    📄 PDF Summarizer
                  </button>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'explainer' ? (
              <div>
                {/* Topic Input Card */}
                <div className="relative group mb-12">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="topic" className="block text-lg font-semibold text-gray-800 mb-3">
                          🎯 What would you like to explore today?
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Try: Quantum Computing, Photosynthesis, Black Holes, Machine Learning..."
                            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm placeholder-gray-500"
                            disabled={loading}
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={loading || !topic.trim()}
                        className="w-full relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-2xl hover:shadow-blue-500/25"
                      >
                        {loading ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="text-lg">AI is thinking...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Explain with AI Magic ✨
                          </div>
                        )}
                      </button>
                    </form>

                    {error && (
                      <div className="mt-6 relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg blur opacity-75"></div>
                        <div className="relative bg-red-50 border border-red-200 rounded-lg p-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-red-700 font-medium">{error}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Explanation Output */}
                {explanation && (
                  <div className="relative group animate-fadeIn">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                      <div className="flex items-center mb-6">
                        <div className={`w-4 h-4 rounded-full mr-4 ${explanation.success ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          🧠 {explanation.topic}
                        </h2>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                          {explanation.explanation}
                        </div>
                      </div>

                      {explanation.success && (
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="font-medium">Powered by Local AI • 100% Private • StudyPal-AI</span>
                            </div>
                            <button
                              onClick={() => {
                                setTopic('');
                                setExplanation(null);
                                setError('');
                              }}
                              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                            >
                              Ask Another Question
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {/* PDF Summarizer Content */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
                    <PDFUploader />
                  </div>
                </div>
              </div>
            )}

            {/* Features Showcase */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "AI Explanations",
                  desc: "Crystal-clear explanations for any topic",
                  gradient: "from-blue-500 to-cyan-500",
                  active: true
                },
                {
                  icon: "📄",
                  title: "PDF Summarizer",
                  desc: "Extract and summarize PDF content",
                  gradient: "from-green-500 to-emerald-500",
                  active: true
                },
                {
                  icon: "🎯",
                  title: "Smart Quizzes",
                  desc: "Interactive learning experiences",
                  gradient: "from-purple-500 to-pink-500",
                  active: false
                }
              ].map((feature, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-2xl`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-100">{feature.desc}</p>
                    {!feature.active && (
                      <div className="mt-3">
                        <span className="inline-block bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-16 text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <p className="text-white/80 text-lg">
                  🚀 <span className="font-semibold">Fully Offline</span> • <span className="font-semibold">100% Private</span> • <span className="font-semibold">Powered by Local AI</span>
                </p>
              </div>
            </div>        </div>
      </div>
    </div>
  );
}
