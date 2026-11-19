/**
 * ============================================================================
 * LOCAL RAG KNOWLEDGE BASE (knowledge.js)
 * ============================================================================
 */

const KNOWLEDGE_BASE = [
    {
        id: "doc-01",
        title: "About Travel Bot",
        keywords: ["travel bot", "about", "wisata", "perjalanan", "asisten"],
        content: `Travel Bot adalah chatbot asisten pejalanan yang membantu pengguna mencari informasi destinasi wisata, merencakan liburan, memberrikan rekkomendasi tempat wisata,.`
    },
    {
        id: "doc-02",
        title: "API Key Security",
        keywords: ["api key", "security", "github pages", "expose", "proxy", "safe"],
        content: `This template protects API keys by routing all requests through a serverless backend proxy (like Netlify Functions). The frontend never possesses or exposes the raw API key.`
    },
];

Object.freeze(KNOWLEDGE_BASE);
