export type ProjectType = "web" | "mobile";

export type Project = {
  title: string;
  visitUrl?: string;
  tiktokUrl?: string;
  repositoryUrl?: string;
  documentationUrl?: string;
  image: string;
  posterImage?: string;
  description: string;
  descriptionId: string;
  technologies: string[];
  type: ProjectType;
  date: string; // ISO date string for sorting
};

export const PROJECTS_DATA: Project[] = [
  {
    title: "Avimagrafika Company Profile",
    visitUrl: "https://avimagrafika.com",
    tiktokUrl: "https://www.tiktok.com/@peerlessstonecleaver/photo/7639311070644980999", 
    repositoryUrl: "https://github.com/pendragonnn/avimagrafika-compro.git",
    image: "/images/avimagrafika.png",
    posterImage: "/images/avimagrafika_poster.png",
    description: "A 4-page responsive company profile website engineered for high visibility. I achieved a perfect 100 Lighthouse SEO score, integrated it with Google Search Console, and deployed it via Vercel with a custom domain.",
    descriptionId: "Website profil perusahaan responsif 4 halaman yang dirancang untuk visibilitas tinggi. Meraih skor sempurna 100 pada pengujian SEO Lighthouse, terintegrasi dengan Google Search Console, dan di-deploy melalui Vercel dengan domain kustom.",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    type: "web",
    date: "2026-04-07"
  },
  {
    title: "Job Tracker",
    visitUrl: "https://job-tracker-app-qrnz.vercel.app", 
    tiktokUrl: "https://www.tiktok.com/@peerlessstonecleaver/photo/7637528530418437384",
    repositoryUrl: "https://github.com/pendragonnn/job-tracker-app.git",
    image: "/images/job_tracker.png",
    posterImage: "/images/jobtracker_poster.png",
    description: "A web application designed to track job applications. It features a clean interface for logging application statuses, deadlines, and follow-up tasks.",
    descriptionId: "Aplikasi web yang dirancang untuk melacak lamaran kerja. Dilengkapi antarmuka yang bersih untuk mencatat status lamaran, tenggat waktu, dan daftar tugas lanjutan.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    type: "web",
    date: "2026-05-07"
  },
  {
    title: "Buds Studio E-Commerce",
    repositoryUrl: "https://github.com/pendragonnn/buds-studio-ecommerce-website", 
    documentationUrl: "https://drive.google.com/drive/folders/1LZqgI6re_Q-nBHePLn6hxGs-SqCnb_Kx?usp=sharing",
    image: "/images/buds_studio.png",
    description: "An e-commerce website built to manage product catalogs, orders, and customer reviews. It was developed as a full-stack project with a modern UI design.",
    descriptionId: "Website e-commerce yang dibangun untuk mengelola katalog produk, pesanan, dan ulasan pelanggan. Dikembangkan sebagai proyek fullstack dengan desain UI modern.",
    technologies: ["Laravel", "Blade", "TailwindCSS", "MySQL", "Alpine.js"],
    type: "web",
    date: "2025-08-01"
  },
  {
    title: "Book Rent App", 
    repositoryUrl: "https://github.com/pendragonnn/book-rent-app.git",
    image: "/images/book_rent.png",
    description: "A web-based book rental management system featuring a book catalog, a user dashboard, and an admin control panel.",
    descriptionId: "Sistem manajemen penyewaan buku berbasis web yang dilengkapi dengan katalog buku, dasbor pengguna, dan panel kontrol admin.",
    technologies: ["Laravel", "Blade", "TailwindCSS", "MySQL"],
    type: "web",
    date: "2025-07-15"
  },
  {
    title: "Litera Market",
    repositoryUrl: "https://github.com/pendragonnn/litera-market-website", 
    documentationUrl: "https://drive.google.com/drive/folders/19z4a-6NZ4MWRWObdX9kVSWRZweizH12d?usp=sharing",
    image: "/images/litera_market.png",
    description: "An e-commerce website built to manage book catalogs, orders, and customer reviews. It was developed as a full-stack project with a modern UI design.",
    descriptionId: "Website e-commerce yang dibangun untuk mengelola katalog buku, pesanan, dan ulasan pelanggan. Dikembangkan sebagai proyek fullstack dengan desain UI modern.",
    technologies: ["Laravel", "Blade", "TailwindCSS", "MySQL", "Alpine.js"],
    type: "web",
    date: "2025-11-11"
  },
  {
    title: "PalmGuard",
    documentationUrl: "https://drive.google.com/drive/folders/1rpGlSzVu0cIHGEugy-JjRBVWo0DwUcNf?usp=sharing", 
    repositoryUrl: "https://github.com/pendragonnn/PalmGuard-App-Thesis.git",
    image: "/images/palmguard.png",
    description: "A mobile app designed to detect and manage brown spot disease on palm oil leaves using machine learning and image analysis.",
    descriptionId: "Aplikasi mobile yang dirancang untuk mendeteksi dan mengelola penyakit bercak coklat pada daun kelapa sawit menggunakan machine learning dan analisis gambar.",
    technologies: ["TensorFlow", "Python", "Kotlin", "XML", "Android Studio", "SQLite"],
    type: "mobile",
    date: "2025-07-10"
  },
  {
    title: "Dream Vault",
    documentationUrl: "https://drive.google.com/drive/folders/1pywVC5So8vozLpaf5Tli0pCA_Ank0WNu?usp=sharing", 
    repositoryUrl: "https://github.com/pendragonnn/dream-vault-app-kotlin.git",
    image: "/images/dream_vault.png",
    description: "A mobile app for recording and analyzing dreams, built to explore journaling and pattern tracking.",
    descriptionId: "Aplikasi mobile untuk mencatat dan menganalisis mimpi, dibangun untuk mengeksplorasi pembuatan jurnal dan pelacakan pola.",
    technologies: ["Kotlin", "XML", "SQLite"],
    type: "mobile",
    date: "2025-02-19"
  },
  {
    title: "The News App",
    documentationUrl: "https://drive.google.com/drive/folders/1WlN0zWAdNrVGqpMMWjFcvs1Sil36kPva?usp=sharing", 
    repositoryUrl: "https://github.com/pendragonnn/the-news-app-kotlin.git",
    image: "/images/the_news_app.png",
    description: "A mobile app that fetches and displays live news articles using a public API, with category filters and offline mode support.",
    descriptionId: "Aplikasi mobile yang mengambil dan menampilkan artikel berita langsung menggunakan API publik, dengan filter kategori dan dukungan mode offline.",
    technologies: ["Kotlin", "XML", "Retrofit", "Room Database"],
    type: "mobile",
    date: "2025-02-15"
  },
  {
    title: "TeaGuard",
    documentationUrl: "https://drive.google.com/drive/folders/14K88KOR7dhpg61kihzGr0BnjpejzmLO6?usp=sharing",
    repositoryUrl: "https://github.com/pendragonnn/TeaGuard.git",
    image: "/images/teaguard.png",
    description: "A machine learning-based Android app for detecting pests and diseases in tea plants. It was developed as part of a national research grant (PKM-KC).",
    descriptionId: "Aplikasi Android berbasis machine learning untuk mendeteksi hama dan penyakit pada tanaman teh. Dikembangkan sebagai bagian dari hibah penelitian nasional (PKM-KC).",
    technologies: ["TensorFlow", "Python", "Kotlin", "XML", "Android Studio", "PostgreSQL", "Express", "Retrofit"],
    type: "mobile",
    date: "2024-08-10"
  },
  {
    title: "Qwords Landing Page Redesign",
    visitUrl: "https://final-task-qwords-pbi-demo-version.vercel.app/", 
    repositoryUrl: "https://github.com/pendragonnn/final-task-qwords-pbi.git",
    documentationUrl: "https://docs.google.com/presentation/d/1GOCbKdGHUwOkW6arwFwqR8A-qQfALUbqwYgRWvqkLf4/edit?usp=sharing",
    image: "/images/qwords.png",
    description: "I redesigned and rebuilt the landing page for Qwords during a project-based virtual internship, focusing on performance and a clean UI.",
    descriptionId: "Mendesain dan membangun ulang landing page untuk Qwords selama program magang virtual berbasis proyek, berfokus pada performa dan UI yang bersih.",
    technologies: ["Laravel", "React", "InertiaJs", "TailwindCSS"],
    type: "web",
    date: "2023-12-01"
  },
  {
    title: "Mini Movie Library",
    visitUrl: "https://mini-movie-library.vercel.app/", 
    repositoryUrl: "https://github.com/pendragonnn/Mini-Movie-Library.git",
    image: "/images/mini_movie_library.png",
    description: "A small web app displaying movies from the TMDb API, featuring a random movie picker and a responsive layout for a smooth user experience.",
    descriptionId: "Aplikasi web kecil yang menampilkan film dari TMDb API dengan fitur pemilih film acak dan tata letak responsif untuk pengalaman pengguna yang lancar.",
    technologies: ["NextJs", "React-Bootstrap"],
    type: "web",
    date: "2023-12-15"
  },
  {
    title: "E-Commerce Catalog",
    visitUrl: "https://ecommerce-catalog-three.vercel.app/", 
    repositoryUrl: "https://github.com/pendragonnn/ecommerce-catalog.git",
    image: "/images/ecommerce_catalog.png",
    description: "I built an online catalog that fetches products from an API (FakeStoreAPI) during a Frontend Developer virtual internship.",
    descriptionId: "Membangun katalog online yang mengambil produk dari API (FakeStoreAPI) selama program magang virtual Frontend Developer.",
    technologies: ["VueJs", "CSS"],
    type: "web",
    date: "2023-10-01"
  },
  {
    title: "ShoeStock – Inventory Web",
    repositoryUrl: "https://github.com/pendragonnn/final-project-inventory-web.git",
    documentationUrl: "https://docs.google.com/presentation/d/1noGpCQjiwAA9mWfvCTsr_ktuUjssZhEGvOkdaLJAsuM/edit?usp=sharing",
    image: "/images/shoestock.png",
    description: "I led a team of 7 to build a web-based inventory management system for shoes as part of Rakamin’s Fullstack Bootcamp final project.",
    descriptionId: "Memimpin tim beranggotakan 7 orang untuk membangun sistem manajemen inventaris sepatu berbasis web sebagai bagian dari proyek akhir Rakamin Fullstack Bootcamp.",
    technologies: ["ExpressJs", "NextJs", "TailwindCSS", "PostgreSQL"],
    type: "web",
    date: "2023-10-15"
  },
];

export const PROJECTS_CTA = {
  text: "View Full Project Showcase",
  textId: "Lihat Semua Projek"
};