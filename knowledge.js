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
        content: `Travel Bot adalah chatbot asisten pejalanan yang membantu pengguna mencari informasi destinasi wisata, merencakan liburan, memberrikan rekkomendasi tempat wisata, serta memberikan tips perjalanan.`
    },
    {
        id: "doc-02",
        title: "Rekomendasi Destinasi Wisata",
        keywords: ["destinasi", "tempat wisata", "pantai", "gunung", "liburan"],
        content: `Travel Bot dapat mermberikan rekomendasi destinasi wisata seperti pantai, gunung, taman, museum, dan tempat bersejarah. Pengguna dapat menyebutkan lokasi atau jenis wisata yang diinginkan untuk mendapatkan rekomendasi.`
    },
    {
        id: "doc-03",
        title: "Perencanaan Perjalnan",
        keywords: ["itinerary", "jadwal", "rencana perjalanan", "liburan", "hari"],
        content: `Travel Bot membantu membuat rencana perjalanan atau itinerary berdasarkan tujuan wisata, lama liburan, jumlah hari, dan aktivitas yang ingin dilakukakan. Rencana perjalanan dapat disusun secara teratur dari hari pertama hingga hari terakhir.`
    },
    {
        id: "doc-04",
        title: "Informasi Transportasi ",
        keywords: ["transportasi", "kendaraan", "bus", "kereta", "pesawat", "mobil"],
        content: `Travel Bot memberikan informasi umum menegenai pilihan transportasi seperti bus, kereta api, pesawat, mobil pribadi, dan sepeda motor. Pengguna dapat memilih transportasi sesuai kebutuhan dan anggaran.`
    },
    {
        id: "doc-05",
        title: "Rekomendasi Penginapan ",
        keywords: ["hotel", "penginapan", "homestay", "villa", "tempat penginapan"],
        content: `Travel Bot membantu memberikan saran jenis penginapan seperti hotel, villa, homestay, dan guest house. Pilihan penginapan dapat disesuaikan dengan lokasi, fasilitas, dan anggaran perjalanan.`
    },
    {
        id: "doc-06",
        title: "Tips Sebelum Bepergian",
        keywords: ["tips", "persiapan", "barang bawaan", "perjalanan", "liburan"],
        content: `Sebelum berpegian, pastikan membawa identitas diri, pakaian secukupnya, obat pribadi jika diperlukan, uang, dan perlengkapan penting lainnya. Periksa kondisi kendaraan, cuaca, serta informasi tempat tujuan sebelum berangkat.`
    },
    {
        id: "doc-07",
        title: "Estimasi Anggaran Perjalanan ",
        keywords: ["budget", "anggaran", "biaya", "harga", "pengeluaran"],
        content: `Travel Bot memebantu memperkirakan anggaran perjalanan yang meliputi biaya transportasi, tiket masuk wisata, penginapan, makanan, dan kebutuhan lainnya. Biaya yang diberikan merupakan perkiraan dan dapat berubah sesuai kondisi.`
    },
    {
        id: "doc-08",
        title: "Wisata Di Jawa Barat",
        keywords: ["Bogor", "Sukabumi", "Cianjur", "Bandung", "Garut", "Tasikmalaya", "Ciamis", "Kuningan", "Cirebon", "Majalengka", "Sumedang", "Indramayu", "Subang", "Purwakarta", "Karawang", "Bekasi", "Bandung Barat", "pangandaran"],
        content: `Jawa Barat memiliki banyak wisata menarik seperti Garut, Bandung, Pangandaran, Bogor, dan Cianjur. Setiap daerah memiliki ke indahan alam, budaya, serta kuliner khas yang berbeda.`
    },
    {
        id: "doc-09",
        title: "Etika dan Keamanan Wisata",
        keywords: ["keamanan", "keselamatan", "etika", "aturan", "wisata"],
        content: `Saat berwisata, selalu jaga barang pribadi, patuhi peraturan tempat wisata, hormati budaya setempat, dan utamakan keselamatan selama perjalanan.`
    },
]

Object.freeze(KNOWLEDGE_BASE);
