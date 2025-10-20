import Image from "next/image";
import Link from "next/link";
import {
  SiHuggingface,
  SiX,
  SiGithub,
  SiLinkedin,
  SiMailboxdotorg,
} from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Resume Button */}
      <div className="flex justify-end mb-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-gray-900 text-white font-semibold rounded shadow hover:bg-gray-700 transition"
        >
          View Resume
        </a>
      </div>

      {/* Header */}
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
          <span className="text-lg text-gray-700 font-semibold mb-1">
            AI & Machine Learning Engineer
          </span>
          <span className="text-gray-700">Tunisia</span>
          <span className="text-gray-700">limemanas0@gmail.com</span>
          <span className="text-gray-700">+216 21 293 957</span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-4">
          <Link
            href="https://github.com/anaslimem"
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            target="_blank"
          >
            <SiGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/anaslimem/"
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            target="_blank"
          >
            <SiLinkedin size={20} />
          </Link>
          <Link
            href="https://x.com/limemanas0"
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            target="_blank"
          >
            <SiX size={20} />
          </Link>
          <Link
            href="https://huggingface.co/Anaslimem1"
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            target="_blank"
          >
            <SiHuggingface size={20} />
          </Link>
          <Link
            href="mailto:limemanas0@gmail.com"
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
          >
            <SiMailboxdotorg size={20} />
          </Link>
        </div>
      </header>

      {/* About Me */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4 text-gray-800 leading-relaxed">
          I'm a passionate AI and Machine Learning Engineer focused on building
          intelligent systems and autonomous AI agents. I enjoy transforming
          innovative ideas into practical, end-to-end solutions. My experience
          spans developing multi-agent frameworks, optimizing LLM pipelines,
          integrating vector databases, and deploying scalable AI services.
          Always eager to explore new technologies, I aim to design systems that
          think, adapt, and learn — just like humans.
        </p>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
        <ul className="list-disc pl-6 space-y-6 text-gray-800">
          <li>
            <strong>DrugIT</strong> — AI Engineer Intern{" "}
            <span className="text-gray-500">10/2025 – Present</span>
            <br />
            • Developed 4 autonomous AI agents using Google’s ADK framework to
            enhance pharmaceutical intelligence.<br />
            • Deployed multi-agent systems across 4 MCP servers, improving data
            retrieval and automation.<br />
            • Integrated Neo4j as a graph database for knowledge mapping and
            entity linking.
          </li>
          <li>
            <strong>Vision Age VFX</strong> — AI Intern{" "}
            <span className="text-gray-500">09/2025 – 11/2025</span>
            <br />
            • Built a feedback-driven model that automatically generates metric
            reports from performance data.<br />
            • Integrated an LLM for contextual report generation, reducing
            manual analysis time by 20%.
          </li>
          <li>
            <strong>BlueBlood</strong> — NLP Engineer Intern{" "}
            <span className="text-gray-500">02/2025 – 05/2025</span>
            <br />
            • Designed a robust CV parser for diverse document formats,
            increasing extraction accuracy by 30%.<br />
            • Enhanced semantic matching of candidate profiles using LLM APIs
            and FAISS for vector search.<br />
            • Improved top-ranked retrieval precision by 20%.
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>
              Higher Institute of Applied Sciences and Technology of Mateur
            </strong>
            <br />
            B.Sc. in Computer Science{" "}
            <span className="text-gray-500">09/2023 – Present</span>
          </li>
          <li>
            <strong>El Alia High School</strong>
            <br />
            Baccalaureate of Mathematics{" "}
            <span className="text-gray-500">2023</span>
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>VectorMind AI</strong><br />
            AI-powered document Q&A platform with LLM integration, allowing
            context-aware responses using FAISS and LangChain.<br />
            <Link
              href="https://github.com/anaslimem/VectorMind-AI"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Repository link
            </Link>
          </li>
          <li>
            <strong>AI-Career-Mentor</strong><br />
            Cloud-native AI application that analyzes CVs, detects skill gaps,
            and generates personalized learning roadmaps.<br />
            <Link
              href="https://github.com/anaslimem/AI-Career-Mentor"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Repository link
            </Link>
          </li>
          <li>
            <strong>Optimizers-from-Scratch</strong><br />
            Implemented a neural network from scratch to classify MNIST digits,
            achieving 97% accuracy and mastering backpropagation mechanics.<br />
            <Link
              href="https://github.com/anaslimem/Optimizers-from-scratch"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Repository link
            </Link>
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Certificates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Certificates</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Machine Learning Specialization — Coursera
          </li>
          <li>
            Generative AI with Diffusion Models — NVIDIA
          </li>
          <li>
            Building Transformer-Based NLP Applications — NVIDIA
          </li>
          <li>
            Getting Started with Deep Learning — NVIDIA
          </li>
          <li>
            Fundamentals of Accelerated Computing with CUDA Python — NVIDIA
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Blogs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Publications & Blogs</h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>
              Understanding REFRAG: Efficient LLM Compression and Curriculum
              Learning Explained
            </strong>
            <br />
            <a
              href="https://medium.com/@limemanas0/understanding-refrag-efficient-llm-compression-and-curriculum-learning-explained-3452498f99e8"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Read on Medium
            </a>
          </li>
          <li>
            <strong>
              Mastering Learning Rate Schedulers in Deep Learning
            </strong>
            <br />
            <a
              href="https://medium.com/@limemanas0/mastering-learning-rate-schedulers-in-deep-learning-38790635cf71"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Read on Medium
            </a>
          </li>
          <li>
            <strong>CV Extraction Isn’t as Easy as I Thought</strong>
            <br />
            <a
              href="https://medium.com/@limemanas0/cv-extraction-isnt-as-easy-as-i-thought-7f92807e3aae"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              Read on Medium
            </a>
          </li>
        </ul>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
        <div className="flex flex-wrap gap-2 pl-2">
          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "LangChain",
            "CrewAI",
            "ADK",
            "FAISS",
            "ChromaDB",
            "FastAPI",
            "Neo4j",
            "PostgreSQL",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "Azure Blob Storage",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <hr className="my-8 border-gray-200" />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} - Anas Limem</p>
      </footer>
    </div>
  );
}
