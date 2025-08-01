type Product = {
  name: string
  image: string
  description: string
  sizes: string[]
  href: string
}

// Find category matching the slug param (slugify your titles the same way you do in URLs)
const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "") // Remove all non-word characters except dashes

export const getCategoryProducts = (brandSlug: string, categorySlug: string): Product[] => {
  const dataByBrand = {
    clinsy: {
      categories: [
        {
          title: "Autobrillos",
          image: "/images/products/CLINSY/AUTOBRILLOS/Autobrillo resistente incoloro 900ml.jpg",
          description: "Autobrillos resistentes para pisos",
          products: [
            {
              name: "Autobrillo resistente incoloro",
              sizes: ["900ml"],
            },
            {
              name: "Autobrillo resistente rojo",
              sizes: ["900ml"],
            },
            {
              name: "Autobrillo resistente negro",
              sizes: ["900ml"],
            },
          ],
        },
        {
          title: "Ceras",
          image: "/images/products/CLINSY/CERAS/Cera líquida al solvente Clinsy 900ml Incoloro.jpg",
          description: "Ceras líquidas al solvente Clinsy en distintos tonos",
          products: [
            {
              name: "Cera líquida al solvente Clinsy Incoloro",
              sizes: ["900ml"],
            },
            {
              name: "Cera líquida al solvente Clinsy Roble Claro",
              sizes: ["900ml"],
            },
            {
              name: "Cera líquida al solvente Clinsy Roble Oscuro",
              sizes: ["900ml"],
            },
            {
              name: "Doypack Cera Clinsy Incoloro",
              sizes: ["400ml"],
            },
            {
              name: "Doypack Cera Clinsy Roble Claro",
              sizes: ["400ml"],
            },
            {
              name: "Doypack Cera Clinsy Roble Oscuro",
              sizes: ["400ml"],
            },
          ],
        },
        {
          title: "Especialidades",
          image: "/images/products/CLINSY/ESPECIALIDADES/Destapacañerías Clinsy 1 litro.jpg",
          description: "Productos especiales para limpieza y mantenimiento",
          products: [
            {
              name: "Destapacañerías Clinsy",
              sizes: ["1 litro"],
            },
            {
              name: "Sarroquitol",
              sizes: ["1 litro"],
            },
            {
              name: "Limpia alfombras gatillo",
              sizes: ["500 ml"],
            },
            {
              name: "Sellador Clinsy Incoloro",
              sizes: [],
            },
            {
              name: "Sellador Clinsy Negro",
              sizes: [],
            },
            {
              name: "Sellador Clinsy Rojo",
              sizes: [],
            },
          ],
        },
      ],
    },
    duft: {
      categories: [
        {
          title: "Jabones líquidos",
          image: "/images/products/DUFT/Jabón líquido Duft clásico 3 l.jpg",
          description: "Jabón líquido Duft en distintas presentaciones",
          products: [
            {
              name: "Jabón líquido Duft clásico",
              sizes: ["900 ml", "3 l"],
            },
            {
              name: "Jabón líquido Duft ecolavado",
              sizes: ["900 ml", "3 l"],
            },
          ],
        },
      ],
    },
    hornolim: {
      categories: [
        {
          title: "Limpia Parrillas",
          image: "/images/products/HORNOLIM/Limpia Parrillas HornoLim.jpg",
          description: "Limpieza profunda para parrillas y hornos",
          products: [
            {
              name: "Limpia Parrillas HornoLim",
              sizes: [],
            },
          ],
        },
      ],
    },
    limpialin: {
      categories: [
        {
          title: "Lavandinas",
          image: "/images/products/LIMPIALIN/Lavandina Limpialin 1 Litro 25 g.jpg",
          description: "Lavandinas tradicionales y en gel",
          products: [
            {
              name: "Lavandina Limpialin",
              sizes: [
                "1 Litro 25 g",
                "1 Litro 55 g",
                "2 Litros 25 g",
                "2 Litros 55 g",
                "4 Litros 25 g",
                "4 Litros 55 g",
              ],
            },
            {
              name: "Limpialin lavandina en Gel citrus",
              sizes: [],
            },
            {
              name: "Limpialin lavandina en Gel lavanda",
              sizes: [],
            },
            {
              name: "Limpialin lavandina en Gel original",
              sizes: [],
            },
          ],
        },
      ],
    },
    suavitel: {
      categories: [
        {
          title: "Suavizantes",
          image: "/images/products/SUAVITEL/Suavitel 900 ml.jpg",
          description: "Suavizantes de ropa Suavitel",
          products: [
            {
              name: "Suavizante Suavitel",
              sizes: ["900 ml", "3 l"],
            },
          ],
        },
      ],
    },
    acquapul: {
      categories: [
        {
          title: "Cloro",
          image: "/images/products/ACQUAPUL/Cloro Acqua Pul 5 litros.jpg",
          description: "Cloro concentrado para limpieza general",
          products: [
            {
              name: "Cloro Acqua Pul",
              sizes: ["5 litros"],
            },
          ],
        },
      ],
    },
    suiza: {
      categories: [
        {
          title: "ceras",
          description: "Ceras líquidas, al solvente y en pasta para todo tipo de pisos",
          image: "/images/products/SUIZA/CERAS/Cera Suiza Incoloro 850 ml.jpg",
          products: [
            {
              name: "Cera Suiza Incoloro",
              sizes: ["850 ml", "5.000 ml"],
            },
            {
              name: "Cera Suiza Roble Claro",
              sizes: ["850 ml", "5.000 ml"],
            },
            {
              name: "Cera Suiza Roble Oscuro",
              sizes: ["850 ml", "5.000 ml"],
            },
            {
              name: "Cera Pisos Plastificados y Flotantes PP201",
              sizes: [],
            },
            {
              name: "Cera Suiza Pisos Plastificados y Flotantes",
              sizes: ["850 ml"],
            },
            {
              name: "Cera al solvente Incoloro",
              sizes: ["425 ml"],
            },
            {
              name: "Cera al solvente Roble Claro",
              sizes: ["425 ml"],
            },
            {
              name: "Cera al solvente Roble Oscuro",
              sizes: ["425 ml"],
            },
            {
              name: "Cera pasta Suiza",
              sizes: ["450 cm3"],
            },
            {
              name: "Cera pasta Suiza Roble Claro",
              sizes: ["450 cm3"],
            },
            {
              name: "Cera pasta Suiza Roble Oscuro",
              sizes: ["450 cm3"],
            },
          ],
        },
        {
          title: "CERAS PARA CERÁMICOS",
          description: "Ceras especiales para superficies duras como cerámicos y mármol",
          image: "/images/products/SUIZA/CERAS PARA CERAMICOS/Cera Microcemento, Porcelanato y Mármol 900 cc.jpg",
          products: [
            {
              name: "Cera Microcemento, Porcelanato y Mármol",
              sizes: ["900 cc", "5000 ml"],
            },
            {
              name: "Suiza Bril",
              sizes: ["900 ml"],
            },
          ],
        },
        {
          title: "AUTOBRILLOS",
          description: "Autobrillos de alta resistencia para pisos",
          image: "/images/products/SUIZA/AUTOBRILLOS/Autobrillo Suiza Incoloro 900 ml.jpg",
          products: [
            {
              name: "Autobrillo Suiza Incoloro",
              sizes: ["900 ml", "400 ml (doypack)", "5000 ml"],
            },
            {
              name: "Autobrillo Suiza Negro",
              sizes: ["900 ml", "400 ml (doypack)"],
            },
            {
              name: "Autobrillo Suiza Rojo",
              sizes: ["900 ml", "400 ml (doypack)"],
            },
          ],
        },
        {
          title: "ACONDICIONADOR",
          description: "Acondicionadores para pisos",
          image: "/images/products/SUIZA/ACONDICIONADOR/Acondicionador para pisos Suiza 900 cc.jpg",
          products: [
            {
              name: "Acondicionador para pisos Suiza",
              sizes: ["900 cc", "5000 ml"],
            },
            {
              name: "Doypack acondicionador",
              sizes: ["400 ml"],
            },
          ],
        },
        {
          title: "FRAGANCIAS",
          description: "Limpieza con fragancias aromáticas",
          image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Frescura Marina 900 ml.jpg",
          products: [
            {
              name: "Limpiador Frescura Marina",
              sizes: ["900 ml", "1800 ml"],
            },
            {
              name: "Limpiador Citronela",
              sizes: ["900 ml", "1800 ml"],
            },
            {
              name: "Limpiador Lavanda de los Alpes",
              sizes: ["900 ml", "1800 ml"],
            },
            {
              name: "Limpiador Limón",
              sizes: ["900 ml", "1800 ml"],
            },
            {
              name: "Limpiador Pinos Patagónicos",
              sizes: ["900 ml", "1800 ml"],
            },
          ],
        },
        {
          title: "LIMPIADORES",
          description: "Limpieza profunda para pisos y superficies específicas",
          image: "/images/products/SUIZA/LIMPIADORES/Limpiador Pisos Plastificados y Flotantes 900ml.jpg",
          products: [
            {
              name: "Limpiador Pisos Plastificados y Flotantes",
              sizes: ["900 ml"],
            },
            {
              name: "Limpiador Flotantes y de Madera",
              sizes: ["425 ml", "900 ml"],
            },
            {
              name: "Limpiador Pisos Vinílicos",
              sizes: ["900 ml"],
            },
            {
              name: "Limpiador Porcelanato símil madera",
              sizes: ["900 ml"],
            },
            {
              name: "Limpiador Microcemento, Porcelanato y Mármol",
              sizes: ["900 ml"],
            },
            {
              name: "Doypack Limpiador para Pisos Plastificados y Flotantes",
              sizes: ["400 ml"],
            },
          ],
        },
        {
          title: "DETERGENTES",
          description: "Detergentes líquidos para vajilla",
          image: "/images/products/SUIZA/DETERGENTES/Detergente Suiza 500 ml.jpg",
          products: [
            {
              name: "Detergente Suiza",
              sizes: ["300 ml", "500 ml", "750 ml"],
            },
            {
              name: "Detergente Suiza Limón Verde",
              sizes: ["300 ml", "500 ml", "750 ml"],
            },
          ],
        },
        {
          title: "LAVANDINA",
          description: "Lavandinas en gel para limpieza profunda",
          image: "/images/products/SUIZA/LAVANDINA/Suiza lavandina en Gel original.jpg",
          products: [
            {
              name: "Suiza lavandina en Gel",
              sizes: ["original", "citrus", "lavanda"],
            },
          ],
        },
        {
          title: "LUSTRAMUEBLES",
          description: "Productos para dar brillo y protección a muebles",
          image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Clásico Aerosol 360 cm3.jpg",
          products: [
            {
              name: "Lustramueble Clásico Aerosol",
              sizes: ["360 cm3"],
            },
            {
              name: "Lustramueble Lavanda Aerosol",
              sizes: ["360 cm3"],
            },
            {
              name: "Lustramueble Naranja Pimienta Aerosol",
              sizes: ["360 cm3"],
            },
            {
              name: "Lustramueble Crema",
              sizes: ["200 cc"],
            },
          ],
        },
        {
          title: "PAÑOS",
          description: "Paños y rejillas de limpieza",
          image: "/images/products/SUIZA/PAÑOS/Suiza Paño de piso consorcio Blanco.jpg",
          products: [
            {
              name: "Suiza Paño de piso",
              sizes: ["consorcio Blanco", "consorcio Gris", "rayado", "gris", "nido de abeja"],
            },
            {
              name: "Suiza Franela Gamuzada",
              sizes: [],
            },
            {
              name: "Suiza Rejilla",
              sizes: ["especial", "liviana"],
            },
          ],
        },
        {
          title: "ESPECIALIDADES",
          description: "Línea especializada para tareas específicas de limpieza",
          image: "/images/products/SUIZA/ESPECIALIDADES/LIMPIADOR/Polvo Limpiador Suiza 500gr.jpg",
          products: [
            {
              name: "Polvo Limpiador Suiza",
              sizes: ["500gr"],
            },
            {
              name: "Removedor Ceras y Autobrillos",
              sizes: ["900 cc"],
            },
            {
              name: "Removedor para pisos de Madera Suiza",
              sizes: ["850 ml"],
            },
            {
              name: "Revitalizador de Muebles Incoloro",
              sizes: ["200 cc"],
            },
            {
              name: "Revitalizador de Muebles Caoba",
              sizes: ["200 cc"],
            },
            {
              name: "Revitalizador de Muebles Nogal",
              sizes: ["200 cc"],
            },
          ],
        },
      ],
    },
  }

  const brandKey = brandSlug.toLowerCase()
  const brand = dataByBrand[brandKey]

  if (!brand) return []

  const category = brand.categories.find((cat) => slugify(cat.title) === categorySlug)

  if (!category) return []

  return category.products.map((product) => ({
    name: product.name,
    image: category.image,
    description: category.description,
    sizes: product.sizes,
    href: `/${brandSlug}/${categorySlug}/${slugify(product.name)}`,
  }))
}
