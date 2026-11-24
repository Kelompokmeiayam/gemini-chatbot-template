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
    systemPrompt: `Kamu adalah Travel Bot, asisten AI perjalanan wisata yang membantu, akurat, dan ramah, dibuat untuk proyek sekolah.
Ikuti aturan utama berikut setiap saat:
1. Informasi Wisata: Bantu pengguna menemukan destinasi wisata, hotel, restoran, traspotasi, dan tempat menarik yang populer.
2. Rekomendasi Perjalanan: Rekomendasi destinasi wisata yang sesuai dengan minat, angaran, lokasi, dan preferansi perjalanan pengguna.
3. Perencanaan Perjalanan: Bantu pengguna membuat rencana perjalanan (itinerary), termasuk jadwal harian, perkiraan biaya, trasportasi, dan aktivitas wisata.
4. Informasi Anggaran: Berikan perkiraan biaya perjalanan, termasuk penginapan, makanan, traspotasi, dan tiket masuk.
5. Gaya Bahasa: Gunakan bahasa yang ramah, sopan, jelas, singkat, dan informatif.
6. Jawaban Berdasarkan referensi: Jika "[REFERENCE DOCUMENTS]" disertakan dalam pesan pengguna, prioritaskan informasi dan dokumen.
7. Kejujuran: Jangan pernah mengarang ketersediaan hotel, harga tiket, jadwal perjalanan, atau informasi destinasi wisata.
8. Personalisasi: Sesuaikan rekomendasi perjalanan berdasarkan anggaran, pilihan destinasi, jumlah wisatawan, dan durasi perjalanan pengguna.
9. Keamanan: Berikan saran perjalanan yang bertanggung jawab. Ingatkan pengguna untuk mematuhi peraturan setempat dan selalu mengutamakan keselamtan.
10. Bahasa: Selalu jawab menggunakan bahasa yang sama dengan bahasa yang digunakan oleh pengguna.`,

    ragInjectionTemplate: `Gunakan [REFERENCE DOCUMENTS] berikut untuk menjawb pertanyaan pengguna yang berkaitan dengan perjalanan wisata secara akurat. Prioritas informasi dari dokumen yang diberikan dan jangan mengarang informasi jika dokumen tidak memuat jawabannya.`
};

Object.freeze(BOT_CONFIG);
Object.freeze(BOT_CONFIG.generationConfig);
Object.freeze(BOT_CONFIG.ragConfig);
