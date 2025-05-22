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
    id: "equipos-electronicos",
    title: "Equipos Electrónicos",
    description: "Taladros, sierras eléctricas y más",
  },
  {
    id: "herramientas-manuales",
    title: "Herramientas Manuales",
    description: "Destornilladores, alicates y llaves",
  },
  {
    id: "accesorios-consumibles",
    title: "Accesorios y Consumibles",
    description: "Tornillos, chasos, clavos y boquillas",
  },
]

const products: Product[] = [
  // Equipos Electrónicos
  {
    id: "taladro-percutor-dewalt",
    categoryId: "equipos-electronicos",
    categoryName: "Equipos Electrónicos",
    name: "Taladro Percutor Inalámbrico",
    brand: "DeWalt",
    description:
      "Taladro percutor inalámbrico profesional con batería de litio, ideal para trabajos de construcción y bricolaje.",
    price: 299900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "12V",
        price: 299900,
        reference: "DW-TP12V-01",
        specifications: [
          "Potencia: 12V",
          "Velocidad: 0-1500 RPM",
          "Batería: 2.0Ah Li-Ion",
          "Peso: 1.5 kg",
          "Incluye: Maletín, cargador y 2 baterías",
        ],
      },
      {
        id: 2,
        size: "18V",
        price: 399900,
        reference: "DW-TP18V-02",
        specifications: [
          "Potencia: 18V",
          "Velocidad: 0-1800 RPM",
          "Batería: 4.0Ah Li-Ion",
          "Peso: 1.8 kg",
          "Incluye: Maletín, cargador rápido y 2 baterías",
        ],
      },
      {
        id: 3,
        size: "20V MAX",
        price: 499900,
        reference: "DW-TP20V-03",
        specifications: [
          "Potencia: 20V MAX",
          "Velocidad: 0-2000 RPM",
          "Batería: 5.0Ah Li-Ion",
          "Peso: 2.0 kg",
          "Incluye: Maletín premium, cargador rápido y 2 baterías de alta capacidad",
        ],
      },
    ],
  },
  {
    id: "sierra-circular-bosch",
    categoryId: "equipos-electronicos",
    categoryName: "Equipos Electrónicos",
    name: "Sierra Circular Profesional",
    brand: "Bosch",
    description:
      "Sierra circular profesional con motor potente y ajuste de profundidad, perfecta para cortes precisos en madera y derivados.",
    price: 349900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "1200W",
        price: 349900,
        reference: "BS-SC1200-01",
        specifications: [
          "Potencia: 1200W",
          'Diámetro de disco: 7-1/4" (184mm)',
          "Velocidad: 5200 RPM",
          "Profundidad máxima de corte: 65mm",
          "Peso: 4.2 kg",
        ],
      },
      {
        id: 2,
        size: "1500W",
        price: 429900,
        reference: "BS-SC1500-02",
        specifications: [
          "Potencia: 1500W",
          'Diámetro de disco: 7-1/4" (184mm)',
          "Velocidad: 5500 RPM",
          "Profundidad máxima de corte: 70mm",
          "Peso: 4.5 kg",
        ],
      },
    ],
  },
  {
    id: "rotomartillo-makita",
    categoryId: "equipos-electronicos",
    categoryName: "Equipos Electrónicos",
    name: "Rotomartillo SDS-Plus",
    brand: "Makita",
    description:
      "Rotomartillo con sistema SDS-Plus para perforación en concreto, mampostería y otros materiales duros.",
    price: 599900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "800W",
        price: 599900,
        reference: "MK-RM800-01",
        specifications: [
          "Potencia: 800W",
          "Energía de impacto: 2.4 Joules",
          "Capacidad máxima: Concreto 24mm, Acero 13mm, Madera 32mm",
          "Velocidad: 0-1100 RPM",
          "Peso: 2.8 kg",
        ],
      },
      {
        id: 2,
        size: "1100W",
        price: 799900,
        reference: "MK-RM1100-02",
        specifications: [
          "Potencia: 1100W",
          "Energía de impacto: 3.2 Joules",
          "Capacidad máxima: Concreto 28mm, Acero 16mm, Madera 40mm",
          "Velocidad: 0-1300 RPM",
          "Peso: 3.2 kg",
        ],
      },
    ],
  },

  // Herramientas Manuales
  {
    id: "juego-destornilladores-stanley",
    categoryId: "herramientas-manuales",
    categoryName: "Herramientas Manuales",
    name: "Juego de Destornilladores Profesionales",
    brand: "Stanley",
    description:
      "Juego de destornilladores profesionales con puntas magnéticas y mangos ergonómicos para mayor comodidad y agarre.",
    price: 89900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "6 piezas",
        price: 89900,
        reference: "ST-JD6-01",
        specifications: [
          "Incluye: 4 destornilladores planos y 2 Phillips",
          "Puntas magnéticas",
          "Mangos ergonómicos bi-material",
          "Resistentes a impactos y químicos",
          "Estuche incluido",
        ],
      },
      {
        id: 2,
        size: "10 piezas",
        price: 129900,
        reference: "ST-JD10-02",
        specifications: [
          "Incluye: 5 destornilladores planos, 3 Phillips y 2 Torx",
          "Puntas magnéticas de alta resistencia",
          "Mangos ergonómicos bi-material con código de color",
          "Resistentes a impactos y químicos",
          "Estuche organizador incluido",
        ],
      },
      {
        id: 3,
        size: "15 piezas",
        price: 179900,
        reference: "ST-JD15-03",
        specifications: [
          "Incluye: 6 destornilladores planos, 4 Phillips, 3 Torx y 2 Pozidriv",
          "Puntas magnéticas de alta resistencia con tratamiento térmico",
          "Mangos ergonómicos tri-material con código de color",
          "Resistentes a impactos, químicos y temperaturas extremas",
          "Estuche organizador premium incluido",
        ],
      },
    ],
  },
  {
    id: "alicate-universal-truper",
    categoryId: "herramientas-manuales",
    categoryName: "Herramientas Manuales",
    name: "Alicate Universal Profesional",
    brand: "Truper",
    description:
      "Alicate universal forjado en acero al cromo vanadio con mangos antideslizantes, ideal para sujetar, cortar y doblar.",
    price: 39900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: '6"',
        price: 39900,
        reference: "TR-AU6-01",
        specifications: [
          'Longitud: 6" (152mm)',
          "Material: Acero al cromo vanadio",
          "Mangos recubiertos de PVC",
          "Capacidad de corte: Alambre blando hasta 2.5mm",
          "Peso: 230g",
        ],
      },
      {
        id: 2,
        size: '8"',
        price: 49900,
        reference: "TR-AU8-02",
        specifications: [
          'Longitud: 8" (203mm)',
          "Material: Acero al cromo vanadio",
          "Mangos recubiertos de PVC con agarre ergonómico",
          "Capacidad de corte: Alambre blando hasta 3mm, alambre duro hasta 1.8mm",
          "Peso: 310g",
        ],
      },
      {
        id: 3,
        size: '10"',
        price: 59900,
        reference: "TR-AU10-03",
        specifications: [
          'Longitud: 10" (254mm)',
          "Material: Acero al cromo vanadio con tratamiento térmico",
          "Mangos bi-material con agarre ergonómico",
          "Capacidad de corte: Alambre blando hasta 4mm, alambre duro hasta 2.5mm",
          "Peso: 420g",
        ],
      },
    ],
  },
  {
    id: "juego-llaves-combinadas-proto",
    categoryId: "herramientas-manuales",
    categoryName: "Herramientas Manuales",
    name: "Juego de Llaves Combinadas",
    brand: "Proto",
    description:
      "Juego de llaves combinadas fabricadas en acero al cromo vanadio con acabado cromado para mayor durabilidad y resistencia a la corrosión.",
    price: 199900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "8 piezas",
        price: 199900,
        reference: "PR-JLC8-01",
        specifications: [
          "Incluye: Llaves de 8, 10, 11, 12, 13, 14, 17 y 19mm",
          "Material: Acero al cromo vanadio",
          "Acabado: Cromado pulido",
          "Cabeza inclinada a 15°",
          "Estuche organizador incluido",
        ],
      },
      {
        id: 2,
        size: "12 piezas",
        price: 299900,
        reference: "PR-JLC12-02",
        specifications: [
          "Incluye: Llaves de 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 y 19mm",
          "Material: Acero al cromo vanadio con tratamiento térmico",
          "Acabado: Cromado pulido de alta resistencia",
          "Cabeza inclinada a 15° con perfil DynaGrip",
          "Estuche organizador rígido incluido",
        ],
      },
      {
        id: 3,
        size: "18 piezas",
        price: 399900,
        reference: "PR-JLC18-03",
        specifications: [
          "Incluye: Llaves de 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24 y 27mm",
          "Material: Acero al cromo vanadio con tratamiento térmico especial",
          "Acabado: Cromado pulido de alta resistencia con protección anticorrosión",
          "Cabeza inclinada a 15° con perfil DynaGrip y sistema anti-deslizamiento",
          "Estuche organizador rígido premium con cierre de seguridad",
        ],
      },
    ],
  },

  // Accesorios y Consumibles
  {
    id: "tornillos-drywall-hilti",
    categoryId: "accesorios-consumibles",
    categoryName: "Accesorios y Consumibles",
    name: "Tornillos para Drywall Punta Fina",
    brand: "Hilti",
    description:
      "Tornillos autoperforantes para drywall con punta fina, ideales para fijación en estructuras metálicas de bajo espesor.",
    price: 12900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: '1" (25mm)',
        price: 12900,
        reference: "HT-TPF1-01",
        specifications: [
          'Longitud: 1" (25mm)',
          "Diámetro: #6 (3.5mm)",
          "Cabeza: Phillips #2",
          "Acabado: Fosfatado negro",
          "Presentación: Caja de 100 unidades",
        ],
      },
      {
        id: 2,
        size: '1-5/8" (41mm)',
        price: 15900,
        reference: "HT-TPF158-02",
        specifications: [
          'Longitud: 1-5/8" (41mm)',
          "Diámetro: #6 (3.5mm)",
          "Cabeza: Phillips #2",
          "Acabado: Fosfatado negro",
          "Presentación: Caja de 100 unidades",
        ],
      },
      {
        id: 3,
        size: '2" (51mm)',
        price: 18900,
        reference: "HT-TPF2-03",
        specifications: [
          'Longitud: 2" (51mm)',
          "Diámetro: #6 (3.5mm)",
          "Cabeza: Phillips #2",
          "Acabado: Fosfatado negro",
          "Presentación: Caja de 100 unidades",
        ],
      },
    ],
  },
  {
    id: "chasos-plasticos-fischer",
    categoryId: "accesorios-consumibles",
    categoryName: "Accesorios y Consumibles",
    name: "Chasos Plásticos de Expansión",
    brand: "Fischer",
    description:
      "Chasos plásticos de expansión para fijaciones en materiales sólidos y huecos como concreto, ladrillo y drywall.",
    price: 9900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: "6mm",
        price: 9900,
        reference: "FC-CP6-01",
        specifications: [
          "Diámetro: 6mm",
          "Longitud: 30mm",
          "Para tornillos: 3.5-4mm",
          "Material: Nylon de alta resistencia",
          "Presentación: Bolsa de 50 unidades",
        ],
      },
      {
        id: 2,
        size: "8mm",
        price: 12900,
        reference: "FC-CP8-02",
        specifications: [
          "Diámetro: 8mm",
          "Longitud: 40mm",
          "Para tornillos: 4.5-5mm",
          "Material: Nylon de alta resistencia",
          "Presentación: Bolsa de 50 unidades",
        ],
      },
      {
        id: 3,
        size: "10mm",
        price: 15900,
        reference: "FC-CP10-03",
        specifications: [
          "Diámetro: 10mm",
          "Longitud: 50mm",
          "Para tornillos: 6-7mm",
          "Material: Nylon de alta resistencia con aletas anti-rotación",
          "Presentación: Bolsa de 25 unidades",
        ],
      },
    ],
  },
  {
    id: "clavos-acero-sika",
    categoryId: "accesorios-consumibles",
    categoryName: "Accesorios y Consumibles",
    name: "Clavos de Acero para Concreto",
    brand: "Sika",
    description:
      "Clavos de acero endurecido para fijación directa en concreto y mampostería, con cabeza plana para mayor superficie de contacto.",
    price: 19900,
    image: "/placeholder.svg?height=400&width=400",
    variants: [
      {
        id: 1,
        size: '1" (25mm)',
        price: 19900,
        reference: "SK-CAC1-01",
        specifications: [
          'Longitud: 1" (25mm)',
          "Diámetro: 2.5mm",
          "Material: Acero endurecido",
          "Acabado: Galvanizado",
          "Presentación: Caja de 100 unidades",
        ],
      },
      {
        id: 2,
        size: '1-1/2" (38mm)',
        price: 24900,
        reference: "SK-CAC112-02",
        specifications: [
          'Longitud: 1-1/2" (38mm)',
          "Diámetro: 3.0mm",
          "Material: Acero endurecido",
          "Acabado: Galvanizado",
          "Presentación: Caja de 100 unidades",
        ],
      },
      {
        id: 3,
        size: '2" (51mm)',
        price: 29900,
        reference: "SK-CAC2-03",
        specifications: [
          'Longitud: 2" (51mm)',
          "Diámetro: 3.5mm",
          "Material: Acero endurecido con tratamiento térmico",
          "Acabado: Galvanizado con protección anticorrosión",
          "Presentación: Caja de 100 unidades",
        ],
      },
    ],
  },
]

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
