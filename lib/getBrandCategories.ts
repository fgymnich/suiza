export function getBrandCategories(brand: string) {
  const categoriesByBrand: Record<string, {
    title: string
    image: string
    description: string
    products: string[]
  }[]> = {
    clinsy: [
      {
        title: "Ceras",
        image: "/images/products/CLINSY/CERAS/Cera líquida al solvente Clinsy 900ml Roble Claro.jpg",
        description: "Ceras líquidas al solvente para el cuidado de pisos",
        products: [
          "Cera líquida al solvente Clinsy 900ml Incoloro",
          "Cera líquida al solvente Clinsy 900ml Roble Claro",
          "Cera líquida al solvente Clinsy 900ml Roble Oscuro",
          "Doypack Cera Clinsy Incoloro 400ml",
          "Doypack Cera Clinsy Roble Claro 400ml",
          "Doypack Cera Clinsy Roble Oscuro 400ml",
        ],
      },
      {
        title: "Autobrillos",
        image: "/images/products/CLINSY/AUTOBRILLOS/Autobrillo resistente rojo 900ml.jpg",
        description: "Autobrillos resistentes para alto brillo y protección",
        products: [
          "Autobrillo resistente rojo 900ml",
          "Autobrillo resistente incoloro 900ml",
          "Autobrillo resistente negro 900ml",
        ],
      },
      {
        title: "Especialidades",
        image: "/images/products/CLINSY/ESPECIALIDADES/Desengrasante Clinsy.jpg",
        description: "Productos especiales para usos específicos del hogar",
        products: [
          "Destapacañerías Clinsy 1 litro",
          "Sellador Incoloro Clinsy",
          "Sellador Negro Clinsy",
          "Sellador Rojo Clinsy",
          "Sarroquitol 1 litro",
          "Limpia alfombras gatillo 500 ml",
        ],
      },
    ],

    duft: [
      {
        title: "Jabones Líquidos",
        image: "/images/products/DUFT/Jabón líquido Duft clásico 900 ml.jpg",
        description: "Jabones líquidos para lavado de ropa y textiles",
        products: [
          "Jabón líquido Duft clásico 900 ml",
          "Jabón líquido Duft clásico 3 l",
          "Jabón líquido Duft ecolavado 900 ml",
          "Jabón líquido Duft ecolavado 3 l",
        ],
      },
    ],

    hornolim: [
      {
        title: "Limpia Parrillas",
        image: "/images/products/HORNOLIM/Limpia Parrillas HornoLim.jpg",
        description: "Limpieza profunda y efectiva para parrillas y hornos",
        products: ["Limpia Parrillas HornoLim"],
      },
    ],

    limpialin: [
      {
        title: "Lavandinas",
        image: "/images/products/LIMPIALIN/Lavandina Limpialin 1 Litro 25 g.jpg",
        description: "Lavandinas tradicionales y en gel para desinfección",
        products: [
          "Lavandina Limpialin 1 Litro 25 g",
          "Lavandina Limpialin 1 Litro 55 g",
          "Lavandina Limpialin 2 Litros 25 g",
          "Lavandina Limpialin 2 Litros 55 g",
          "Lavandina Limpialin 4 Litros 25 g",
          "Lavandina Limpialin 4 Litros 55 g",
          "Limpialin lavandina en Gel original",
          "Limpialin lavandina en Gel citrus",
          "Limpialin lavandina en Gel lavanda",
        ],
      },
    ],

    suavitel: [
      {
        title: "Suavizantes",
        image: "/images/products/SUAVITEL/Suavitel 900 ml.jpg",
        description: "Suavizantes para el cuidado de tu ropa",
        products: ["Suavitel 900 ml", "Suavitel 3 l"],
      },
    ],

    acquapul: [
      {
        title: "Cloro",
        image: "/images/products/ACQUAPUL/Cloro Acqua Pul 5 litros.jpg",
        description: "Cloro para limpieza profunda y desinfección",
        products: ["Cloro Acqua Pul 5 litros"],
      },
    ],

    suiza: [
      {
        title: "Ceras",
        image: "/images/products/SUIZA/CERAS/Cera Suiza Roble Claro 850 ml.jpg",
        description: "Ceras líquidas, al solvente y pasta para pisos",
        products: [
          "Cera Suiza Roble Claro 850 ml",
          "Cera Suiza Roble Oscuro 850 ml",
          "Cera Suiza Incoloro 850 ml",
          "Cera Suiza Incoloro 5.000 ml",
          "Cera pasta Suiza 450 cm3",
          "Cera al solvente 425ml Roble Claro",
          "Cera al solvente 425ml Incoloro",
        ],
      },
      {
        title: "Ceras para Cerámicos",
        image: "/images/products/SUIZA/CERAS PARA CERAMICOS/Cera pisos Microcemento, Porcelanato y Mármol 5000ml.jpg",
        description: "Ceras especiales para superficies duras como cerámicos y mármol",
        products: [
          "Cera Microcemento, Porcelanato y Mármol 900 cc",
          "Suiza Bril 900 ml",
          "Cera pisos Microcemento, Porcelanato y Mármol 5000ml",
        ],
      },
      {
        title: "Autobrillos",
        image: "/images/products/SUIZA/AUTOBRILLOS/Autobrillo Suiza Rojo 900 ml.jpg",
        description: "Autobrillos intensos para acabados brillantes",
        products: [
          "Autobrillo Suiza Rojo 900 ml",
          "Autobrillo Suiza Negro 900 ml",
          "Autobrillo Suiza Incoloro 900 ml",
          "Autobrillo incoloro 5000ml",
          "Doypack autobrillo incoloro 400ml",
          "Doypack autobrillo rojo 400ml",
        ],
      },
      {
        title: "Lustramuebles",
        image: "/images/products/SUIZA/LUSTRAMUEBLES/Lustramuebles Clásico Aerosol 360 cm3.jpg",
        description: "Cuidado y brillo para muebles de madera",
        products: [
          "Lustramuebles Clásico Aerosol 360 cm3",
          "Lustramuebles Crema 200cc",
          "Lustramuebles Lavanda Aerosol 360 cm3",
          "Lustramuebles Naranja Pimienta Aerosol 360 cm3",
        ],
      },
      {
        title: "Limpiadores",
        image: "/images/products/SUIZA/FRAGANCIAS/Limpiador Lavanda de los Alpes 900 ml.jpg",
        description: "Limpieza y fragancia para todo tipo de ambientes",
        products: [
          "Limpiador Citronela 900 ml",
          "Limpiador Lavanda de los Alpes 900 ml",
          "Limpiador Frescura Marina 900 ml",
        ],
      },
      {
        title: "Paños",
        image: "/images/products/SUIZA/PAÑOS/Suiza Paño de piso rayado.jpg",
        description: "Paños de limpieza de alta resistencia",
        products: [
          "Suiza Paño de piso rayado",
          "Suiza Rejilla especial",
          "Suiza Franela Gamuzada",
        ],
      },
    ],
  };

  return categoriesByBrand[brand.toLowerCase()] || []
};
