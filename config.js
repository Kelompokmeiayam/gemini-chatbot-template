/**
 * ============================================================================
 * ADMIN CONFIGURATION FILE (config.js)
 * ============================================================================
 */

const BOT_CONFIG = {
    // ------------------------------------------------------------------------
    // 1. BRANDING & UI SETTINGS
    // ------------------------------------------------------------------------
    botName: "TRAVEL BOT",
    botSubtitle: "Powered by Google Gemini • Custom Knowledge Base",
    botAvatar: "🤖",
    userAvatar: "😍",
    welcomeHeading: "Hello! saya travel bot, apakah ada yang bisa saya bantu hari ini?",
    welcomeSubtext: "Pilih salah satu pertanyaan pembuka di bawah ini atau ketik pertanyaan Anda sendiri untuk memulai.",

    introCards: [
        {
            icon: "🏖️",
            title: "Rekomendasi Wisata",
            description: "Temukan tempat wisata menarik untuk liburan anda.",
            prompt: "Rekomendasi tempat wisata terbaik di Jawa Barat."
        },
        {
            icon: "🗺️",
            title: "Rencana perjalanan",
            description: "Buat jadwal perjalanan wisata yang menyenagkan.",
            prompt: "Buatkan jadwal liburan 7 hari 6 malam di Jawa Barat."
        },
        {
            icon: "💸",
            title: "Informasi Biaya",
            description: "Cari tahu perkiraan biaya liburan.",
            prompt: "Berapa perkiraan biaya liburan di kota-kota di Jawa Barat."
        },
        {
            icon: "🏨",
            title: "Hotel & Penginapan",
            description: "Temukan informasi hotel dan penginapan.",
            prompt: "Rekomendasi hotel murah dan nyaman di kota Sejawa Barat?"
        }
    ],

    // ------------------------------------------------------------------------
    // 2. SECURITY & ENDPOINT SETTINGS
    // ------------------------------------------------------------------------
    // PROXY_URL forces the app to route requests through your Netlify backend
    authMode: "PROXY_URL", 
    // Replace this with your actual Netlify function URL once deployed
    proxyEndpoint: "https://travelbott.netlify.app/.netlify/functions/gemini-proxy", 
    modelName: "gemini-3.5-flash-lite",

    // ------------------------------------------------------------------------
    // 3. ADVANCED GENERATION PARAMETERS
    // ------------------------------------------------------------------------
    generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 4096,
    },

    // ------------------------------------------------------------------------
    // 4. CONVERSATION MEMORY & RAG SETTINGS
    // ------------------------------------------------------------------------
    contextWindowLimit: 10,

    ragConfig: {
        enabled: true,
        topKChunks: 2,
        minRelevanceScore: 0.12
    },

    // ------------------------------------------------------------------------
    // 5. SYSTEM PROMPT & GUARDRAILS
    // ------------------------------------------------------------------------
    systemPrompt: `You are Nexus, a helpful, accurate, and friendly AI assistant created for a school project.
Follow these core rules at all times:
1. Tone & Style: Be clear, encouraging, concise, and structured. Use bullet points or bold text for readability.
2. Grounded Answers: When "[REFERENCE DOCUMENTS]" are provided with the user's message, prioritize those facts above all else.
3. Honesty: If you do not know the answer, state clearly what you know and do not fabricate facts.
4. Safety: Refuse to generate harmful, inappropriate, or academic-dishonesty content.`,

    ragInjectionTemplate: `Use the following [REFERENCE DOCUMENTS] to answer the user's question accurately. If the documents are not relevant to the question, rely on your general knowledge without mentioning the documents explicitly.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
