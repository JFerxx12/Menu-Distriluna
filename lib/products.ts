export interface ProductVariant {
  id: number
  size: string
  price: number
  reference: string
  specifications: string[]
  image: string
}

export interface Product {
  id: string
  categoryId: string
  categoryName: string
  name: string
  brand: string
  description: string
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
    title: "Herramientas manuales",
    description: "Destornilladores, alicates y más",
  },
]

const products: Product[] = [
  {
    id: "pincel-redondo-no4",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pincel Redondo ",
    brand: "",
    description: "Pinceles pequeños con punta redondeada, ideal para detalles finos en pintura.",
    image: "/images/pinceles.png",
    variants: [
      {
        id: 1,
        size: "No 4",
        price: 699.17,
        reference: "Cod-00017",
        specifications: [
          "Tamaño pequeño",
          "Ideal para detalles finos",
        ],
        image: "/images/pincel2.png",
      },
      {
        id: 2,
        size: "No 6",
        price: 807.58,
        reference: "Cod-00018",
        specifications: [
          
          "Tamaño medio",
          "Trazos amplios con precisión",
          
        ],
        image: "/images/pinceles.png",
      },
    ],
  },
  
  {
    id: "cable-cobre-duplex-2x12-300v-blanco-centelsa",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cable Cobre Duplex BLANCO CENTELSA",
    brand: "CENTELSA",
    description: "Cables con dos conductores de cobre aislados, usado para instalaciones eléctricas domésticas.",
    image: "/images/CABLE-DUPLEX.png",
    variants: [
      {
        id: 1,
        size: " 2x12 300v",
        price: 4307,
        reference: "Cod-00-2212",
        specifications: [
          "Dos conductores de cobre",
          "Tensión: 300v",
          "Color blanco",
        ],
        image: "/images/CABLE-DUPLEX.png",

      },
      {
        id: 2,
        size: " 2x14 150v",
        price: 2564,
        reference: "Cod-00-2214",
        specifications: [
          "Dos conductores de cobre",
          "Tensión: 150v",
          "Color blanco",
        ],
        image: "/images/CABLE2.png",
      },
    ],
  },
  
  {
    id: "cemento-gris-cemex-50kg",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Cemento Gris de uso General",
    brand: "CEMEX-HOLCIM",
    description: "Mezcla en polvo de uso general, para obras civiles, mampostería y concreto.",
    image: "/images/cemen-cemex.png",
    variants: [
      {
        id: 1,
        size: "CEMEX-Bolsa 50kg",
        price: 24926,
        reference: "Cod-101",
        specifications: [
          "Peso: 50 kg",
          "Uso general",
          "Ideal para obras civiles y mampostería",
        ],
        image: "/images/cemen-cemex.png",
      },
      {
        id: 2,
        size: "HOLCIM-Bolsa 50kg",
        price: 27718,
        reference: "Cod-106",
        specifications: [
          "Peso: 50 kg",
          "Alta resistencia",
          "Uso en estructuras y obra gris",
        ],
        image: "/images/cemen-holcim.png",
      },
    ],
  },
 
  {
    id: "varilla-grafilada-6mm-x6ml",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Varilla Grafilada",
    brand: "Varilla Grafilada",
    description: "Barra de acero corrugado de gran espesor, para refuerzo de concreto.",
    image: "/images/varillas.png",
    variants: [
      {
        id: 1,
        size: "6.0mm x 6ml",
        price: 5044,
        reference: "VARILLA-6MM-6ML",
        specifications: [
          "Peso: 1.33 kg",
          "Acero corrugado grueso",
          "Refuerzo para concreto",
        ],
        image: "/images/VARILLA2.png",
      },
      {
        id: 2,
        size: "4.0mm x 6ml",
        price: 2331,
        reference: "VARILLA-4MM-6ML",
        specifications: [
          "Peso: 0.59 kg",
          "Acero corrugado delgado",
          "Uso en refuerzos secundarios",
        ],
        image: "/images/varillas.png",
      },
    ],
  },
  
  {
    id: "destornillador-punta-phillips-5-16x6-thorsen",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Destornillador Punta Phillips",
    brand: "THORSEN-STANLEY",
    description: "Herramienta de precisión para tornillos con cabeza en cruz, de tamaño mediano.",
    image: "/images/Destor-THORSEN.png",
    variants: [
      {
        id: 1,
        size: "THORSEN",
        price: 5714,
        reference: "Cod-220119",
        specifications: [
          "Punta Phillips",
          "Tamaño mediano",
          "Marca THORSEN",
        ],
        image: "/images/Destor-THORSEN.png",
    
      },
       {
        id: 2,
        size: "STANLEY",
        price: 7228,
        reference: "Cod-69148",
        specifications: [
          "Punta Phillips",
          "Uso profesional",
          "Marca STANLEY",
        ],
        image: "/images/Destor-stanley.png",
    
      },
    ],
  },
  
  {
    id: "pintura-acrilica-azul-cn-fachada-sapolin",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Pintura Acrílica C Fachada SAPOLIN",
    brand: "SAPOLIN",
    description: "Pintura exterior resistente al clima, color azul y rojo, base acrílica.",
    image: "/images/PINROJA.png",
    variants: [
      {
        id: 1,
        size: "Acrilico azul",
        price: 259344,
        reference: "Cod-34005A58",
        specifications: [
          "Color azul",
          "Base acrílica",
          "Resistente al clima",
          "Para fachadas",
        ],
        image: "/images/PINAZUL.png",
      },
      {
        id: 2,
        size: "Acrilico rojo",
        price: 229287,
        reference: "Cod-34004A58",
        specifications: [
          "Color rojo",
          "Base acrílica",
          "Resistente al clima",
          "Para fachadas",
        ],
        image: "/images/PINROJA.png",
      },
    ],
  },
 
  {
    id: "vinilo-t2-blanco-cn-capri-sapolin",
    categoryId: "pinturas-accesorios",
    categoryName: "Pinturas y Accesorios",
    name: "Vinilo T2 CÑ Capri SAPOLIN",
    brand: "SAPOLIN",
    description: "Pintura vinílica para interiores, acabado mate, buena cobertura.",
    
    image: "/images/Vinilo Blanco h.png",
    variants: [
      {
        id: 1,
        size: "VINILO BLANCO",
        price: 138065,
        reference: "Cod-34010C58",
        specifications: [
          "Color blanco",
          "Acabado mate",
          "Para interiores",
        ],
        image: "/images/Vinilo Blanco.png",
      },
       {
        id: 2,
        size: "VINILO BLANCO HUESO",
        price: 140272,
        reference: "Cod-34013C58",
        specifications: [
          "Color blanco hueso",
          "Acabado mate",
          "Para muros interiores",
        ],
        image: "/images/Vinilo Blanco h.png",
      },
    ],
  },
  
  {
    id: "bisagra-omega-2x2-16mm-zinca-pl",
    categoryId: "cerraderia",
    categoryName: "Cerrajería",
    name: "Bisagra Omega Zincada PL - Dorad PL",
    brand: "",
    description: "Bisagra para puertas pequeñas o muebles, acabado zincado.",
    image: "/images/visadora.png",
    variants: [
      {
        id: 1,
        size: "Zinca PL 2x2",
        price: 802,
        reference: "Cod-52580M0005",
        specifications: [
          "Acabado zincado",
          "Para puertas pequeñas",
          "Uso en muebles",
        ],
        image: "/images/Bisagra-Omega.png",
      },
       {
        id: 2,
        size: " Dorad PL 2x3",
        price: 890,
        reference: "Cod-52580M0006",
        specifications: [
          "Acabado zincado",
          "Para puertas medianas",
          "Uso en muebles y puertas",
        ],
        image: "/images/visadora.png",
      },
    ],
  },
   {
    id: "alicates-diablo",
    categoryId: "herramientas-mano",
    categoryName: "Herramientas de Mano",
    name: "Alicates Diablo",
    brand: "",
    description: "Alicates de corte tipo diablo, ideales para cortes gruesos y trabajos exigentes.",
    image: "/images/diablo.png",
    variants: [
      {
        id: 1,
        size: 'STANLEY 10"',
        price: 31746,
        reference: "Cod-84-221",
        specifications: [
          "Marca: STANLEY",
          "Fuerte y resistente",
          "Uso profesional",
        ],
        image: "/images/stanley.png",
      },
      {
        id: 2,
        size: 'HERRAGRO 10.5"',
        price: 20328,
        reference: "Cod-T1312450010",
        specifications: [
          "Marca: HERRAGRO",
          "Versión nacional",
          "Corte grueso",
        ],
        image: "/images/diablo.png",
      },
    ],
  },
  {
    id: "pulidoras-4-1-2",
    categoryId: "herramientas-electricas",
    categoryName: "Herramientas Eléctricas",
    name: "Pulidoras 4.1/2”",
    brand: "",
    description: "Pulidoras compactas y potentes para uso profesional o doméstico.",
    image: "/images/SIEFKEN.png",
    variants: [
      {
        id: 1,
        size: "DeWALT 900W",
        price: 297000,
        reference: "Cod-DWE4120",
        specifications: [
          "Marca: DeWALT",
          "12000 rpm",
          "Gatillo profesional",
        ],
        image: "/images/DeWALT.png",
      },
      {
        id: 2,
        size: "SIEFKEN 1000W",
        price: 302622,
        reference: "Cod-GD1020",
        specifications: [
          "Marca: SIEFKEN",
          "11000 rpm",
          "Uso profesional o doméstico",
        ],
        image: "/images/SIEFKEN.png",
      },
    ],
  },
  {
    id: "taladros-inalambricos-percutores",
    categoryId: "herramientas-electricas",
    categoryName: "Herramientas Eléctricas",
    name: "Taladros Inalámbricos Percutores",
    brand: "",
    description: "Taladros recargables con función de impacto, ideales para trabajos generales y profesionales.",
    image: "/images/TALADRO ELITE.png",
    variants: [
      {
        id: 1,
        size: "FURIUS 21V",
        price: 215706,
        reference: "Cod-FCD21",
        specifications: [
          "Marca: FURIUS",
          "Taladro sin cable",
          "Función percutora",
        ],
        image: "/images/TALADRO furius.png",
      },
      {
        id: 2,
        size: "2BAT 20V ",
        price: 347829,
        reference: "Cod-XID20",
        specifications: [
          "Marca: ELITE",
          "Incluye 2 baterías",
          "Uso profesional",
        ],
        image: "/images/TALADRO ELITE.png",
      },
    ],
  },
  {
    id: "candados-combinacion",
    categoryId: "cerraderia",
    categoryName: "Cerrajería",
    name: "Candados de Combinación",
    brand: "",
    description: "Candados con clave numérica, ideales para seguridad en maletas, cajas o lockers.",
    image: "/images/CANDADO-gato.png",
    variants: [
      {
        id: 1,
        size: "TSA Maletero",
        price: 19626,
        reference: "Cod-ML4680DBLK",
        specifications: [
          "Marca: TC",
          "Homologado TSA",
          "Ideal para viajes",
        ],
        image: "/images/CANDADO-MALETERO.png",
      },
      {
        id: 2,
        size: "GATO 20mm",
        price: 13468,
        reference: "Cod-ML646T",
        specifications: [
          "Marca: GATO",
          "Pequeño y compacto",
          "Ideal para lockers",
        ],
        image: "/images/CANDADO-gato.png",
      },
    ],
  },
  {
    id: "cables-cadenas-acero",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Cables de Acero",
    brand: "",
    description: "Elementos de sujeción metálica, resistentes y flexibles, para múltiples usos.",
    image: "/images/Cable-Acero.png",
    variants: [
      {
        id: 1,
        size: "Cable Acero 1/8” Rollo 500m",
        price: 908,
        reference: "Cod-40750",
        specifications: [
          "Trenzado flexible",
          "6x7 hilos",
          "Uso estructural y sujeción",
        ],
         image: "/images/Cable-Acero.png",
      },
      
    ],
  },
  {
   id: "cadenas-acero",
    categoryId: "materiales-construccion",
    categoryName: "Materiales de Construcción",
    name: "Cadenas de Acero",
    brand: "",
    description: "Elementos de sujeción metálica, resistentes y flexibles, para múltiples usos.",
    image: "/images/CADENA ESLABONADA.png", 
    variants : [
      {
        id: 2,
        size: "Cadena Eslabonada 1/4 Galvanizada",
        price: 7904,
        reference: "Cod-426-700",
        specifications: [
          "Anticorrosiva",
          "Ideal para amarres y cierres",
        ],
        image: "/images/CADENA ESLABONADA.png", 
      },
    ],
  },
  {
    id: "cable-cobre-duplex-2x10",
    categoryId: "electrica",
    categoryName: "Eléctrica",
    name: "Cable Cobre Duplex 2x10",
    brand: "CENTELSA",
    description: "Cable de cobre de mayor calibre, apto para líneas de alimentación de mayor carga.",
    image: "/images/cable.png",
    variants: [
      {
        id: 1,
        size: "2x10",
        price: 6114,
        reference: "Cod-EEC-D-020",
        specifications: [
          "Cobre de alta capacidad",
          "Ideal para cargas pesadas",
        ],
        image: "/images/cable.png",
      },
    ],
  },
  {
  id: "tubos-estructurales",
  categoryId: "materiales-construccion",
  categoryName: "Materiales Estructurales",
  name: "Tubos Estructurales",
  brand: "",
  description: "Tubería de acero para estructuras metálicas, disponible en diferentes formas y acabados.",
  image: "/images/tubo cr.png",
  variants: [
    {
      id: 1,
      size: "100x100",
      price: 203730,
      reference: "Cod-106317",
      specifications: [
        "Tubo cuadrado en acero",
        "Usado en estructuras pesadas",
        "Resistente y versátil",
        "Espesor: 3 mm",
        "Largo: 6 metros",
      ],
      image: "/images/tuboacero2.png",
    },
    {
      id: 2,
      size: "38x76 CR",
      price: 60230,
      reference: "Cod-501980",
      specifications: [
        "Tubo rectangular laminado en frío",
        "Preciso y con buen acabado",
        "Espesor: 1.5 mm",
        "Largo: 6 metros",
      ],
      image: "/images/tubo cr.png",
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
