export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  category: "security" | "education" | "degree";
  pdf: string;
  image: string;
  rotation?: number; // Original scan orientation; rendered WebP is already upright.
  verify?: string;
};
export const certificates: Certificate[] = [
  {
    id: "phd",
    title: "Доктор философии (PhD)",
    issuer:
      "Комитет по обеспечению качества в сфере образования и науки МОН РК · правоохранительная деятельность",
    year: 2021,
    category: "degree",
    pdf: "phd.pdf",
    image: "phd.webp",
  },
  {
    id: "ethical-hacking",
    title: "The Complete Ethical Hacking Course",
    issuer: "Coursera · специализация, 4 курса",
    year: 2026,
    category: "security",
    pdf: "ethical-hacking.pdf",
    image: "ethical-hacking.webp",
    verify: "https://coursera.org/verify/specialization/RQI7K5JTAMZK",
  },
  {
    id: "investigation",
    title: "Расследование преступлений в сфере высоких технологий",
    issuer: "Воронежский институт МВД России · 72 часа",
    year: 2012,
    category: "security",
    pdf: "investigation.pdf",
    image: "investigation.webp",
    rotation: 90,
  },
  {
    id: "communication",
    title: "Advanced Level Communication Technologies and Applications",
    issuer: "TİKA / Turkish National Police",
    year: 2011,
    category: "security",
    pdf: "communication.pdf",
    image: "communication.webp",
    rotation: -90,
  },
  {
    id: "ord",
    title: "Современные проблемы теории и практики ОРД",
    issuer: "Global Professional Development · 72 часа",
    year: 2022,
    category: "security",
    pdf: "ord.pdf",
    image: "ord.webp",
    rotation: 90,
  },
  {
    id: "ai",
    title: "Искусственный Интеллект (ИИ) для всех",
    issuer: "DeepLearning.AI / Coursera",
    year: 2026,
    category: "education",
    pdf: "ai.pdf",
    image: "ai.webp",
    verify: "https://coursera.org/verify/E1XTM7FYB0JS",
  },
  {
    id: "digital-learning",
    title: "Цифровая трансформация в образовании",
    issuer: "КазНУ имени аль-Фараби · 72 часа",
    year: 2021,
    category: "education",
    pdf: "digital-learning.pdf",
    image: "digital-learning.webp",
    rotation: 90,
  },
  {
    id: "blended-learning",
    title: "Blended Learning: Personalizing Education for Students",
    issuer: "Coursera",
    year: 2026,
    category: "education",
    pdf: "blended-learning.pdf",
    image: "blended-learning.webp",
    verify: "https://coursera.org/verify/R4720WNP6T2B",
  },
  {
    id: "disability-inclusion",
    title: "Disability Inclusion in Education: Building Systems of Support",
    issuer: "University of Cape Town / Coursera",
    year: 2026,
    category: "education",
    pdf: "disability-inclusion.pdf",
    image: "disability-inclusion.webp",
    verify: "https://coursera.org/verify/9G8V4UDLJ9DN",
  },
  {
    id: "diversity",
    title: "Diversity and inclusion in the workplace",
    issuer: "ESSEC Business School / Coursera",
    year: 2026,
    category: "education",
    pdf: "diversity.pdf",
    image: "diversity.webp",
    verify: "https://coursera.org/verify/2YZAHWIOJM00",
  },
  {
    id: "managing-diversity",
    title: "Managing Diversity in a Multicultural Workplace",
    issuer: "Starweaver / Coursera",
    year: 2026,
    category: "education",
    pdf: "managing-diversity.pdf",
    image: "managing-diversity.webp",
    verify: "https://coursera.org/verify/NE83O1V8KO3A",
  },
];
