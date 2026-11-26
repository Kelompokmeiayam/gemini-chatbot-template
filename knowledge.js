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
        content: `Jawa Barat memiliki banyak wisata menarik seperti Bogor, Sukabumi, Cianjur, Bandung, Garut, Tasikmalaya, Ciamis, Kuningan, Cirebon, Majalengka, Sumedang, Indramayu, Subang, Purwakarta, Karawang, Bekasi, Bandung Barat, pangandaran. Setiap daerah memiliki ke indahan alam, budaya, serta kuliner khas yang berbeda.`
    },
    {
        id: "doc-09",
        title: "Etika dan Keamanan Wisata",
        keywords: ["keamanan", "keselamatan", "etika", "aturan", "wisata"],
        content: `Saat berwisata, selalu jaga barang pribadi, patuhi peraturan tempat wisata, hormati budaya setempat, dan utamakan keselamatan selama perjalanan.`
    },      
    {
        id: "doc-10",
        title: "Wisata Kabupaten Bogor",
        keywords: ["Kabupaten Bogor", "Puncak", "Taman Safari", "Curug Nangka", "Gunung Salak"],
        content: "Kabupaten Bogor memiliki wisata terkenal seperti Taman Safari Indonesia, kawasan Puncak, Curug Nangka, dan Gunung Salak. Daerah ini terkenal dengan wisata alam, pegunungan, dan udara sejuk."
    },
    {
        id: "doc-11",
        title: "Wisata Kabupaten Sukabumi",
        keywords: ["Kabupaten Sukabumi", "Geopark Ciletuh", "Situ Gunung", "Pelabuhan Ratu", "Curug Cikaso"],
        content: "Kabupaten Sukabumi memiliki wisata seperti Geopark Ciletuh, Situ Gunung, Pantai Pelabuhan Ratu, dan Curug Cikaso. Daerah ini terkenal dengan wisata pantai, air terjun, dan pegunungan."
    },
    {
        id: "doc-12",
        title: "Wisata Kabupaten Cianjur",
        keywords: ["Cianjur", "Kebun Raya Cibodas", "Taman Bunga Nusantara", "Cipanas", "Gunung Gede"],
        content: "Kabupaten Cianjur memiliki wisata seperti Kebun Raya Cibodas, Taman Bunga Nusantara, kawasan Cipanas, dan Gunung Gede. Daerah ini terkenal dengan wisata alam dan perkebunan."
    },
    {
        id: "doc-13",
        title: "Wisata Kabupaten Bandung",
        keywords: ["Kabupaten Bandung", "Kawah Putih", "Ranca Upas", "Situ Patenggang", "Ciwidey"],
        content: "Kabupaten Bandung memiliki wisata terkenal seperti Kawah Putih, Ranca Upas, Situ Patenggang, dan perkebunan teh Ciwidey. Daerah ini terkenal dengan wisata alam dan udara sejuk."
    },
    {
        id: "doc-14",
        title: "Wisata Kabupaten Garut",
        keywords: ["Garut", "Gunung Papandayan", "Pantai Santolo", "Cipanas", "Kawah Kamojang"],
        content: "Kabupaten Garut memiliki wisata seperti Gunung Papandayan, Pantai Santolo, Kawah Kamojang, dan pemandian air panas Cipanas. Garut terkenal dengan dodol Garut dan wisata alam."
    },
    {
        id: "doc-15",
        title: "Wisata Kabupaten Tasikmalaya",
        keywords: ["Kabupaten Tasikmalaya", "Gunung Galunggung", "Pantai Cipatujah", "Curug Dengdeng", "Situ Sanghyang"],
        content: "Kabupaten Tasikmalaya memiliki wisata seperti Gunung Galunggung, Pantai Cipatujah, Curug Dengdeng, dan Situ Sanghyang. Daerah ini terkenal dengan wisata alam dan budaya."
    },
    {
        id: "doc-16",
        title: "Wisata Kabupaten Ciamis",
        keywords: ["Ciamis", "Situ Lengkong Panjalu", "Astana Gede", "Karangkamulyan", "Wisata alam"],
        content: "Kabupaten Ciamis memiliki wisata seperti Situ Lengkong Panjalu, Situs Astana Gede, dan Karangkamulyan. Daerah ini memiliki wisata sejarah, budaya, dan alam."
    },
    {
        id: "doc-17",
        title: "Wisata Kabupaten Kuningan",
        keywords: ["Kuningan", "Telaga Remis", "Waduk Darma", "Gunung Ciremai", "Curug Putri"],
        content: "Kabupaten Kuningan memiliki wisata seperti Telaga Remis, Waduk Darma, Taman Nasional Gunung Ciremai, dan Curug Putri. Daerah ini terkenal dengan wisata pegunungan dan danau."
    },
    {
        id: "doc-18",
        title: "Wisata Kabupaten Cirebon",
        keywords: ["Kabupaten Cirebon", "Batik Trusmi", "Wisata Cirebon", "Plangon", "Kuliner"],
        content: "Kabupaten Cirebon memiliki wisata seperti kawasan Batik Trusmi, Taman Wisata Plangon, dan berbagai wisata budaya. Daerah ini terkenal dengan kerajinan batik dan kuliner tradisional."
    },
    {
        id: "doc-19",
        title: "Wisata Kabupaten Majalengka",
        keywords: ["Majalengka", "Terasering Panyaweuyan", "Curug Cipeuteuy", "Situ Cipanten", "Gunung Ciremai"],
        content: "Kabupaten Majalengka memiliki wisata seperti Terasering Panyaweuyan, Curug Cipeuteuy, dan Situ Cipanten. Daerah ini terkenal dengan pemandangan alam dan perbukitan yang indah."
    },
    {
        id: "doc-20",
        title: "Wisata Kabupaten Sumedang",
        keywords: ["Sumedang", "Waduk Jatigede", "Kampung Toga", "Gunung Kunci", "Tahu Sumedang"],
        content: "Kabupaten Sumedang memiliki wisata seperti Waduk Jatigede, Kampung Toga, dan Taman Hutan Raya Gunung Kunci. Sumedang terkenal dengan makanan khas tahu Sumedang."
    },
    {
        id: "doc-21",
        title: "Wisata Kabupaten Indramayu",
        keywords: ["Indramayu", "Pantai Tirtamaya", "Pulau Biawak", "Pantai Karangsong", "Wisata pantai"],
        content: "Kabupaten Indramayu memiliki wisata seperti Pantai Tirtamaya, Pulau Biawak, dan Pantai Karangsong. Daerah ini terkenal dengan wisata pantai, hasil laut, dan buah mangga."
    },
    {
        id: "doc-22",
        title: "Wisata Kabupaten Subang",
        keywords: ["Subang", "Sari Ater", "Ciater", "Curug Cijalu", "Pantai Pondok Bali"],
        content: "Kabupaten Subang memiliki wisata seperti Sari Ater Ciater, Curug Cijalu, Curug Cileat, dan Pantai Pondok Bali. Subang terkenal dengan pemandian air panas, perkebunan teh, dan buah nanas."
    },
    {
        id: "doc-23",
        title: "Wisata Kabupaten Purwakarta",
        keywords: ["Purwakarta", "Waduk Jatiluhur", "Gunung Lembu", "Sri Baduga", "Wisata alam"],
        content: "Kabupaten Purwakarta memiliki wisata seperti Waduk Jatiluhur, Gunung Lembu, dan Taman Air Mancur Sri Baduga. Daerah ini terkenal dengan wisata danau dan pemandangan alam."
    },
    {
        id: "doc-24",
        title: "Wisata Kabupaten Karawang",
        keywords: ["Karawang", "Pantai Tanjung Pakis", "Curug Cigentis", "Candi Jiwa", "Pantai"],
        content: "Kabupaten Karawang memiliki wisata seperti Pantai Tanjung Pakis, Curug Cigentis, dan Situs Candi Jiwa. Daerah ini memiliki wisata pantai, sejarah, dan alam."
    },
    {
        id: "doc-25",
        title: "Wisata Kabupaten Bekasi",
        keywords: ["Kabupaten Bekasi", "Pantai Muara Beting", "Hutan Mangrove", "Situ Rawa Gede", "Wisata alam"],
        content: "Kabupaten Bekasi memiliki wisata seperti Pantai Muara Beting, kawasan hutan mangrove, dan Situ Rawa Gede. Daerah ini memiliki wisata alam dan kawasan pesisir."
    },
    {
        id: "doc-26",
        title: "Wisata Kabupaten Bandung Barat",
        keywords: ["Bandung Barat", "Lembang", "Gunung Tangkuban Perahu", "Curug Malela", "Stone Garden"],
        content: "Kabupaten Bandung Barat memiliki wisata seperti Gunung Tangkuban Perahu, Curug Malela, Stone Garden, dan berbagai wisata Lembang. Daerah ini terkenal dengan wisata alam dan pegunungan."
    },
    {
        id: "doc-27",
        title: "Wisata Kabupaten Pangandaran",
        keywords: ["Pangandaran", "Pantai Pangandaran", "Green Canyon", "Pantai Batu Hiu", "Batu Karas"],
        content: "Kabupaten Pangandaran memiliki wisata seperti Pantai Pangandaran, Green Canyon, Pantai Batu Hiu, dan Pantai Batu Karas. Daerah ini terkenal dengan wisata pantai dan keindahan laut."
    },
    {
        id: "doc-28",
        title: "Wisata Kota Bandung",
        keywords: ["Kota Bandung", "Gedung Sate", "Jalan Braga", "Alun-Alun Bandung", "Museum"],
        content: "Kota Bandung memiliki wisata seperti Gedung Sate, Jalan Braga, Alun-Alun Bandung, dan Museum Geologi. Kota ini terkenal dengan wisata sejarah, belanja, dan kuliner seperti batagor."
    },
    {
        id: "doc-29",
        title: "Wisata Kota Bogor",
        keywords: ["Kota Bogor", "Kebun Raya Bogor", "Istana Bogor", "Museum Zoologi", "Kuliner"],
        content: "Kota Bogor memiliki wisata seperti Kebun Raya Bogor, Museum Zoologi, dan kawasan sekitar Istana Bogor. Kota ini terkenal dengan suasana sejuk dan kuliner asinan Bogor."
    },
    {
        id: "doc-30",
        title: "Wisata Kota Sukabumi",
        keywords: ["Kota Sukabumi", "Lapangan Merdeka", "Selabintana", "Wisata keluarga", "Kuliner"],
        content: "Kota Sukabumi memiliki tempat rekreasi seperti kawasan Selabintana di sekitarnya, Lapangan Merdeka, dan berbagai taman kota. Kota ini terkenal dengan suasana nyaman dan kuliner mochi."
    },
    {
        id: "doc-31",
        title: "Wisata Kota Cirebon",
        keywords: ["Kota Cirebon", "Keraton Kasepuhan", "Gua Sunyaragi", "Keraton Kanoman", "Empal Gentong"],
        content: "Kota Cirebon memiliki wisata seperti Keraton Kasepuhan, Keraton Kanoman, Gua Sunyaragi, dan Pantai Kejawanan. Kota ini terkenal dengan wisata sejarah, budaya, dan kuliner empal gentong."
    },
    {
        id: "doc-32",
        title: "Wisata Kota Bekasi",
        keywords: ["Kota Bekasi", "Go Wet Waterpark", "Hutan Kota", "Summarecon Mall", "Wisata keluarga"],
        content: "Kota Bekasi memiliki tempat rekreasi seperti Go! Wet Waterpark, Hutan Kota Patriot Bina Bangsa, dan berbagai pusat perbelanjaan. Kota ini cocok untuk wisata keluarga dan hiburan."
    },
    {
        id: "doc-33",
        title: "Wisata Kota Depok",
        keywords: ["Depok", "Situ Pengasinan", "D'Kandang", "Taman Wiladatika", "Wisata keluarga"],
        content: "Kota Depok memiliki tempat wisata seperti Situ Pengasinan, D'Kandang Amazing Farm, dan kawasan Taman Wiladatika. Depok cocok untuk wisata keluarga, rekreasi, dan kegiatan luar ruangan."
    },
    {
        id: "doc-34",
        title: "Wisata Kota Cimahi",
        keywords: ["Cimahi", "Alam Wisata Cimahi", "Curug Cimahi", "Wisata alam", "Kuliner"],
        content: "Kota Cimahi memiliki tempat wisata seperti kawasan rekreasi Alam Wisata Cimahi dan wisata alam di sekitar Curug Cimahi. Kota ini menawarkan pilihan wisata keluarga dan alam."
    },
    {
        id: "doc-35",
        title: "Wisata Kota Tasikmalaya",
        keywords: ["Kota Tasikmalaya", "Situ Gede", "Taman Wisata Karang Resik", "Payung Geulis", "Kuliner"],
        content: "Kota Tasikmalaya memiliki wisata seperti Situ Gede dan Taman Wisata Karang Resik. Kota ini terkenal dengan kerajinan payung geulis, bordir, dan kuliner khas."
    },
    {
        id: "doc-36",
        title: "Wisata Kota Banjar",
        keywords: ["Kota Banjar", "Situ Mustika", "Dobo", "Wisata alam", "Wisata keluarga"],
        content: "Kota Banjar memiliki tempat wisata seperti Situ Mustika dan berbagai kawasan rekreasi alam. Kota ini cocok untuk wisata keluarga dan menikmati suasana alam yang tenang."
    },
        
];

Object.freeze(KNOWLEDGE_BASE);
