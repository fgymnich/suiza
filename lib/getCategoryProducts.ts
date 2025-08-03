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
              image: "/images/products/CLINSY/AUTOBRILLOS/Autobrillo resistente incoloro 900ml.jpg",
            },
            {
              name: "Autobrillo resistente rojo",
              sizes: ["900ml"],
              image: "/images/products/CLINSY/AUTOBRILLOS/Autobrillo resistente rojo 900ml.jpg",
            },
            {
              name: "Autobrillo resistente negro",
              sizes: ["900ml"],
              image: "/images/products/CLINSY/AUTOBRILLOS/Autobrillo resistente negro 900ml.jpg",
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
              image: "/images/products/CLINSY/CERAS/Cera líquida al solvente Clinsy 900ml Incoloro.jpg",
            },
            {
              name: "Cera líquida al solvente Clinsy Roble Claro",
              sizes: ["900ml"],
              image: "/images/products/CLINSY/CERAS/Cera líquida al solvente Clinsy 900ml Roble Claro.jpg",
            },
            {
              name: "Cera líquida al solvente Clinsy Roble Oscuro",
              sizes: ["900ml"],
              image: "/images/products/CLINSY/CERAS/Cera líquida al solvente Clinsy 900ml Roble Oscuro.jpg",
            },
            {
              name: "Doypack Cera Clinsy Incoloro",
              sizes: ["400ml"],
              image: "/images/products/CLINSY/CERAS/Doypack Cera Clinsy Incoloro 400ml.jpg",
            },
            {
              name: "Doypack Cera Clinsy Roble Claro",
              sizes: ["400ml"],
              image: "/images/products/CLINSY/CERAS/Doypack Cera Clinsy Roble Claro 400ml.jpg",
            },
            {
              name: "Doypack Cera Clinsy Roble Oscuro",
              sizes: ["400ml"],
              image: "/images/products/CLINSY/CERAS/Doypack Cera Clinsy Roble Oscuro 400ml.jpg",
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
              image: "/images/products/CLINSY/ESPECIALIDADES/Destapacañerías Clinsy 1 litro.jpg",
            },
            {
              name: "Sarroquitol",
              sizes: ["1 litro"],
              image: "/images/products/CLINSY/ESPECIALIDADES/Sarroquitol 1 litro.jpg",
            },
            {
              name: "Limpia alfombras gatillo",
              sizes: ["500 ml"],
              image: "/images/products/CLINSY/ESPECIALIDADES/Limpia alfombras gatillo 500 ml.jpg",
            },
            {
              name: "Sellador Clinsy Incoloro",
              sizes: [],
              image: "/images/products/CLINSY/ESPECIALIDADES/Sellador Clinsy Incoloro.jpg",
            },
            {
              name: "Sellador Clinsy Negro",
              sizes: [],
              image: "/images/products/CLINSY/ESPECIALIDADES/Sellador Clinsy Negro.jpg",
            },
            {
              name: "Sellador Clinsy Rojo",
              sizes: [],
              image: "/images/products/CLINSY/ESPECIALIDADES/Sellador Clinsy Rojo.jpg",
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
              image: "/images/products/DUFT/Jabón líquido Duft clásico 3 l.jpg",
            },
            {
              name: "Jabón líquido Duft ecolavado",
              sizes: ["900 ml", "3 l"],
              image: "/images/products/DUFT/Jabón líquido Duft ecolavado 3 l.jpg",
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
              image: "/images/products/HORNOLIM/Limpia Parrillas HornoLim.jpg",
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
              image: "/images/products/LIMPIALIN/Lavandina Limpialin 1 Litro 25 g.jpg",
            },
            {
              name: "Limpialin lavandina en Gel citrus",
              sizes: [],
              image: "/images/products/LIMPIALIN/Limpialin lavandina en Gel citrus.jpg",
            },
            {
              name: "Limpialin lavandina en Gel lavanda",
              sizes: [],
              image: "/images/products/LIMPIALIN/Limpialin lavandina en Gel lavanda.jpg",
            },
            {
              name: "Limpialin lavandina en Gel original",
              sizes: [],
              image: "/images/products/LIMPIALIN/Limpialin lavandina en Gel original.jpg",
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
              image: "/images/products/SUAVITEL/Suavitel 900 ml.jpg",
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
              image: "/images/products/ACQUAPUL/Cloro Acqua Pul 5 litros.jpg",
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
              image: "/images/products/SUIZA/CERAS/Cera Suiza Incoloro 850 ml.jpg",
            },
            {
              name: "Cera Suiza Roble Claro",
              sizes: ["850 ml", "5.000 ml"],
              image: "/images/products/SUIZA/CERAS/Cera Suiza Roble Claro 850 ml.jpg",
            },
            {
              name: "Cera Suiza Roble Oscuro",
              sizes: ["850 ml", "5.000 ml"],
              image: "/images/products/SUIZA/CERAS/Cera Suiza Roble Oscuro 850 ml.jpg",
            },
            {
              name: "Cera Pisos Plastificados y Flotantes PP201",
              sizes: [],
              image: "/images/products/SUIZA/CERAS/Cera Pisos Plastificados y Flotantes PP201.png",
            },
            {
              name: "Cera Suiza Pisos Plastificados y Flotantes",
              sizes: ["850 ml"],
              image: "/images/products/SUIZA/CERAS/Cera Suiza Pisos Plastificados y Flotantes 850 ml.jpg",
            },
            {
              name: "Cera al solvente Incoloro",
              sizes: ["425 ml"],
              image: "/images/products/SUIZA/CERAS/Cera al solvente 425ml Incoloro.jpg",
            },
            {
              name: "Cera al solvente Roble Claro",
              sizes: ["425 ml"],
              image: "/images/products/SUIZA/CERAS/Cera al solvente 425ml Roble Claro.jpg",
            },
            {
              name: "Cera al solvente Roble Oscuro",
              sizes: ["425 ml"],
              image: "/images/products/SUIZA/CERAS/Cera al solvente 425ml Roble Oscuro.jpg",
            },
            {
              name: "Cera pasta Suiza",
              sizes: ["450 cm3"],
              image: "/images/products/SUIZA/CERAS/Cera pasta Suiza 450 cm3.jpg",
            },
            {
              name: "Cera pasta Suiza Roble Claro",
              sizes: ["450 cm3"],
              image: "/images/products/SUIZA/CERAS/Cera pasta Suiza Roble Claro 450 cm3.jpg",
            },
            {
              name: "Cera pasta Suiza Roble Oscuro",
              sizes: ["450 cm3"],
              image: "/images/products/SUIZA/CERAS/Cera pasta Suiza Roble Oscuro 450 cm3.jpg",
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
              image: "/images/products/SUIZA/CERAS PARA CERAMICOS/Cera Microcemento, Porcelanato y Mármol 900 cc.jpg",
            },
            {
              name: "Suiza Bril",
              sizes: ["900 ml"],
              image: "/images/products/SUIZA/CERAS PARA CERAMICOS/Suiza Bril 900 ml.jpg",
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
              image: "/images/products/SUIZA/AUTOBRILLOS/Autobrillo Suiza Incoloro 900 ml.jpg",
            },
            {
              name: "Autobrillo Suiza Negro",
              sizes: ["900 ml", "400 ml (doypack)"],
              image: "/images/products/SUIZA/AUTOBRILLOS/Autobrillo Suiza Negro 900 ml.jpg",
            },
            {
              name: "Autobrillo Suiza Rojo",
              sizes: ["900 ml", "400 ml (doypack)"],
              image: "/images/products/SUIZA/AUTOBRILLOS/Autobrillo Suiza Rojo 900 ml.jpg",
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
              image: "/images/products/SUIZA/ACONDICIONADOR/Acondicionador para pisos Suiza 900 cc.jpg",
            },
            {
              name: "Doypack acondicionador",
              sizes: ["400 ml"],
              image: "/images/products/SUIZA/ACONDICIONADOR/Doypack acondicionador 400ml.jpg",
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
              image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Frescura Marina 900 ml.jpg",
            },
            {
              name: "Limpiador Citronela",
              sizes: ["900 ml", "1800 ml"],
              image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Citronela 900 ml.jpg",
            },
            {
              name: "Limpiador Lavanda de los Alpes",
              sizes: ["900 ml", "1800 ml"],
              image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Lavanda de los Alpes 900 ml.jpg",
            },
            {
              name: "Limpiador Limón",
              sizes: ["900 ml", "1800 ml"],
              image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Limón 900 ml.jpg",
            },
            {
              name: "Limpiador Pinos Patagónicos",
              sizes: ["900 ml", "1800 ml"],
              image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Pinos Patagonicos 900 ml.jpg",
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
              image: "/images/products/SUIZA/LIMPIADORES/Limpiador Pisos Plastificados y Flotantes 900ml.jpg",
            },
            {
              name: "Limpiador Flotantes y de Madera",
              sizes: ["425 ml", "900 ml"],
              image: "/images/products/SUIZA/LIMPIADORES/Limpiador Flotantes y de Madera 425.jpg",
            },
            {
              name: "Limpiador Pisos Vinílicos",
              sizes: ["900 ml"],
              image: "/images/products/SUIZA/LIMPIADORES/Limpiador Pisos Vinílicos 900ml.jpg",
            },
            {
              name: "Limpiador Porcelanato símil madera",
              sizes: ["900 ml"],
              image: "/images/products/SUIZA/LIMPIADORES/Limpiador Porcelanato símil madera 900ml.jpg",
            },
            {
              name: "Limpiador Microcemento, Porcelanato y Mármol",
              sizes: ["900 ml"],
              image: "/images/products/SUIZA/LIMPIADORES/Limpiador Microcemento, Porcelanato y Mármol 900 ml.jpg",
            },
            {
              name: "Doypack Limpiador para Pisos Plastificados y Flotantes",
              sizes: ["400 ml"],
              image: "/images/products/SUIZA/LIMPIADORES/Doypack Limpiador para Pisos Plastificados y Flotantes 400ml.jpg",
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
              image: "/images/products/SUIZA/DETERGENTES/Detergente Suiza 500 ml.jpg",
            },
            {
              name: "Detergente Suiza Limón Verde",
              sizes: ["300 ml", "500 ml", "750 ml"],
              image: "/images/products/SUIZA/DETERGENTES/Detergente Suiza limón verde 500 ml.jpg",
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
              image: "/images/products/SUIZA/LAVANDINA/Suiza lavandina en Gel original.jpg",
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
              image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Clásico Aerosol 360 cm3.jpg",
            },
            {
              name: "Lustramueble Lavanda Aerosol",
              sizes: ["360 cm3"],
              image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Lavanda Aerosol 360 cm3.jpg",
            },
            {
              name: "Lustramueble Naranja Pimienta Aerosol",
              sizes: ["360 cm3"],
              image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Naranja Pimienta Aerosol 360 cm3.jpg",
            },
            {
              name: "Lustramueble Crema",
              sizes: ["200 cc"],
              image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Crema 200cc.jpg",
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
              image: "/images/products/SUIZA/PAÑOS/Suiza Paño de piso consorcio Blanco.jpg",
            },
            {
              name: "Suiza Franela Gamuzada",
              sizes: [],
              image: "/images/products/SUIZA/PAÑOS/Suiza Franela Gamuzada.jpg",
            },
            {
              name: "Suiza Rejilla",
              sizes: ["especial", "liviana"],
              image: "/images/products/SUIZA/PAÑOS/Suiza Rejilla especial.jpg",
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
              image: "/images/products/SUIZA/ESPECIALIDADES/LIMPIADOR/Polvo Limpiador Suiza 500gr.jpg",
            },
            {
              name: "Removedor Ceras y Autobrillos",
              sizes: ["900 cc"],
              image: "/images/products/SUIZA/ESPECIALIDADES/REMOVEDOR/Removedor Ceras y Autobrillos 900cc.jpg",
            },
            {
              name: "Removedor para pisos de Madera Suiza",
              sizes: ["850 ml"],
              image: "/images/products/SUIZA/ESPECIALIDADES/REMOVEDOR/Removedor para pisos de Madera Suiza 850ml.jpg",
            },
            {
              name: "Revitalizador de Muebles Incoloro",
              sizes: ["200 cc"],
              image: "/images/products/SUIZA/ESPECIALIDADES/REVITALIZADOR/Revitalizador de Muebles Incoloro 200cc.jpg",
            },
            {
              name: "Revitalizador de Muebles Caoba",
              sizes: ["200 cc"],
              image: "/images/products/SUIZA/ESPECIALIDADES/REVITALIZADOR/Revitalizador de Muebles Caoba 200cc.jpg",
            },
            {
              name: "Revitalizador de Muebles Nogal",
              sizes: ["200 cc"],
              image: "/images/products/SUIZA/ESPECIALIDADES/REVITALIZADOR/Revitalizador de Muebles Nogal 200cc.jpg",
            },
          ],
        },
      ],
    },
  }

  const brandKey = brandSlug.toLowerCase()
  const brand = dataByBrand[brandKey as keyof typeof dataByBrand]

  if (!brand) return []

  const category = brand.categories.find((cat) => slugify(cat.title) === categorySlug)

  if (!category) return []

  return category.products.map((product) => ({
    name: product.name,
    image: product.image,
    description: category.description,
    sizes: product.sizes,
    href: `/${brandSlug}/${categorySlug}/${slugify(product.name)}`,
  })) 
}
