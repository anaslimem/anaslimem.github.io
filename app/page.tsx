
import Image from "next/image"
import Link from "next/link"
import { SiHuggingface, SiX, SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Resume Button at Top */}
      <div className="flex justify-end mb-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2  text-black font-semibold rounded shadow"
        >
          View Resume
        </a>
      </div>
      {/* Header Section */}
      <header className="text-center mb-8">
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-40 h-40 mb-4 rounded-full overflow-hidden">
            <Image
              src="/anas.jpg"
              alt="Anas Limem Profile Photo"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-1">Anas Limem</h1>
          <span className="text-lg text-gray-700 font-semibold mb-1">Machine Learning Engineer</span>
          <span className="text-gray-700">Tunisia</span>
          <span className="text-gray-700">limemanas0@gmail.com</span>
          <span className="text-gray-700">+216 21293957</span>
        </div>
        <div className="flex justify-center gap-3 mb-4">
          <Link href="https://github.com/anaslimem" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiGithub size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/anaslimem/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://x.com/limemanas0" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiX size={20} />
            <span className="sr-only">X</span>
          </Link>
          <Link href="https://huggingface.co/Anaslimem1" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiHuggingface size={20} />
            <span className="sr-only">Hugging Face</span>
          </Link>
          <Link href="mailto:limemanas0@gmail.com" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
            <SiMailboxdotorg size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </header>

      {/* About Me Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I'm a junior machine learning and AI engineer passionate about transforming ideas into reality through end-to-end projects. I dive into new technologies whether it's mastering the latest deep learning frameworks or exploring innovative algorithms. When I'm not coding, I'm experimenting with new tools, optimizing models. I am always eager to learn and take on new challenges in the ever-evolving field of AI.
        </p>
        <hr className="my-8 border-gray-200" />
      </section>
      {/* Professional Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Vision Age VFX</strong> - Machine Learning Engineer Intern <span className="text-gray-500">09/2025 – Present</span><br />
            • Engineered a feedback model that automatically generates insightful reports tailored to user-specific criteria, improving decision making efficiency.<br />
            • Built a machine learning recommendation system that identifies and suggests top performing users, enhancing engagement and matching accuracy.
          </li>
          <li>
            <strong>BlueBlood</strong> - NLP Engineer Intern <span className="text-gray-500">02/2024 – 05/2024</span><br />
            • Designed and implemented a parser to extract structured data from diverse CV formats and enhanced semantic understanding using LLM APIs.<br />
            • Built a similarity-matching system to rank candidate profiles based on relevance.<br />
            • Managed and queried candidate embeddings efficiently using a vector database.
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Higher Institute of Applied Sciences and Technology of Mateur<br />B.Sc. in Computer Science <span className="text-gray-500">09/2023 – Present</span></li>
          <li>El Alia High School<br />Baccalaureate of Mathematics <span className="text-gray-500">09/2019 – 06/2023</span></li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Optimizers-from-Scratch</strong><br />
            Implemented a tiny MLP to classify MNIST digits, building both forward and backward passes from scratch without relying on autograd. Explored core concepts of neural network optimization and gradient computation.<br />
            <Link href="https://github.com/anaslimem/Optimizers-from-Scratch" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Repository link</Link>
          </li>
          <li>
            <strong>VectorMind AI</strong><br />
            An AI-powered platform enabling interaction with your documents. Upload PDFs, text files, or paste raw text, and receive accurate, context-aware responses powered by advanced language models. Designed for document search, knowledge extraction, and intelligent Q&A.<br />
            <Link href="https://github.com/anaslimem/VectorMind-AI" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Repository link</Link>
          </li>
          <li>
            <strong>AI-Career-Mentor</strong><br />
            AI-Career-Mentor is a cloud-native, AI-powered application that helps users analyze CVs, match them against job requirements, detect skill gaps, and generate personalized learning roadmaps.<br />
            <Link href="https://github.com/anaslimem/AI-Career-Mentor" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Repository link</Link>
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Mastering Learning Rate Schedulers in Deep Learning</strong><br />
            <a href="https://medium.com/@limemanas0/mastering-learning-rate-schedulers-in-deep-learning-38790635cf71" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read on Medium</a>
          </li>
          <li>
            <strong>CV Extraction Isn’t as Easy as I Thought</strong><br />
            <a href="https://medium.com/@limemanas0/cv-extraction-isnt-as-easy-as-i-thought-7f92807e3aae" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read on Medium</a>
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2 pl-2">
          <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white&style=flat" alt="Python" className="h-5" />
          <img src="https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white&style=flat" alt="PyTorch" className="h-5" />
          <img src="https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white&style=flat" alt="TensorFlow" className="h-5" />
          <img src="https://img.shields.io/badge/scikit--learn-F7931E?logo=scikitlearn&logoColor=white&style=flat" alt="scikit-learn" className="h-5" />
          <img src="https://img.shields.io/badge/LangChain-0C8CE9?style=flat" alt="LangChain" className="h-5" />
          <img src="https://img.shields.io/badge/Ollama-000000?style=flat" alt="Ollama" className="h-5" />
          <img src="https://img.shields.io/badge/FAISS-005F9E?style=flat" alt="FAISS" className="h-5" />
          <img src="https://img.shields.io/badge/ChromaDB-FF0080?style=flat" alt="ChromaDB" className="h-5" />
          <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white&style=flat" alt="FastAPI" className="h-5" />
          <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat" alt="Docker" className="h-5" />
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white&style=flat" alt="Kubernetes" className="h-5" />
          <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=flat" alt="GitHub Actions" className="h-5" />
          <img src="https://img.shields.io/badge/Azure%20Blob%20Storage-0078D4?logo=microsoftazure&logoColor=white&style=flat" alt="Azure Blob Storage" className="h-5" />
        </div>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} - Anas Limem</p>
      </footer>
    </div>
  )
}
