/* All site content. Text can be a plain string (same in both languages)
   or { en: "...", id: "..." }; a missing "id" falls back to "en". */
export const SITE = {
  name: "Gorat Sinaga",
  domain: "paltigorat.com",
  email: "hello@paltigorat.com",
  location: "Jakarta, ID",
  timezone: "Asia/Jakarta",
  tzLabel: "WIB",
  current: { en: "Financial regulation", id: "Regulasi keuangan" },
  availability: {
    open: true,
    label: { en: "Available for Q4 projects", id: "Terbuka untuk proyek Q4" },
    short: { en: "Q4 open", id: "Q4 buka" }
  },
  author: { initials: "GS", avatar: null },

  /* How many items the home page shows before "View all".
     The full lists live at /work and /archive. */
  featured: { work: 4, archive: 8 },

  /* ImageKit: any URL on these hosts gets resized automatically (?tr=w-800 etc.)
     and a srcset. Add your custom CNAME here if you use one. */
  imagekit: { hosts: ["ik.imagekit.io"], widths: [480, 800, 1200, 1600] },

  heroSub: {
    en: "<strong>Product designer and frontend engineer.</strong> I design fintech products and the component systems that keep them consistent, then write the code that ships them.",
    id: "<strong>Product designer dan frontend engineer.</strong> Saya merancang produk fintech beserta sistem komponen yang menjaganya tetap konsisten, lalu menulis kode yang merilisnya."
  },
  bio: [
    {
      en: "I design across fintech and the public sector, including four and a half years at DOKU building Currency, the design system the whole company ships with.",
      id: "Saya merancang untuk fintech dan sektor publik, termasuk empat setengah tahun di DOKU membangun Currency, design system yang dipakai seluruh perusahaan untuk merilis produk."
    },
    {
      en: "Today I work inside financial regulation, reviewing how digital asset platforms operate. It changed how I design: every screen is also a record someone may need to audit.",
      id: "Kini saya bekerja di bidang regulasi keuangan, meninjau cara platform aset digital beroperasi. Ini mengubah cara saya mendesain: setiap layar juga merupakan catatan yang mungkin perlu diaudit seseorang."
    }
  ],
  capabilities: [
    { name: { en: "Product Design", id: "Desain Produk" }, note: { en: "Research, flows, and interface detail through to release", id: "Riset, alur, dan detail antarmuka hingga rilis" } },
    { name: "Design Systems", note: { en: "Tokens, component APIs, documentation, governance", id: "Token, API komponen, dokumentasi, tata kelola" } },
    { name: { en: "Frontend Architecture", id: "Arsitektur Frontend" }, note: { en: "CSS at scale, Astro, component libraries", id: "CSS skala besar, Astro, pustaka komponen" } },
    { name: { en: "Regulatory Tech", id: "Teknologi Regulasi" }, note: { en: "Supervisory tooling and compliance-ready UX", id: "Perangkat pengawasan dan UX yang siap kepatuhan" } }
  ],
  highlights: [
    { when: "DOKU", text: { en: "Built Currency, the company-wide design system used across payment and merchant products.", id: "Membangun Currency, design system tingkat perusahaan yang dipakai di seluruh produk pembayaran dan merchant." } },
    { when: "BKN", text: { en: "Designed the interface for MySAPK, the national civil servant management platform.", id: "Merancang antarmuka MySAPK, platform manajemen ASN nasional." } },
    { when: "Roha", text: { en: "Runs Roha, a one-person studio for identity and web work.", id: "Menjalankan Roha, studio satu orang untuk identitas dan web." } },
    { when: { en: "Now", id: "Kini" }, text: { en: "Examining licensed crypto asset platforms at a financial regulator.", id: "Memeriksa platform aset kripto berizin di sebuah regulator keuangan." } }
  ],

  /* Projects. Each one gets a detail page at /work/<slug> (and /id/work/<slug>).
     Body blocks: p, h, quote, list, sep, img { width: text | wide | full }, pair.
     Images: set src (or image for the cover) to a URL. ratio is optional:
     "16/9", "1440/900" (pixel size), or leave it out to use the image's own shape.
     Case study copy below is placeholder. Replace with your own. */
  projects: [
    {
      slug: "currency",
      title: "Currency",
      subtitle: { en: "One design language for a payments company with many product teams.", id: "Satu bahasa desain untuk perusahaan pembayaran dengan banyak tim produk." },
      category: "Design system",
      role: "Lead product designer, DOKU",
      year: "2023",
      date: "Mar 2023",
      tags: ["Tokens", "Components", "Figma"],
      ratio: "16/9", mockup: "system", image: null,
      link: [
        { label: "doku.com", href: "https://www.doku.com" },
        { label: "DOKU Wallet · Google Play", href: "https://play.google.com/store/search?q=doku%20wallet&c=apps&hl=id" }
      ],
      facts: [
        [{ en: "Role", id: "Peran" }, "Lead product designer"],
        [{ en: "Timeline", id: "Periode" }, { en: "2019 to 2023", id: "2019 hingga 2023" }],
        [{ en: "Scope", id: "Cakupan" }, { en: "Tokens, components, docs", id: "Token, komponen, dokumentasi" }],
        [{ en: "Tools", id: "Perangkat" }, "Figma, Storybook, SCSS"]
      ],
      body: [
        { type: "p", text: {
          en: "When I joined DOKU, each product team kept its own version of the same button. Checkout, the merchant dashboard, and the mobile wallet looked related, but only from a distance. Every new feature restarted the same conversations about spacing, color, and states.",
          id: "Saat saya bergabung dengan DOKU, setiap tim produk menyimpan versi sendiri dari tombol yang sama. Checkout, dashboard merchant, dan dompet mobile terlihat mirip, tetapi hanya dari kejauhan. Setiap fitur baru memulai ulang diskusi yang sama soal spacing, warna, dan state." } },
        { type: "p", text: {
          en: "Currency started as a single Figma file and grew into the system every team ships with. This is a short look at how it was built and what held it together.",
          id: "Currency berawal dari satu file Figma dan tumbuh menjadi sistem yang dipakai setiap tim untuk merilis produk. Berikut gambaran singkat bagaimana sistem ini dibangun dan apa yang membuatnya tetap utuh." } },
        { type: "h", text: { en: "Start with tokens, not components", id: "Mulai dari token, bukan komponen" } },
        { type: "p", text: {
          en: "An audit of live screens turned up dozens of near-identical grays and blues. Instead of drawing new components on top of that noise, the first release was only tokens: color, type, spacing, radius, and elevation, named by role rather than by value.",
          id: "Audit terhadap layar yang sudah live menemukan puluhan abu-abu dan biru yang nyaris identik. Alih-alih menggambar komponen baru di atas kekacauan itu, rilis pertama hanya berisi token: warna, tipografi, spacing, radius, dan elevasi, yang dinamai berdasarkan peran, bukan nilainya." } },
        { type: "img", width: "wide", ratio: "16/10", mockup: "ramp", src: null, caption: {
          en: "Neutral ramp with role names. Each step maps to one SCSS variable and one Figma style.",
          id: "Ramp netral dengan nama peran. Setiap tingkat dipetakan ke satu variabel SCSS dan satu style Figma." } },
        { type: "p", text: {
          en: "Because the names described intent, engineers could adopt tokens inside old code without redesigning anything. Adoption came first. Visual consistency followed.",
          id: "Karena namanya menjelaskan maksud, engineer bisa mengadopsi token di dalam kode lama tanpa mendesain ulang apa pun. Adopsi datang lebih dulu. Konsistensi visual menyusul." } },
        { type: "quote", text: {
          en: "A token named for its job survives a rebrand. A token named for its hex value does not.",
          id: "Token yang dinamai sesuai fungsinya akan bertahan saat rebrand. Token yang dinamai sesuai nilai hex-nya tidak." } },
        { type: "h", text: { en: "Components with a contract", id: "Komponen dengan kontrak" } },
        { type: "p", text: {
          en: "Each component shipped with three things: the Figma master, a coded reference in Storybook, and a page listing its states, props, and the cases it does not cover. That last part saved the most time in review.",
          id: "Setiap komponen dirilis dengan tiga hal: master di Figma, referensi kode di Storybook, dan halaman yang mencantumkan state, props, serta kasus yang tidak ditanganinya. Bagian terakhir itulah yang paling menghemat waktu saat review." } },
        { type: "pair", items: [{ ratio: "4/5", mockup: "form", src: null }, { ratio: "4/5", mockup: "system", src: null }], caption: {
          en: "Form field anatomy and button states, documented next to the code.",
          id: "Anatomi form field dan state tombol, didokumentasikan berdampingan dengan kodenya." } },
        { type: "h", text: { en: "What changed", id: "Apa yang berubah" } },
        { type: "list", items: [
          { en: "New product squads started from the system on day one.", id: "Squad produk baru langsung memakai sistem sejak hari pertama." },
          { en: "Design review moved from pixel checks to flow and content.", id: "Design review bergeser dari cek piksel ke alur dan konten." },
          { en: "Dark mode became a token change instead of a project.", id: "Dark mode menjadi perubahan token, bukan sebuah proyek." }
        ] },
        { type: "sep" },
        { type: "p", text: {
          en: "<em>Placeholder copy.</em> Replace this case study with your own numbers, screenshots, and lessons.",
          id: "<em>Teks placeholder.</em> Ganti studi kasus ini dengan angka, screenshot, dan pelajaran Anda sendiri." } }
      ]
    },
    {
      slug: "mysapk",
      title: "MySAPK BKN",
      subtitle: { en: "Making civil service records readable on a phone.", id: "Membuat data kepegawaian ASN mudah dibaca di ponsel." },
      category: { en: "Public sector product", id: "Produk sektor publik" },
      role: "UI designer",
      year: "2022",
      date: { en: "Aug 2022", id: "Agu 2022" },
      tags: ["Mobile", "Gov", "Onboarding"],
      ratio: "4/3", mockup: "mobile", image: null,
      link: { label: "MyASN · Google Play", href: "https://play.google.com/store/apps/details?id=com.nudi.bkn.sapk&hl=id" },
      facts: [
        [{ en: "Role", id: "Peran" }, "UI designer"],
        [{ en: "Client", id: "Klien" }, "BKN"],
        ["Platform", "Android, iOS"],
        [{ en: "Tools", id: "Perangkat" }, "Figma"]
      ],
      body: [
        { type: "p", text: {
          en: "MySAPK gives civil servants across Indonesia access to their own personnel records: rank, service history, documents, and requests. The audience is large and varied, from new hires to staff a few years from retirement.",
          id: "MySAPK memberi ASN di seluruh Indonesia akses ke data kepegawaian mereka sendiri: pangkat, riwayat jabatan, dokumen, dan pengajuan. Penggunanya banyak dan beragam, dari pegawai baru hingga yang beberapa tahun lagi pensiun." } },
        { type: "p", text: {
          en: "The brief was easy to state and hard to do. Make dense administrative data readable on a small screen without hiding anything people are entitled to see.",
          id: "Brief-nya mudah diucapkan tapi sulit dikerjakan: membuat data administrasi yang padat mudah dibaca di layar kecil tanpa menyembunyikan apa pun yang berhak dilihat pengguna." } },
        { type: "h", text: { en: "Read first, act second", id: "Baca dulu, bertindak kemudian" } },
        { type: "p", text: {
          en: "Most visits are lookups. Someone wants to confirm a rank date or download a decree, then leave. The home screen became a summary of the record itself, with requests one level down.",
          id: "Sebagian besar kunjungan hanya untuk mencari informasi. Seseorang ingin memastikan tanggal pangkat atau mengunduh SK, lalu pergi. Layar beranda pun menjadi ringkasan data itu sendiri, dengan pengajuan satu tingkat di bawahnya." } },
        { type: "img", width: "text", ratio: "4/3", mockup: "mobile", src: null, caption: {
          en: "Home screen: the record summary sits above every action.",
          id: "Layar beranda: ringkasan data berada di atas setiap aksi." } },
        { type: "h", text: { en: "Plain words for official terms", id: "Bahasa sederhana untuk istilah resmi" } },
        { type: "p", text: {
          en: "Administrative labels stayed, because people search for them by name. Each one gained a short plain-language line underneath, written with the people who answer support questions.",
          id: "Label administratif tetap dipertahankan, karena orang mencarinya berdasarkan nama. Masing-masing diberi satu baris penjelasan sederhana di bawahnya, ditulis bersama tim yang menjawab pertanyaan layanan bantuan." } },
        { type: "pair", items: [{ ratio: "9/16", mockup: "mobile", src: null }, { ratio: "9/16", mockup: "form", src: null }], caption: {
          en: "Leave request flow, from entry point to confirmation.",
          id: "Alur pengajuan cuti, dari titik masuk hingga konfirmasi." } },
        { type: "sep" },
        { type: "p", text: {
          en: "<em>Placeholder copy.</em> Replace with the real scope, screens, and outcomes.",
          id: "<em>Teks placeholder.</em> Ganti dengan cakupan, layar, dan hasil yang sebenarnya." } }
      ]
    },
    {
      slug: "ledger",
      title: "Ledger Review Console",
      subtitle: { en: "A concept for reviewing platform activity without losing the audit trail.", id: "Konsep untuk meninjau aktivitas platform tanpa kehilangan jejak audit." },
      category: { en: "Regulatory tech, concept", id: "Teknologi regulasi, konsep" },
      role: { en: "Design and frontend", id: "Desain dan frontend" },
      year: "2026",
      date: "Sep 2026",
      tags: ["Dashboard", "Audit trail", "Astro"],
      ratio: "4/3", mockup: "console", image: null,
      link: null,
      facts: [
        [{ en: "Role", id: "Peran" }, { en: "Design and frontend", id: "Desain dan frontend" }],
        ["Status", { en: "Personal concept", id: "Konsep pribadi" }],
        [{ en: "Year", id: "Tahun" }, "2026"],
        ["Stack", "Astro, CSS"]
      ],
      body: [
        { type: "p", text: {
          en: "This is a personal concept, not a production tool. It explores how a reviewer could move through a queue of platform reports while every decision stays traceable.",
          id: "Ini adalah konsep pribadi, bukan alat produksi. Konsep ini mengeksplorasi bagaimana seorang reviewer dapat menelusuri antrean laporan platform sementara setiap keputusan tetap bisa dilacak." } },
        { type: "h", text: { en: "Every screen is a record", id: "Setiap layar adalah catatan" } },
        { type: "p", text: {
          en: "In supervisory work, the reason behind a decision matters as much as the decision. The console keeps the evidence, the note, and the outcome on the same surface, so nothing lives only in someone's memory.",
          id: "Dalam pekerjaan pengawasan, alasan di balik sebuah keputusan sama pentingnya dengan keputusannya. Konsol ini menjaga bukti, catatan, dan hasil tetap di satu permukaan, sehingga tidak ada yang hanya tersimpan di ingatan seseorang." } },
        { type: "img", width: "wide", ratio: "16/10", mockup: "console", src: null, caption: {
          en: "Review queue with status flags and the evidence panel collapsed.",
          id: "Antrean review dengan penanda status dan panel bukti dalam keadaan tertutup." } },
        { type: "quote", text: {
          en: "If a reviewer cannot explain why a case was closed, the interface failed, not the reviewer.",
          id: "Jika reviewer tidak bisa menjelaskan mengapa sebuah kasus ditutup, yang gagal adalah antarmukanya, bukan reviewernya." } },
        { type: "h", text: { en: "Built in the browser", id: "Dibangun langsung di browser" } },
        { type: "p", text: {
          en: "The prototype runs on Astro with plain CSS and a small token file. Working in code early made density, keyboard flow, and table performance real questions instead of guesses.",
          id: "Prototipe ini berjalan di Astro dengan CSS biasa dan satu file token kecil. Bekerja di kode sejak awal membuat kepadatan, alur keyboard, dan performa tabel menjadi pertanyaan nyata, bukan tebakan." } },
        { type: "img", width: "wide", ratio: "3/2", mockup: "chart", src: null, caption: {
          en: "Trend widget for reported volume across a reporting period.",
          id: "Widget tren untuk volume yang dilaporkan sepanjang satu periode pelaporan." } },
        { type: "sep" },
        { type: "p", text: {
          en: "<em>Placeholder copy.</em> Replace with your own notes on the concept.",
          id: "<em>Teks placeholder.</em> Ganti dengan catatan Anda sendiri tentang konsep ini." } }
      ]
    },
    {
      slug: "roha",
      title: "Roha Studio",
      subtitle: { en: "Identity and website for a one-person design studio.", id: "Identitas dan situs web untuk studio desain satu orang." },
      category: { en: "Identity and website", id: "Identitas dan situs web" },
      role: { en: "Founder, designer", id: "Pendiri, desainer" },
      year: "2025",
      date: "Feb 2025",
      tags: ["Brand", "Type", "Web"],
      ratio: "16/9", mockup: "type", image: null,
      link: { label: "rohaworks.com", href: "https://rohaworks.com" },
      facts: [
        [{ en: "Role", id: "Peran" }, { en: "Founder", id: "Pendiri" }],
        [{ en: "Year", id: "Tahun" }, "2025"],
        [{ en: "Scope", id: "Cakupan" }, { en: "Wordmark, type, site", id: "Wordmark, tipografi, situs" }],
        ["Stack", "Astro"]
      ],
      body: [
        { type: "p", text: {
          en: "Roha is the name I work under for identity and web projects. The brand had one job: look like the work, quiet and exact, with nothing added for show.",
          id: "Roha adalah nama yang saya pakai untuk proyek identitas dan web. Brand ini punya satu tugas: terlihat seperti karyanya, tenang dan presisi, tanpa tambahan sekadar untuk pamer." } },
        { type: "img", width: "wide", ratio: "3/2", mockup: "type", src: null, caption: {
          en: "Wordmark on its baseline grid.",
          id: "Wordmark di atas grid baseline-nya." } },
        { type: "h", text: { en: "A wordmark that sits on the grid", id: "Wordmark yang berpijak pada grid" } },
        { type: "p", text: {
          en: "The letters are tightened to the same baseline unit the site uses for spacing. The mark and the layout share one measure, so the site feels built rather than decorated.",
          id: "Huruf-hurufnya dirapatkan ke unit baseline yang sama dengan yang dipakai situs untuk spacing. Logo dan layout berbagi satu ukuran, sehingga situs terasa dibangun, bukan dihias." } },
        { type: "pair", items: [{ ratio: "4/5", mockup: "ramp", src: null }, { ratio: "4/5", mockup: "type", src: null }], caption: {
          en: "Palette and type specimen.",
          id: "Palet dan spesimen tipografi." } },
        { type: "sep" },
        { type: "p", text: {
          en: "<em>Placeholder copy.</em> Replace with the real story behind the studio.",
          id: "<em>Teks placeholder.</em> Ganti dengan cerita sebenarnya di balik studio ini." } }
      ]
    }
  ],

  /* Archive tag names. The key is what you put in shots[].tag. */
  tagNames: {
    System: { en: "System", id: "Sistem" },
    Product: { en: "Product", id: "Produk" },
    Mobile: "Mobile",
    Brand: "Brand",
    Motion: "Motion",
    Web: "Web",
    Writing: { en: "Writing", id: "Tulisan" }
  },

  /* Archive: a dump of explorations. Each item is one of three kinds:

     1. Image   src: "https://ik.imagekit.io/your_id/checkout.png"
                Opens in the viewer.
     2. Video   video: "https://ik.imagekit.io/your_id/loader.mp4"   (mp4 / webm)
                Plays silently on loop when it scrolls into view, with controls
                in the viewer. Add src as a poster image if you like.
                video can also be a YouTube or Vimeo link: the tile shows the
                thumbnail (automatic for YouTube, set src for Vimeo) and the
                viewer plays the embedded player.
     3. Link    href: "https://dribbble.com/shots/..."   (no video)
                The tile opens the page in a new tab. Use src for its thumbnail.
                A video item can also have href: the viewer then shows
                "Open original".

     ratio is optional: leave it out and the wall uses the media's own shape.
     Very tall images (full-page captures) are cropped from the top on the wall
     and scroll in the viewer. The first `featured.archive` items appear on home.
     project links an item to a case study. */
  shots: [
    { title: { en: "Cute Things by Eca, clay charm e-commerce", id: "Cute Things by Eca, e-commerce clay charm" }, tag: "Web", project: "roha",
      src: "https://ik.imagekit.io/gorat/ctba/kc-5.avif", href: "https://www.rohaworks.com/templates/toys-charm/" },
    { title: { en: "Crypto exchanges don't hold your money", id: "Exchange kripto nggak pegang uang kamu" }, tag: "Motion", ratio: "9/16", mockup: "motion",
      video: "https://www.instagram.com/reel/DevWXaZsSVo/" },
    { title: { en: "Indonesia's crypto trading ecosystem", id: "Ekosistem perdagangan kripto Indonesia" }, tag: "Writing", ratio: "4/5", mockup: "article",
      href: "https://medium.com/@paltigcsinaga/ekosistem-perdagangan-kripto-indonesia-556caafcc520" },
    { title: { en: "Currency color ramp", id: "Ramp warna Currency" }, tag: "System", project: "currency", ratio: "4/5", mockup: "ramp", src: null },
    { title: { en: "MySAPK home", id: "Beranda MySAPK" }, tag: "Mobile", project: "mysapk", ratio: "9/16", mockup: "mobile", src: null },
    { title: { en: "Merchant settlement report", id: "Laporan settlement merchant" }, tag: "Product", project: "currency", ratio: "4/3", mockup: "chart", src: null },
    { title: { en: "Merchant dashboard, full page", id: "Dashboard merchant, halaman penuh" }, tag: "Product", project: "currency", ratio: "1440/4100", mockup: "console", src: null },
    { title: { en: "Button and input specs", id: "Spesifikasi tombol dan input" }, tag: "System", project: "currency", ratio: "1/1", mockup: "system", src: null },
    { title: { en: "KYC onboarding form", id: "Formulir onboarding KYC" }, tag: "Product", ratio: "3/4", mockup: "form", src: null },
    { title: { en: "Roha wordmark", id: "Wordmark Roha" }, tag: "Brand", project: "roha", ratio: "3/2", mockup: "type", src: null },
    { title: { en: "Review queue, concept", id: "Antrean review, konsep" }, tag: "Product", project: "ledger", ratio: "16/10", mockup: "console", src: null },
    { title: { en: "Leave request flow", id: "Alur pengajuan cuti" }, tag: "Mobile", project: "mysapk", ratio: "9/16", mockup: "mobile", src: null },
    { title: { en: "Payment link checkout", id: "Checkout payment link" }, tag: "Product", ratio: "2/3", mockup: "form", src: null },
    { title: { en: "Neutral palette, dark", id: "Palet netral, gelap" }, tag: "System", project: "currency", ratio: "1/1", mockup: "ramp", src: null },
    { title: { en: "Volume trend widget", id: "Widget tren volume" }, tag: "Product", project: "ledger", ratio: "21/9", mockup: "chart", src: null },
    { title: { en: "Studio site hero", id: "Hero situs studio" }, tag: "Brand", project: "roha", ratio: "5/4", mockup: "type", src: null },
    { title: { en: "Document viewer", id: "Penampil dokumen" }, tag: "Mobile", project: "mysapk", ratio: "1170/2532", mockup: "mobile", src: null },
    { title: { en: "Loading state motion study", id: "Studi motion loading state" }, tag: "Motion", ratio: "4/3", mockup: "motion", video: null, src: null }
  ],

  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "Read.cv", href: "https://read.cv/" },
    { label: "Figma", href: "https://www.figma.com/" }
  ]
};
