import Assets from "./data/assets";
import { getSkills } from "./skills.params";
import type { Project } from "./types";

const MY_PROJECTS: Array<Project> = [
  {
    slug: "advanced-rag-system",
    color: "orange",
    description: `
      <h3>Engineered an end-to-end knowledge retrieval system to perform Q&A over a large document corpus.</h3>
      <ul>
        <li><b>Local LLM Integration:</b> Utilized a quantized version of Qwen for the generation component, running efficiently on local hardware.</li>
        <li><b>Advanced Retrieval Pipeline:</b> Implemented a two-stage retrieval process using FAISS for fast vector search and a Cohere Reranker to improve context relevance before sending it to the LLM.</li>
        <li><b>Containerized API:</b> Packaged the entire application, including the embedding and generation models, into a Docker container with a FastAPI endpoint for easy integration.</li>
      </ul>
    `,
    shortDescription: "An advanced Retrieval-Augmented Generation system using local LLMs, vector search, and reranking.",
    links: [], // No link as requested
    logo: Assets.Unknown,
    name: "Advanced RAG System",
    period: { from: new Date(2023, 8, 1) }, // Started in Sep 2023
    skills: getSkills('python', 'llms', 'docker', 'fastapi', 'pytorch'),
    type: "Personal R&D Project",
  },
  {
    slug: "multi-tool-ai-agent",
    color: "purple",
    description: `
      <h3>Developed an intelligent agent capable of using external tools to answer complex, real-time user queries.</h3>
      <ul>
        <li><b>Function Calling with Local LLMs:</b> Implemented the OpenAI-compatible function calling standard with a local Gemma model, allowing the agent to dynamically call custom Python functions.</li>
        <li><b>Multi-Step Reasoning Logic:</b> Designed a robust execution loop that enables the agent to chain multiple tool calls together to resolve a single, complex request (e.g., find a location, then get its weather).</li>
        <li><b>Real-World API Integration:</b> Successfully integrated tools for fetching live data from public APIs (e.g., weather, currency exchange) and performing web searches.</li>
      </ul>
    `,
    shortDescription: "A conversational agent using local LLMs and function calling to interact with real-world APIs.",
    links: [], // No link as requested
    logo: Assets.Unknown,
    name: "AI Agent with Dynamic Tool Use",
    period: { from: new Date(2024, 1, 1) }, // Started in Feb 2024
    skills: getSkills('python', 'llms', 'fastapi'),
    type: "Personal R&D Project",
  }
];

export default MY_PROJECTS;