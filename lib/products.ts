export interface ProductVariant {
  id: number
  size: string
  price: number
  reference: string
  specifications: string[]
}

export interface Product {
  id: string
  categoryId: string
  categoryName: string
  name: string
  brand: string
  description: string
  price: number
  image: string
  variants: ProductVariant[]
}

export interface Category {
  id: string
  title: string
  description: string
}

const categories: Category[] = [
  {
    id: "materiales-construccion",
    title: "Materiales de Construcción",
    description: "Cemento, varillas, perfiles y más",
  },
  {
    id: "pinturas-accesorios",
    title: "Pinturas y Accesorios",
    description: "Pinturas, brochas y rodillos",
  },
  {
    id: "electrica",
    title: "Eléctrica",
    description: "Cables, conectores y más",
  },
  {
    id: "cerraderia",
    title: "Cerrajería",
    description: "Candados, bisagras y cadenas",
  },
  {
    id: "herramientas-electricas",
    title: "Herramientas Eléctricas",
    description: "Taladros, pulidoras y más",
  },
  {
    id: "herramientas-mano",
    title: "Herramientas de Mano",
    description: "Destornilladores, alicates y más",
  },
]

const products: Product[] = [
  {
    id: "pincel-redondo-no4",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pincel Redondo No 4",
    brand: "",
    description: "Pincel pequeño con punta redondeada, ideal para detalles finos en pintura.",
    price: 0,
    image: "/images/pincel-redondo-4.png",
    variants: [
      {
        id: 1,
        size: "No 4",
        price: 0,
        reference: "PIN-4",
        specifications: [
          "Tamaño pequeño",
          "Ideal para detalles finos",
        ],
      },
      {
        id: 2,
        size: "No 6",
        price: 0,
        reference: "PIN-6",
        specifications: [
          "Tamaño medio",
          "Trazos amplios con precisión",
        ],
      },
    ],
  },
  
  {
    id: "cable-cobre-duplex-2x12-300v-blanco-centelsa",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cable Cobre Duplex 2x12 300v Blanco CENTELSA",
    brand: "CENTELSA",
    description: "Cable con dos conductores de cobre aislados, usado para instalaciones eléctricas domésticas.",
    price: 0,
    image: "/images/cable-cobre-duplex-2x12.png",
    variants: [
      {
        id: 1,
        size: "2x12 300v",
        price: 0,
        reference: "CENTELSA-2X12-300V",
        specifications: [
          "Dos conductores de cobre",
          "Tensión: 300v",
          "Color blanco",
        ],
      },
      {
        id: 2,
        size: "2x14 150v",
        price: 0,
        reference: "CENTELSA-2X14-150V",
        specifications: [
          "Dos conductores de cobre",
          "Tensión: 150v",
          "Color blanco",
        ],
      },
    ],
  },
  
  {
    id: "cemento-gris-cemex-50kg",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Cemento Gris CEMEX Uso General x 50kg",
    brand: "CEMEX",
    description: "Mezcla en polvo de uso estructural, para obras civiles, mampostería y concreto.",
    price: 0,
    image: "/images/cemento-cemex-50kg.png",
    variants: [
      {
        id: 1,
        size: "Bolsa 50kg",
        price: 2492613,
        reference: "CEMEX-50KG",
        specifications: [
          "Peso: 50 kg",
          "Uso estructural",
          "Ideal para obras civiles y mampostería",
        ],
      },
      {
        id: 2,
        size: "Bolsa 40kg",
        price: 0,
        reference: "HOLCIM-50KG",
        specifications: [
          "Peso: 40 kg",
          "Alta resistencia",
          "Uso en estructuras y obra gris",
        ],
      },
    ],
  },
 
  {
    id: "varilla-grafilada-6mm-x6ml",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Varilla Grafilada 6.0mm x 6ml 1.33 kg",
    brand: "",
    description: "Barra de acero corrugado de gran espesor, para refuerzo de concreto.",
    price: 0,
    image: "/images/varilla-grafilada-6mm.png",
    variants: [
      {
        id: 1,
        size: "6.0mm x 6ml",
        price: 0,
        reference: "VARILLA-6MM-6ML",
        specifications: [
          "Peso: 1.33 kg",
          "Acero corrugado grueso",
          "Refuerzo para concreto",
        ],
      },
      {
        id: 2,
        size: "4.0mm x 6ml",
        price: 0,
        reference: "VARILLA-4MM-6ML",
        specifications: [
          "Peso: 0.59 kg",
          "Acero corrugado delgado",
          "Uso en refuerzos secundarios",
        ],
      },
    ],
  },
  
  {
    id: "destornillador-punta-phillips-5-16x6-thorsen",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Destornillador Punta Phillips 5/16x6” THORSEN",
    brand: "THORSEN",
    description: "Herramienta de precisión para tornillos con cabeza en cruz, de tamaño mediano.",
    price: 0,
    image: "/images/destornillador-thorsen.png",
    variants: [
      {
        id: 1,
        size: "5/16x6”",
        price: 0,
        reference: "THORSEN-PHILLIPS-5-16X6",
        specifications: [
          "Punta Phillips",
          "Tamaño mediano",
          "Marca THORSEN",
        ],
      },
       {
        id: 2,
        size: "3x6”",
        price: 0,
        reference: "STANLEY-PHILLIPS-3X6",
        specifications: [
          "Punta Phillips",
          "Uso profesional",
          "Marca STANLEY",
        ],
      },
    ],
  },
  
  {
    id: "pintura-acrilica-azul-cn-fachada-sapolin",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pintura Acrílica Azul CÑ Fachada SAPOLIN",
    brand: "SAPOLIN",
    description: "Pintura exterior resistente al clima, color azul, base acrílica.",
    price: 0,
    image: "/images/pintura-azul-sapolin.png",
    variants: [
      {
        id: 1,
        size: "1 Galón",
        price: 0,
        reference: "SAPOLIN-ACRILICO-AZUL",
        specifications: [
          "Color azul",
          "Base acrílica",
          "Resistente al clima",
          "Para fachadas",
        ],
      },
      {
        id: 2,
        size: "1 Galón",
        price: 0,
        reference: "SAPOLIN-ACRILICO-ROJO",
        specifications: [
          "Color rojo",
          "Base acrílica",
          "Resistente al clima",
          "Para fachadas",
        ],
      },
    ],
  },
 
  {
    id: "vinilo-t2-blanco-cn-capri-sapolin",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Vinilo T2 Blanco CÑ Capri SAPOLIN",
    brand: "SAPOLIN",
    description: "Pintura vinílica blanca para interiores, acabado mate, buena cobertura.",
    price: 0,
    image: "/images/vinilo-blanco-sapolin.png",
    variants: [
      {
        id: 1,
        size: "1 Galón",
        price: 0,
        reference: "SAPOLIN-VINILO-BLANCO",
        specifications: [
          "Color blanco",
          "Acabado mate",
          "Para interiores",
        ],
      },
       {
        id: 2,
        size: "1 Galón",
        price: 0,
        reference: "SAPOLIN-VINILO-BLANCO-HUESO",
        specifications: [
          "Color blanco hueso",
          "Acabado mate",
          "Para muros interiores",
        ],
      },
    ],
  },
  
  {
    id: "bisagra-omega-2x2-16mm-zinca-pl",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Bisagra Omega 2x2 1/16mm Zincada PL",
    brand: "",
    description: "Bisagra para puertas pequeñas o muebles, acabado zincado.",
    price: 0,
    image: "/images/bisagra-omega-zincada.png",
    variants: [
      {
        id: 1,
        size: "2x2 pulgadas",
        price: 0,
        reference: "BISAGRA-OMEGA-2X2-PL",
        specifications: [
          "Acabado zincado",
          "Para puertas pequeñas",
          "Uso en muebles",
        ],
      },
       {
        id: 2,
        size: "2x3 pulgadas",
        price: 0,
        reference: "BISAGRA-OMEGA-2X3-PL",
        specifications: [
          "Acabado zincado",
          "Para puertas medianas",
          "Uso en muebles y puertas",
        ],
      },
    ],
  },
  
  {
    id: "pintura-antioxidante-gris",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pintura Antioxidante Gris",
    brand: "",
    description: "Pintura para proteger superficies metálicas de la corrosión.",
    price: 0,
    image: "/images/pintura-antioxidante-gris.png",
    variants: [
      {
        id: 1,
        size: "1 Galón",
        price: 0,
        reference: "PINTURA-ANTIOX-GRIS",
        specifications: [
          "Protege contra corrosión",
          "Ideal para metales",
          "Acabado gris mate",
        ],
      },
      {
        id: 2,
        size: "Bolsa 50kg",
        price: 0,
        reference: "CEMENTO-ANTICORROSIVO",
        specifications: [
          "Previene corrosión",
          "Uso en estructuras",
          "Alta resistencia",
        ],
      },
    ],
  },
  
  {
    id: "yeso-en-polvora",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Yeso en Polvo",
    brand: "",
    description: "Material de construcción para acabados en interiores, secado rápido.",
    price: 0,
    image: "/images/yeso-polvora.png",
    variants: [
      {
        id: 1,
        size: "Bolsa 25kg",
        price: 0,
        reference: "YESO-POLVO-25KG",
        specifications: [
          "Secado rápido",
          "Uso en interiores",
          "Acabado fino",
        ],
      },
      {
        id: 2,
        size: "Galón",
        price: 0,
        reference: "MASILLA-PAREDES-1GAL",
        specifications: [
          "Rellena grietas",
          "Alisa paredes",
          "Base para pintura",
        ],
      },
    ],
  },
  
  {
    id: "cinta-aislante-negra",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cinta Aislante Negra",
    brand: "",
    description: "Cinta para aislar y proteger conexiones eléctricas.",
    price: 0,
    image: "/images/cinta-aislante-negra.png",
    variants: [
      {
        id: 1,
        size: "Rollos de 20m",
        price: 0,
        reference: "CINTA-NEGRA-20M",
        specifications: [
          "Aislamiento eléctrico",
          "Flexible y resistente",
          "Color negro",
        ],
      },
      {
        id: 2,
        size: "3 pulgadas",
        price: 0,
        reference: "CLAVOS-MADERA-3P",
        specifications: [
          "Uso en madera",
          "Tamaño estándar",
          "Paquetes varios",
        ],
      },
    ],
  },
  
  {
    id: "tornillos-para-madera-2pulgadas",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Tornillos para Madera 2 pulgadas",
    brand: "",
    description: "Tornillos con punta para madera, ideal para ensamblaje fuerte.",
    price: 0,
    image: "/images/tornillos-madera-2p.png",
    variants: [
      {
        id: 1,
        size: "2 pulgadas",
        price: 0,
        reference: "TORNILLOS-MADERA-2P",
        specifications: [
          "Para madera",
          "Punta afilada",
          "Fijación fuerte",
        ],
      },
      {
        id: 2,
        size: "Variados",
        price: 0,
        reference: "TORNILLOS-AUTOPERF",
        specifications: [
          "Autoperforantes",
          "Para metal y madera",
          "Fácil instalación",
        ],
      },
    ],
  },
  
];



export function getProductsByCategory(categoryId: string) {
  const category = categories.find((cat) => cat.id === categoryId)
  const categoryProducts = products.filter((product) => product.categoryId === categoryId)

  return {
    category,
    products: categoryProducts,
  }
}

export function getProductById(productId: string) {
  return products.find((product) => product.id === productId)
}
