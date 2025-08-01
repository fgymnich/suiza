//This file contains the brand styles for the colours and banners
export type BrandSlug =
  | "suiza"
  | "clinsy"
  | "hornolim"
  | "limpialin"
  | "suavitel"
  | "duft"
  | "acquapul"

export interface BrandData {
  name: string
  logo: string
  colors: {
    primary: string
    accent: string
    text: string
  }
  description: string
}

const brands: Record<BrandSlug, BrandData> = {
  suiza: {
    name: "Suiza",
    logo: "/images/logo-suiza.png",
    colors: {
      primary: "from-red-600 via-white to-red-400",
      accent: "red-600",
      text: "red-100",
    },
    description: "Calidad y confianza en cada producto para el cuidado de tu hogar",
  },
  clinsy: {
    name: "Clinsy",
    logo: "/images/logo-clinsy.png",
    colors: {
      primary: "from-blue-600 via-white to-green-400",
      accent: "blue-600",
      text: "blue-100",
    },
    description: "Innovación y eficacia en productos de limpieza profesional",
  },
  hornolim: {
    name: "Hornolim",
    logo: "/images/logo-hornolim.png",
    colors: {
      primary: "from-indigo-800 via-white to-yellow-400",
      accent: "indigo-800",
      text: "orange-100",
    },
    description: "Especialistas en limpieza de hornos y cocinas",
  },
  limpialin: {
    name: "Limpialin",
    logo: "/images/logo-limpialin.png",
    colors: {
      primary: "from-cyan-600 via-white to-cyan-500",
      accent: "cyan-700",
      text: "green-100",
    },
    description: "Productos naturales para una limpieza efectiva",
  },
  suavitel: {
    name: "Suavitel",
    logo: "/images/logo-suavitel-new.png",
    colors: {
      primary: "from-pink-400 via-white to-pink-400",
      accent: "pink-400",
      text: "pink-100",
    },
    description: "Suavidad y frescura para tu ropa y textiles",
  },
  duft: {
    name: "Duft",
    logo: "/images/logo-duft-new.png",
    colors: {
      primary: "from-purple-600 via-white to-purple-400",
      accent: "purple-500",
      text: "purple-100",
    },
    description: "Fragancias exclusivas para ambientes únicos",
  },
  acquapul: {
    name: "Acquapul",
    logo: "/images/logo-acquapul.png",
    colors: {
      primary: "from-cyan-600 via-white to-cyan-400",
      accent: "cyan-600",
      text: "cyan-100",
    },
    description: "Limpieza profunda con tecnología avanzada",
  },
}

export function getBrandData(slug: string): BrandData {
  return brands[slug as BrandSlug] || brands.suiza
}
