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
    label: { en: "Available for projects", id: "Terbuka untuk proyek Q4" },
    short: { en: "Open", id: "Q4 buka" }
  },
  author: { initials: "GS", avatar: null },

  /* How many items the home page shows before "View all".
     The full lists live at /work and /archive. */
  featured: { work: 4, archive: 12 },

  /* Home "Selected work" ledger, in the order listed. Projects with a cover image get the
     large entry (image + facts); the others are shorter rows. */
  selected: ["myasn", "currency", "loka"],

  /* ImageKit: any URL on these hosts gets resized automatically (?tr=w-800 etc.)
     and a srcset. Add your custom CNAME here if you use one. */
  imagekit: { hosts: ["ik.imagekit.io"], widths: [480, 800, 1200, 1600] },

  /* Default share image (Open Graph / Twitter). 1200x630, absolute URL.
     Replace with a purpose-made card when you have one. */
  ogImage: "https://ik.imagekit.io/gorat/rohaworks/mysapk/image-cover.avif?tr=w-1200,h-630,fo-auto,f-jpg",

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
    { when: "BKN", text: { en: "Designed and built the interface for MyASN, the national civil servant platform.", id: "Merancang dan membangun antarmuka MyASN, platform ASN nasional." } },
    { when: "Roha", text: { en: "Runs Roha, a one-person studio for identity and web work.", id: "Menjalankan Roha, studio satu orang untuk identitas dan web." } },
    { when: { en: "Now", id: "Kini" }, text: { en: "Examining licensed crypto asset platforms at a financial regulator.", id: "Memeriksa platform aset kripto berizin di sebuah regulator keuangan." } }
  ],

  /* Projects. Each one gets a detail page at /work/<slug> (and /id/work/<slug>).
     Body blocks: p, h, quote, list, sep, img { width: text | wide | full }, pair.
     Images: set src (or image for the cover) to a URL. ratio is optional:
     "16/9", "1440/900" (pixel size), or leave it out to use the image's own shape. */
  projects: [
    {
      slug: "currency",
      title: "Currency",
      subtitle: { en: "One shared Figma library behind DOKU's payment products." },
      category: "Design system",
      role: "Product designer, DOKU",
      year: "2023",
      date: "Mar 2023",
      tags: ["Figma", "Components", "Foundations"],
      ratio: "16/9", mockup: "system", image: "/work/currency/cover.webp",
      alt: "Currency, the DOKU design system: color ramps, buttons, form fields, toggles and status badges from the Figma library",
      link: [
        { label: "doku.com", href: "https://www.doku.com" },
        { label: "DOKU Wallet · Google Play", href: "https://play.google.com/store/search?q=doku%20wallet&c=apps&hl=id" }
      ],
      facts: [
        [{ en: "Role", id: "Peran" }, "Product designer"],
        [{ en: "Timeline", id: "Periode" }, { en: "2019 to 2023", id: "2019 hingga 2023" }],
        [{ en: "Scope", id: "Cakupan" }, "Foundations and 25 component families"],
        [{ en: "Tool", id: "Perangkat" }, "Figma, variants and styles"]
      ],
      /* Case study copy and images come from the DOKU Design System sheet (Figma library v1.0.0). */
      body: [
        { type: "p", text: { en: "The library starts with brand color, type and elevation. On top of those sit the 25 component families that DOKU's dashboards, checkout and merchant tools are built from." } },
        { type: "h", text: { en: "What the library holds" } },
        { type: "p", text: { en: "Foundations come first and every component draws from them. Each component page carries its own guideline frame, so a designer can pick a variant and read when to use it in the same place." } },
        { type: "list", items: [
          "36 pages in Figma",
          "25 component families",
          "400+ variants across sets",
          "18 text styles",
          "7 elevation levels"
        ] },
        { type: "img", width: "wide", ratio: "2000/1005", src: "/work/currency/overview.webp", alt: "Overview of the DOKU Figma library: foundations, extras and the component index with variants per set", caption: "Foundations: logo, color, type, icons and shadow. Extras: captcha, email template and a sample page." },
        { type: "h", text: { en: "Color" } },
        { type: "p", text: { en: "Red is the primary brand color and carries every primary action. Tosca and orange support it, and black runs as a ten step neutral for text, borders and surfaces. Each ramp has nine tints and shades with 50 as the base." } },
        { type: "img", width: "wide", ratio: "2000/1403", src: "/work/currency/color.webp", alt: "Red, tosca, orange and black color ramps with hex values, and the color roles table", caption: "The four ramps with hex values, and the role table that assigns colors to actions, text, states and borders." },
        { type: "h", text: { en: "Type" } },
        { type: "p", text: { en: "A single family, DIN Next LT Pro, in three weights. Its narrow letterforms keep amounts and account numbers compact in dense dashboards. Line heights sit on a 4 px grid." } },
        { type: "img", width: "wide", ratio: "2000/1355", src: "/work/currency/type.webp", alt: "Type scale from Title/H1 48/72 down to Caption/S 10/12, with regular, medium and bold weights", caption: "Shown in Barlow, the closest web-available match to DIN Next LT Pro." },
        { type: "h", text: { en: "Elevation" } },
        { type: "p", text: { en: "Seven shadow styles, from a hairline lift for inputs to the deep shadow behind modals. Higher layers sit closer to the user and cast softer, wider shadows." } },
        { type: "img", width: "wide", ratio: "2000/624", src: "/work/currency/elevation.webp", alt: "Seven shadow styles from Shadow/xs to Shadow/3xl", caption: "Cards use sm, popovers lg, modals 3xl." },
        { type: "h", text: { en: "Buttons" } },
        { type: "p", text: { en: "The largest set in the library, with 216 variants. Four variants share one anatomy, so a single component covers every action on a page, from Pay now to an icon-only delete. In the loading state the button keeps its width, so nothing around it shifts while a payment is processing." } },
        { type: "img", width: "wide", ratio: "2000/821", src: "/work/currency/buttons.webp", alt: "Primary, secondary, normal and text buttons in default, hover, pressed, disabled and loading states, with sizes and types", caption: "Variant by state, three sizes and four types." },
        { type: "h", text: { en: "Form and input" } },
        { type: "p", text: { en: "Every field shares one frame: label, control, helper. States change only the border and the helper line, so validation reads the same across checkout, onboarding and settings." } },
        { type: "img", width: "wide", ratio: "2000/1052", src: "/work/currency/form.webp", alt: "Input fields in default, focus, filled, error, success, read only and disabled states, and input types", caption: "Seven states and seven field types, 101 variants in all." },
        { type: "h", text: { en: "Selection" } },
        { type: "p", text: { en: "Checkbox for many, radio for one, toggle for settings that apply right away. All three share the red active fill and the same disabled grey." } },
        { type: "img", width: "wide", ratio: "2000/912", src: "/work/currency/selection.webp", alt: "Checkbox, radio and toggle states, and examples of each in use", caption: "Checkbox 32, radio 8 and toggle 3 variants." },
        { type: "h", text: { en: "Feedback" } },
        { type: "p", text: { en: "Status always uses the same four tones: success, warning, error and neutral. A badge labels a record, a toast reports what just happened, and a modal stops the flow only when a choice cannot be undone." } },
        { type: "img", width: "wide", ratio: "2000/1180", src: "/work/currency/feedback.webp", alt: "Status badges, inline and flag toasts, and a confirmation modal", caption: "Badge 4, toast 12 and modal 12 variants." },
        { type: "h", text: { en: "Tabs, table and cards" } },
        { type: "p", text: { en: "The merchant dashboard runs on these three. The table is assembled from ten cell types, so a new report is built by choosing the columns it needs." } },
        { type: "img", width: "wide", ratio: "2000/1482", src: "/work/currency/data.webp", alt: "Default and pill tabs, a transactions table built from cell types, and dashboard cards", caption: "Tabs 5, table cells 10 and cards 5 variants." },
        { type: "h", text: { en: "Where the library is used" } },
        { type: "p", text: { en: "Foundations feed the components, and the components feed checkout, the merchant dashboard and internal tools. Changing a foundation such as RED50 or Body M updates every file that uses it." } }
      ]
    },
    {
      slug: "myasn",
      title: "MyASN BKN",
      subtitle: { en: "Civil service HR platform for 4.4 million Indonesian civil servants." },
      category: { en: "Public sector product", id: "Produk sektor publik" },
      role: "UIX Engineer",
      year: "2022",
      date: { en: "Aug 2022", id: "Agu 2022" },
      tags: ["Web", "Android", "Gov"],
      ratio: "16/9", mockup: "mobile", image: "/work/myasn/cover.webp",
      alt: "MyASN design system: approval status cards, buttons, a submission stepper and e-Lapkin rating badges",
      link: { label: "MyASN · Google Play", href: "https://play.google.com/store/apps/details?id=com.nudi.bkn.sapk&hl=id" },
      /* Facts for the lead entry on the home page. Figures come from the case study below. */
      lead: [
        ["Role", "UIX Engineer"],
        ["Scope", "100+ screens designed and built"],
        ["Platform", "Web, Android"],
        ["Google Play", { text: "5M+ installs", href: "https://play.google.com/store/apps/details?id=com.nudi.bkn.sapk&hl=id" }]
      ],
      facts: [
        [{ en: "Role", id: "Peran" }, "UIX Engineer"],
        [{ en: "Client", id: "Klien" }, "BKN"],
        ["Platform", "Web, Android"],
        [{ en: "Tools", id: "Perangkat" }, "Figma, Vue.js"]
      ],
      body: [
        { type: "h", text: { en: "One platform. Millions of civil servants." } },
        { type: "p", text: {
          en: "BKN (Badan Kepegawaian Negara) is the national agency responsible for managing the personnel records of every civil servant in Indonesia. MySAPK, now MyASN, is their central digital platform: a single system where all 4.4 million ASN can view service records, submit administrative requests, track career history, and manage their professional data." } },
        { type: "p", text: {
          en: "One platform. Millions of users. No room for ambiguity in the UX." } },
        { type: "img", width: "wide", src: "https://ik.imagekit.io/gorat/rohaworks/mysapk/image-(1).avif", alt: "MyASN BKN dashboard and profile screens for Indonesian civil servants", caption: "MyASN dashboard and profile: one record, every civil servant." },
        { type: "h", text: { en: "Design to delivery: 14 features, 100+ screens" } },
        { type: "p", text: {
          en: "UIX Engineer: a role that sits between design and delivery. Full ownership of user flows, wireframes, and high-fidelity screens across every feature. On the web platform, every one of those 100+ screens was also built in Vue.js. For Android, the work ended at design specification." } },
        { type: "list", items: [
          "Authentication: Login, Register, Reset Password",
          "Dashboard, Dashboard with Event",
          "User Update Data, Document Submission, All Documents",
          "Profiles, Stakeholder",
          "Competency & Performance, Grade Point",
          "Kartu PNS Elektronik, Performance Report Yearly",
          "News, Notification"
        ] },
        { type: "h", text: { en: "The data layer doesn't always cooperate" } },
        { type: "p", text: {
          en: "Government systems at this scale run on fixed infrastructure. The backend APIs were either locked or heavily constrained; modifying them was rarely an option, and many didn't return data in shapes that made for clean UI. The real design problem wasn't visual. It was structural." } },
        { type: "list", items: [
          { en: "Fixed APIs: the UI had to absorb whatever shape the API returned: nulls, unexpected formats, delayed responses." },
          { en: "Scale pressure: any UX decision affects millions of users across thousands of institutions, many with limited digital literacy or slow connections." },
          { en: "Two-week delivery: sprint review every two weeks, to design, build, and align with backend and frontend teams inside the same cycle." }
        ] },
        { type: "quote", text: {
          en: "The answer wasn't to fight the backend. It was to absorb it: through deliberate loading states, fallback patterns, and micro-UX decisions that users never notice because they never see the seams." } },
        { type: "pair", items: [{ src: "https://ik.imagekit.io/gorat/rohaworks/mysapk/image-(2).avif", alt: "MyASN BKN document submission and update data screens" }, { src: "https://ik.imagekit.io/gorat/rohaworks/mysapk/image-(3).avif", alt: "MyASN BKN competency, performance and grade point screens" }], caption: "Document submission and performance screens, designed around what the API could return." },
        { type: "h", text: { en: "Component discipline, sprint by sprint" } },
        { type: "p", text: {
          en: "Work ran in two-week sprints. Each cycle closed with a sprint review shared with backend and frontend teams, forcing early alignment on what was designed, what was buildable, and what actually shipped." } },
        { type: "p", text: {
          en: "Component discipline was the foundation. Every screen was designed against what the API could realistically return. Edge cases (empty states, error states, partial data) were spec'd alongside the happy path, not added later. On the code side, Vue components were kept tightly aligned with the design system, so across 100+ screens the gap between mockup and production stayed small enough to matter." } },
        { type: "h", text: { en: "The design system behind it" } },
        { type: "p", text: { en: "Civil servants use MyASN to keep their own records current, get documents approved and check their performance. One shell and one set of components carry all of it, from a profile form to a nine-box talent grid." } },
        { type: "h", text: { en: "The shell" } },
        { type: "p", text: { en: "Every desktop screen starts from the same frame. A blue header band holds the user's identity and the page title, and the white content card overlaps its lower edge. Navigation stays in the left rail, so people always know where the menu is." } },
        { type: "img", width: "wide", ratio: "2000/1397", src: "/work/myasn/shell.webp", alt: "MyASN app shell: top bar, profile block, title and breadcrumb on the blue band, navigation rail and the overlapping content card", caption: "Rail 280 px, content 826 px, a 350 px blue band and a card that overlaps it by 170 px." },
        { type: "h", text: { en: "Color" } },
        { type: "p", text: { en: "A single blue carries the brand. Everything else is functional: a cool neutral scale for text and surfaces, and small sets for approval status, performance ratings and charts. Status colors never borrow from the brand blue, except Ditolak, which uses its darkest step." } },
        { type: "img", width: "wide", ratio: "2000/1288", src: "/work/myasn/color.webp", alt: "MyASN blue and neutral scales, approval status colors, e-Lapkin rating colors and chart colors", caption: "Brand #3085FF, page #F4F7FB, text #3A3E40." },
        { type: "h", text: { en: "Type" } },
        { type: "p", text: { en: "A geometric sans in four weights. Bold titles sit on the blue band, semibold marks the values people come to check, and regular carries the labels next to them. Small caps labels group sections without adding lines." } },
        { type: "img", width: "wide", ratio: "2000/1205", src: "/work/myasn/type.webp", alt: "Proxima Nova type scale from the 30/36 page title down to the 12/16 caption", caption: "Proxima Nova, shown here in Figtree, the closest web-available match." },
        { type: "h", text: { en: "Actions and input" } },
        { type: "p", text: { en: "Buttons come in two families. On white, a filled primary leads and a soft blue offers the safe alternative. On the blue band, white and ghost buttons keep contrast without a second brand color. Filters use pill-shaped fields so people read them as adjustable settings." } },
        { type: "img", width: "wide", ratio: "2000/1474", src: "/work/myasn/controls.webp", alt: "Buttons on white and on blue, form fields, filter and sort controls, and an upload field with a validation error", caption: "40 px controls, 6 px radius, and a blue border with a 3 px halo on focus." },
        { type: "h", text: { en: "Navigation" } },
        { type: "p", text: { en: "Four levels, each with its own form. The rail moves between services, tabs on the band switch sections of a record, the vertical list picks a category inside a card, and the stepper walks a submission from data to review." } },
        { type: "img", width: "wide", ratio: "2000/1571", src: "/work/myasn/navigation.webp", alt: "Navigation rail, category list, three-step stepper, tabs on the blue band and mobile pagination", caption: "Rail, tabs, category list and stepper." },
        { type: "h", text: { en: "Status" } },
        { type: "p", text: { en: "Approval runs through four states, and each one owns a color from the summary card down to the badge on a single row. Rejected and finished rows fade back so open items stand out. Ratings use a separate warm to green scale that reads as a grade." } },
        { type: "img", width: "wide", ratio: "2000/1080", src: "/work/myasn/status.webp", alt: "Approval summary cards, approval and rating badges, news categories and notification items", caption: "Menunggu paraf, Menunggu persetujuan, Disetujui and Ditolak, and five rating levels." },
        { type: "h", text: { en: "Records" } },
        { type: "p", text: { en: "Most of MyASN is reading a record and spotting what is wrong with it. Label and value pairs keep the label quiet and the value in semibold. Lists end in one clear action, like Download, and the e-Lapkin score sheet closes on a heavy total row." } },
        { type: "img", width: "wide", ratio: "2000/2374", src: "/work/myasn/data.webp", alt: "Key value record, e-Lapkin score sheet, approval table, document list, news and category tiles", caption: "Key value pairs, tables, document lists, tiles, the score sheet and news." },
        { type: "h", text: { en: "Charts" } },
        { type: "p", text: { en: "Two charts answer the two questions a civil servant asks about themselves. The radar compares nine ASN competencies against the target for their unit. The nine-box places them on performance and potential, and the cell color tells them how they are doing before they read a number." } },
        { type: "img", width: "wide", ratio: "2000/1823", src: "/work/myasn/charts.webp", alt: "Competency radar chart against the unit target, and a nine-box grid of performance and potential", caption: "Example values." },
        { type: "h", text: { en: "Screens" } },
        { type: "p", text: { en: "Each screen reuses the shell, the card and the components above, so adding a service means laying out a new card inside the existing frame. Profile data, approvals, documents, performance and the electronic ID card all live in the same frame, so a civil servant only has to learn MyASN once." } },
        { type: "img", width: "wide", ratio: "2000/2544", src: "/work/myasn/screens.webp", alt: "Ten MyASN desktop screens at 1440 px and the mobile notification screen at 360 px", caption: "Ten desktop screens and one mobile screen. Mobile keeps the blue band and the overlapping card, and folds the rail into a menu button." },
        { type: "h", text: { en: "The experience held" } },
        { type: "p", text: {
          en: "MyASN BKN is in active use by civil servants across Indonesia, available on web and Android." } },
        { type: "list", items: [
          { en: "5M+ installs on the Play Store" },
          { en: "4-star rating from 18,500+ reviews" },
          { en: "100+ screens designed and built" }
        ] },
        { type: "p", text: {
          en: "A four-star rating for a government HR platform used under compliance pressure across thousands of institutions. Most of the low reviews are about server load during peak submission windows, not the UX." } },
        { type: "img", width: "wide", src: "https://ik.imagekit.io/gorat/rohaworks/mysapk/image-(4).avif", alt: "MyASN BKN Kartu PNS Elektronik and notification screens on web and Android", caption: "Kartu PNS Elektronik and notifications, on web and Android." }
      ]
    },
    {
      slug: "loka",
      title: "Loka",
      subtitle: { en: "A food delivery app that takes an order from search to doorstep." },
      category: "Mobile app",
      role: "Product designer",
      year: "2026",
      tags: ["Mobile", "Delivery", "Figma"],
      ratio: "16/9", mockup: "mobile", image: "/work/loka/cover.webp",
      alt: "Loka food delivery app: the home, tracking and cart screens on an orange background",
      link: null,
      facts: [
        [{ en: "Role", id: "Peran" }, "Product designer"],
        [{ en: "Type", id: "Jenis" }, "Food delivery app"],
        [{ en: "Scope", id: "Cakupan" }, "From search to delivery tracking"],
        [{ en: "Tool", id: "Perangkat" }, "Figma"]
      ],
      body: [
        { type: "p", text: { en: "Loka is a mobile food delivery app. This case study follows one complete order: allowing permissions, finding a place to eat, customizing a dish, checking the cart and following the driver until the food arrives." } },
        { type: "h", text: { en: "Permissions" } },
        { type: "p", text: { en: "The first two screens ask for location and notification access one at a time. Each says in a sentence what the permission is for. Location is only read while the app is in use, and notifications keep the order progress up to date. Notifications can be skipped with Nanti saja." } },
        { type: "img", width: "wide", ratio: "940/972", src: "/work/loka/permission.webp", alt: "Location and notification permission screens, each with an illustration, one sentence of explanation and a single button", caption: "Location and notification permissions, one per screen." },
        { type: "h", text: { en: "Home" } },
        { type: "p", text: { en: "Home starts with the delivery address and a search field, then moves through deals, a points balance, categories, a weekly special and new restaurants. Once something is added, a cart bar floats above the tab bar with the total and the number of orders. While an order is on its way, three status cards at the top show where the driver is." } },
        { type: "img", width: "wide", ratio: "940/1848", src: "/work/loka/home.webp", alt: "Loka home screen with deals, points, categories and restaurants, next to the home screen with order status cards and the one with the floating cart bar", caption: "The full home page, with order status cards and the floating cart bar." },
        { type: "h", text: { en: "Search" } },
        { type: "p", text: { en: "Before typing, search offers popular searches and categories. Results show each restaurant with its rating, distance and delivery time, followed by the matching dishes and their prices. A closed restaurant is marked Tutup. Filter and sort sit above the list." } },
        { type: "img", width: "wide", ratio: "1362/972", src: "/work/loka/search.webp", alt: "Search screen with popular searches and categories, the keyboard open while typing, and the results list with filter and sort", caption: "Search before typing, while typing, and the results." },
        { type: "h", text: { en: "Restaurant page and dish options" } },
        { type: "p", text: { en: "The restaurant page keeps the decision short: distance and price range, the promo that applies, then the menu. Each item has a photo, a short description, the price and a Promo tag where one applies. Sold out items stay on the list, faded, with Habis in red." } },
        { type: "p", text: { en: "Options on a dish are grouped by how they must be answered. Required groups, such as chicken part and rice, say Wajib pilih 1. Optional extras can be combined, and there is a note field. Options that are sold out stay visible and say Habis. The bottom bar holds the quantity stepper and the Tambah button with the price." } },
        { type: "img", width: "wide", ratio: "1784/1372", src: "/work/loka/restaurant.webp", alt: "Restaurant page with a promo card and menu list, then the dish screen with required options, optional extras and a note field", caption: "The restaurant page, then the dish screen from the top to the note field." },
        { type: "h", text: { en: "Cart" } },
        { type: "p", text: { en: "The cart repeats the delivery address and estimated time, with a note field for the driver. Orders are grouped by restaurant. Each item has Ubah, a quantity stepper and delete, plus the options and note that were chosen. A small fee is added when an order comes from more than one restaurant. A banner shows the points the order earns, and the payment summary breaks the price into discount, extra fee and delivery fee before the total. Notes open in a bottom sheet with a 200 character limit." } },
        { type: "img", width: "wide", ratio: "940/1630", src: "/work/loka/cart.webp", alt: "Cart with the delivery address, items grouped by restaurant, payment summary and the continue button, and the two note sheets", caption: "The cart and its two note sheets, one for the order and one for the driver." },
        { type: "h", text: { en: "Orders" } },
        { type: "p", text: { en: "The order list has two tabs, History and Dalam proses. A history row shows the restaurants, the date, the total, a green Selesai status and Pesan lagi to order again. An order in progress shows the restaurants, the total and the number of items." } },
        { type: "img", width: "wide", ratio: "940/973", src: "/work/loka/order.webp", alt: "Order list with the History tab selected and the Dalam proses tab selected", caption: "History and in-progress orders." },
        { type: "h", text: { en: "Delivery progress" } },
        { type: "p", text: { en: "Tracking runs in four steps: searching for a driver, driver found and heading to the restaurant, order being prepared, and driver on the way. The map shows the restaurant, the driver and the route in green, and a bottom sheet carries the current step on a four part progress bar. Cancelling is possible while the app is still searching for a driver." } },
        { type: "img", width: "wide", ratio: "1784/972", src: "/work/loka/tracking.webp", alt: "Four map screens showing the steps from searching for a driver to the driver on the way", caption: "The four tracking steps on the map." },
        { type: "p", text: { en: "Pulling the sheet up shows the driver with call and chat buttons, the pickup and drop-off points, the items and the payment method. When the order arrives, a rating screen asks for one to five stars and an optional comment for the driver." } },
        { type: "img", width: "wide", ratio: "1362/1451", src: "/work/loka/delivery.webp", alt: "Expanded tracking sheet with driver details, the full order status list, and the rating screen", caption: "Driver details, the full status list and the rating screen." },
        { type: "h", text: { en: "Color and status" } },
        { type: "p", text: { en: "One orange does the action work: primary buttons, the active tab and links. Green is kept for progress and finished states, and red for promos and sold out items. That keeps the colors that mean something from competing with the one that asks for a tap." } }
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

     Add still: true to a video item to show only its src image on the wall
     (no autoplay); the video still plays in the viewer.

     ratio is optional: leave it out and the wall uses the media's own shape.
     Very tall images (full-page captures) are cropped from the top on the wall
     and scroll in the viewer. The first `featured.archive` items appear on home.
     project links an item to a case study. */
  shots: [
    { title: { en: "Roha brand language and design system", id: "Bahasa brand dan design system Roha" }, tag: "Brand",
      src: "https://ik.imagekit.io/gorat/gorat/archive/roha-brand-lang.png",
      href: "https://www.rohaworks.com/work/roha-design-system/" },
    { title: { en: "Sorrel Leather, leather goods e-commerce template", id: "Sorrel Leather, template e-commerce barang kulit" }, tag: "Web",
      src: "https://ik.imagekit.io/gorat/project/assets/sorrel-bag/cover-sorrel-leather.png",
      href: "https://www.rohaworks.com/templates/sorrel-leather/" },
    { title: { en: "Pixel Forge, creative agency website concept", id: "Pixel Forge, konsep website agensi kreatif" }, tag: "Web",
      src: "https://ik.imagekit.io/gorat/agency/image-cover.avif", href: "https://www.rohaworks.com/templates/creative-agency/" },
    { title: { en: "Bima Arsana, photographer portfolio website", id: "Bima Arsana, website portofolio fotografer" }, tag: "Web", ratio: "390/844",
      src: "/archive/bima-arsana.png", href: "https://www.rohaworks.com/templates/bima-arsana/" },
    { title: { en: "Teduh Residence, housing cluster marketing site", id: "Teduh Residence, situs pemasaran klaster perumahan" }, tag: "Web",
      src: "https://ik.imagekit.io/gorat/project/assets/residence/cover-teduh-residence-dev.png", href: "https://www.rohaworks.com/templates/teduh-residence/" },
    { title: { en: "Cute Things by Eca, clay charm e-commerce", id: "Cute Things by Eca, e-commerce clay charm" }, tag: "Web",
      src: "https://ik.imagekit.io/gorat/ctba/kc-5.avif", href: "https://www.rohaworks.com/templates/toys-charm/" },
    { title: { en: "Crypto exchanges don't hold your money", id: "Exchange kripto nggak pegang uang kamu" }, tag: "Motion", ratio: "9/16",
      src: "https://ik.imagekit.io/gorat/gorat/archive/erticle-crypto-ina.jpg",
      video: "https://www.instagram.com/reel/DevWXaZsSVo/" },
    { title: { en: "Indonesia's crypto trading ecosystem", id: "Ekosistem perdagangan kripto Indonesia" }, tag: "Writing",
      src: "https://ik.imagekit.io/gorat/gorat/archive/article-crypto-ina-read.png",
      href: "https://medium.com/@paltigcsinaga/ekosistem-perdagangan-kripto-indonesia-556caafcc520" },
    { title: { en: "Currency color ramp", id: "Ramp warna Currency" }, tag: "System", project: "currency", ratio: "4/5", mockup: "ramp", src: null },
    /* TODO: re-enable with real MyASN images
    { title: { en: "MyASN home", id: "Beranda MyASN" }, tag: "Mobile", project: "myasn", ratio: "9/16", mockup: "mobile", src: null },
    */
    { title: { en: "Merchant settlement report", id: "Laporan settlement merchant" }, tag: "Product", project: "currency", ratio: "4/3", mockup: "chart", src: null },
    { title: { en: "Merchant dashboard, full page", id: "Dashboard merchant, halaman penuh" }, tag: "Product", project: "currency", ratio: "1440/4100", mockup: "console", src: null },
    { title: { en: "Button and input specs", id: "Spesifikasi tombol dan input" }, tag: "System", project: "currency", ratio: "1/1", mockup: "system", src: null },
    { title: { en: "KYC onboarding form", id: "Formulir onboarding KYC" }, tag: "Product", ratio: "3/4", mockup: "form", src: null },
    { title: { en: "Roha wordmark", id: "Wordmark Roha" }, tag: "Brand", ratio: "3/2", mockup: "type", src: null },
    { title: { en: "Loka home", id: "Beranda Loka" }, tag: "Mobile", project: "loka", ratio: "10/21", src: "/work/loka/screen-home.webp" },
    /* TODO: re-enable with real MyASN images
    { title: { en: "Leave request flow", id: "Alur pengajuan cuti" }, tag: "Mobile", project: "myasn", ratio: "9/16", mockup: "mobile", src: null },
    */
    { title: { en: "Payment link checkout", id: "Checkout payment link" }, tag: "Product", ratio: "2/3", mockup: "form", src: null },
    { title: { en: "Neutral palette, dark", id: "Palet netral, gelap" }, tag: "System", project: "currency", ratio: "1/1", mockup: "ramp", src: null },
    { title: { en: "Loka delivery tracking", id: "Pelacakan pesanan Loka" }, tag: "Mobile", project: "loka", ratio: "10/21", src: "/work/loka/screen-tracking.webp" },
    { title: { en: "Studio site hero", id: "Hero situs studio" }, tag: "Brand", ratio: "5/4", mockup: "type", src: null },
    /* TODO: re-enable with real MyASN images
    { title: { en: "Document viewer", id: "Penampil dokumen" }, tag: "Mobile", project: "myasn", ratio: "1170/2532", mockup: "mobile", src: null },
    */
    { title: { en: "Loading state motion study", id: "Studi motion loading state" }, tag: "Motion", ratio: "4/3", mockup: "motion", video: null, src: null }
  ],

  socials: [
    /* LinkedIn and X are hidden for now. Add them back by uncommenting.
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "X", href: "https://x.com/" }, */
    { label: "Threads", href: "https://www.threads.com/@rohaworks" },
    { label: "Dribbble", href: "https://dribbble.com/palti28" },
    { label: "Figma", href: "https://www.figma.com/@paltigorat" },
    /* action: "cv" opens the "request my CV" popup instead of a link. */
    { label: "Read CV", action: "cv" }
  ],
  whatsapp: "https://wa.me/6281932594187"
};
