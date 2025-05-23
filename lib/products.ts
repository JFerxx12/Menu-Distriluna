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
    id: "cemento-gris-uso-general",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Cemento Gris Uso General",
    brand: "Cemex",
    description: "Cemento gris para uso general en construcción, alta resistencia y durabilidad.",
    price: 2492613, // en centavos, o puedes usar 24926.13 según convenga
    image: "/images/cemento-gris.png",
    variants: [
      {
        id: 1,
        size: "Bolsa 50kg",
        price: 2492613,
        reference: "101",
        specifications: [
          "Peso: 50 kg",
          "Ideal para mezclas de concreto y mortero",
          "Resistencia estándar",
        ],
      },
      {
        id: 2,
        size: "Bolsa 40kg",
        price: 2771884,
        reference: "106",
        specifications: [
          "Peso: 40 kg",
          "Alta resistencia a compresión",
          "Uso general en obras civiles",
        ],
      },
    ],
  },
  {
    id: "varillas-grafiladas",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Varillas Grafiladas",
    brand: "AceroPlus",
    description: "Varillas de acero grafiladas para refuerzo estructural en construcción.",
    price: 504433,
    image: "/images/varillas-grafiladas.png",
    variants: [
      {
        id: 1,
        size: "12mm",
        price: 504433,
        reference: "211042",
        specifications: [
          "Diámetro: 12 mm",
          "Material: Acero reforzado",
          "Longitud estándar: 12 metros",
        ],
      },
      {
        id: 2,
        size: "10mm",
        price: 223173,
        reference: "211043",
        specifications: [
          "Diámetro: 10 mm",
          "Material: Acero reforzado",
          "Longitud estándar: 12 metros",
        ],
      },
    ],
  },
  {
    id: "perfiles-ornamentacion",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Perfiles Ornamentación",
    brand: "Decoracero",
    description: "Perfiles metálicos para ornamentos y acabados arquitectónicos.",
    price: 375496,
    image: "/images/perfiles-ornamentacion.png",
    variants: [
      {
        id: 1,
        size: "Perfil 3x3",
        price: 375496,
        reference: "81303",
        specifications: [
          "Material: Acero galvanizado",
          "Dimensiones: 3x3 cm",
          "Acabado resistente a la corrosión",
        ],
      },
      {
        id: 2,
        size: "Perfil 4x4",
        price: 247950,
        reference: "81507",
        specifications: [
          "Material: Acero galvanizado",
          "Dimensiones: 4x4 cm",
          "Ideal para estructuras decorativas",
        ],
      },
    ],
  },
  {
    id: "destornillador-punta-phillips",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Destornillador Punta Phillips (Estrella)",
    brand: "ToolMaster",
    description: "Destornillador con punta Phillips, mango ergonómico antideslizante.",
    price: 571400,
    image: "/images/destornillador-phillips.png",
    variants: [
      {
        id: 1,
        size: "Pequeño",
        price: 571400,
        reference: "220119",
        specifications: [
          "Longitud: 15 cm",
          "Material punta: Acero templado",
          "Mango de goma antideslizante",
        ],
      },
      {
        id: 2,
        size: "Mediano",
        price: 722827,
        reference: "69148",
        specifications: [
          "Longitud: 20 cm",
          "Material punta: Acero templado",
          "Diseño ergonómico para mejor agarre",
        ],
      },
    ],
  },
  {
    id: "alicate-diablo",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Alicate Diablo",
    brand: "StrongGrip",
    description: "Alicate multiuso de alta resistencia para trabajos eléctricos y mecánicos.",
    price: 3174608,
    image: "/images/alicate-diablo.png",
    variants: [
      {
        id: 1,
        size: "Mediano",
        price: 3174608,
        reference: "84-221",
        specifications: [
          "Material: Acero inoxidable",
          "Mango aislante eléctrico",
          "Capacidad de corte de cables de hasta 10 mm",
        ],
      },
      {
        id: 2,
        size: "Grande",
        price: 2023889,
        reference: "T1312450010",
        specifications: [
          "Material: Acero inoxidable",
          "Mango antideslizante",
          "Diseñado para fuerza máxima",
        ],
      },
    ],
  },
  {
    id: "bisagra-omega",
    categoryId: "cerraderia",
    categoryName: "Cerrajería",
    name: "Bisagra Omega",
    brand: "HingesPro",
    description: "Bisagra tipo Omega para puertas y ventanas, fabricada en acero reforzado.",
    price: 80210,
    image: "/images/bisagra-omega.png",
    variants: [
      {
        id: 1,
        size: "Pequeña",
        price: 80210,
        reference: "52580M0005",
        specifications: [
          "Material: Acero galvanizado",
          "Resistencia a la corrosión",
          "Ideal para puertas livianas",
        ],
      },
      {
        id: 2,
        size: "Mediana",
        price: 89033,
        reference: "52580M0006",
        specifications: [
          "Material: Acero galvanizado",
          "Alta durabilidad",
          "Para puertas estándar",
        ],
      },
    ],
  },
  {
    id: "candado-combinacion-clave",
    categoryId: "cerraderia",
    categoryName: "Cerrajería",
    name: "Candado de Combinación / Clave",
    brand: "SecureLock",
    description: "Candado de combinación con mecanismo seguro y resistente a manipulación.",
    price: 1962621,
    image: "/images/candado-combinacion.png",
    variants: [
      {
        id: 1,
        size: "Mediano",
        price: 1962621,
        reference: "ML4680DBLK",
        specifications: [
          "Material: Acero endurecido",
          "Sistema de combinación numérica",
          "Resistente a golpes y agua",
        ],
      },
      {
        id: 2,
        size: "Grande",
        price: 1346897,
        reference: "ML646T",
        specifications: [
          "Material: Acero endurecido",
          "Sistema de combinación alfanumérica",
          "Ideal para uso industrial",
        ],
      },
    ],
  },
  {
    id: "cadenas-galvanizadas-cubeta",
    categoryId: "cerraderia",
    categoryName: "Cerrajería",
    name: "Cadenas Galvanizadas Cubeta",
    brand: "ChainMaster",
    description: "Cadenas galvanizadas para usos múltiples, resistentes a la corrosión y desgaste.",
    price: 790436,
    image: "/images/cadenas-galvanizadas.png",
    variants: [
      {
        id: 1,
        size: "Metro",
        price: 790436,
        reference: "426-70",
        specifications: [
          "Material: Acero galvanizado",
          "Resistencia a la corrosión",
          "Diámetro de eslabón: 8 mm",
        ],
      },
    ],
  },
  {
    id: "cable-spt-duplex",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cable SPT Duplex",
    brand: "ElectroCable",
    description: "Cable eléctrico SPT duplex para conexiones y cableado doméstico e industrial.",
    price: 430730,
    image: "/images/cable-spt-duplex.png",
    variants: [
      {
        id: 1,
        size: "100 metros",
        price: 430730,
        reference: "00-2212",
        specifications: [
          "Voltaje: 125V",
          "Material conductor: Cobre",
          "Aislamiento: PVC durable",
        ],
      },
      {
        id: 2,
        size: "200 metros",
        price: 256432,
        reference: "00-2214",
        specifications: [
          "Voltaje: 125V",
          "Material conductor: Cobre",
          "Aislamiento: PVC durable",
        ],
      },
      {
        id: 3,
        size: "150 metros",
        price: 611494,
        reference: "EEC-D-020",
        specifications: [
          "Voltaje: 125V",
          "Material conductor: Cobre",
          "Aislamiento: PVC reforzado",
        ],
      },
    ],
  },
  {
    id: "cable-acero-desnudo-rigido-6x7",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cable Acero Desnudo Rígido 6x7",
    brand: "CableTech",
    description: "Cable de acero desnudo rígido, alta resistencia para líneas eléctricas y telecomunicaciones.",
    price: 90898,
    image: "/images/cable-acero-desnudo.png",
    variants: [
      {
        id: 1,
        size: "100 metros",
        price: 90898,
        reference: "40750",
        specifications: [
          "Material: Acero galvanizado",
          "Configuración: 6x7 hilos",
          "Alta resistencia mecánica",
        ],
      },
    ],
  },
  {
    id: "pincel-redondo",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pincel Redondo",
    brand: "PaintPro",
    description: "Pincel redondo para acabados finos en pintura, disponible en tamaños variados.",
    price: 69917,
    image: "/images/pincel-redondo.png",
    variants: [
      {
        id: 1,
        size: "No 4",
        price: 69917,
        reference: "00017",
        specifications: [
          "Diámetro: 4 cm",
          "Cerdas naturales",
          "Ideal para pinturas acrílicas y al óleo",
        ],
      },
      {
        id: 2,
        size: "No 6",
        price: 80758,
        reference: "00018",
        specifications: [
          "Diámetro: 6 cm",
          "Cerdas naturales",
          "Acabado profesional",
        ],
      },
    ],
  },
  {
    id: "pintura-acrilica-exterior",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pintura Acrílica Exterior",
    brand: "Sapolin",
    description: "Pintura acrílica de alta durabilidad para exteriores, resistente a la intemperie.",
    price: 22928755,
    image: "/images/pintura-acrilica.png",
    variants: [
      {
        id: 1,
        size: "Galón",
        price: 22928755,
        reference: "34004A58-1",
        specifications: [
          "Capacidad: 1 galón",
          "Resistencia UV",
          "Secado rápido",
        ],
      },
      {
        id: 2,
        size: "5 Galones",
        price: 25934431,
        reference: "34004A58-2",
        specifications: [
          "Capacidad: 5 galones",
          "Acabado mate",
          "Ideal para exteriores",
        ],
      },
    ],
  },
  {
    id: "vinilo-tipo-ii-sapolin",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Vinilo Tipo II Sapolin",
    brand: "Sapolin",
    description: "Vinilo para pintura interior, alta cobertura y fácil aplicación.",
    price: 13806589,
    image: "/images/vinilo-tipo-ii.png",
    variants: [
      {
        id: 1,
        size: "Galón",
        price: 13806589,
        reference: "3401C58",
        specifications: [
          "Cobertura: 350 ft²/galón",
          "Secado rápido",
          "Acabado satinado",
        ],
      },
      {
        id: 2,
        size: "5 Galones",
        price: 14027270,
        reference: "34013C58",
        specifications: [
          "Cobertura: 1750 ft²",
          "Resistente al moho",
          "Fácil aplicación",
        ],
      },
    ],
  },
  {
    id: "pulidora-4-12-industrial",
    categoryId: "herramientas-electricas",
    categoryName: "Herramientas Eléctricas",
    name: 'Pulidora 4.1/2" Industrial',
    brand: "DeWalt",
    description: "Pulidora industrial para acabados profesionales en metal y madera.",
    price: 29700000,
    image: "/images/pulidora-industrial.png",
    variants: [
      {
        id: 1,
        size: '4.1/2"',
        price: 29700000,
        reference: "DWE4120",
        specifications: [
          "Potencia: 1200 W",
          "Velocidad variable: 2800-12000 RPM",
          "Peso: 3.5 kg",
        ],
      },
      {
        id: 2,
        size: '4.1/2" Plus',
        price: 30262269,
        reference: "GD1020",
        specifications: [
          "Potencia: 1400 W",
          "Velocidad variable: 3000-13000 RPM",
          "Incluye maletín de transporte",
        ],
      },
    ],
  },
  {
    id: "taladro-inalambrico-percutor",
    categoryId: "herramientas-electricas",
    categoryName: "Herramientas Eléctricas",
    name: "Taladro Inalámbrico Percutor",
    brand: "DeWalt",
    description: "Taladro inalámbrico percutor profesional con batería de larga duración.",
    price: 21570603,
    image: "/images/taladro-inalambrico.png",
    variants: [
      {
        id: 1,
        size: "12V",
        price: 21570603,
        reference: "FCD21",
        specifications: [
          "Potencia: 12V",
          "Velocidad: 0-1500 RPM",
          "Batería: 2.0Ah Li-Ion",
          "Peso: 1.5 kg",
          "Incluye: Maletín, cargador y batería",
        ],
      },
      {
        id: 2,
        size: "18V",
        price: 34782958,
        reference: "X1D20",
        specifications: [
          "Potencia: 18V",
          "Velocidad: 0-1800 RPM",
          "Batería: 4.0Ah Li-Ion",
          "Peso: 1.8 kg",
          "Incluye: Maletín, cargador rápido y batería",
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
