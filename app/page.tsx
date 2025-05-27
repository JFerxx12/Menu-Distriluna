import Link from "next/link"
import { Drill, Wrench, Plug, Paintbrush, Hammer } from "lucide-react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const categories = [
  {
    id: "materiales-construccion",
    title: "Materiales de Construcción",
    description: "Cemento, varillas, perfiles y más",
    icon: <Drill className="h-8 w-8" />,
    color: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-600 dark:text-blue-300",
  },
  {
    id: "pinturas-accesorios",
    title: "Pinturas y Accesorios",
    description: "Pinturas, brochas y rodillos",
    icon: <Paintbrush className="h-8 w-8" />,  // mejor un pincel para pinturas
    color: "bg-orange-100 dark:bg-orange-900/40",
    textColor: "text-orange-600 dark:text-orange-300",
  },
  {
    id: "electrica",
    title: "Eléctrica",
    description: "Cables, conectores y más",
    icon: <Plug className="h-8 w-8" />,  // icono enchufe o similar para eléctrica
    color: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-600 dark:text-blue-300",
  },
  {
    id: "cerraderia",
    title: "Cerrajería",
    description: "Candados, bisagras y cadenas",
    icon: <Wrench className="h-8 w-8" />,  // aquí sí un wrench para llaves y cerrajería
    color: "bg-orange-100 dark:bg-orange-900/40",
    textColor: "text-orange-600 dark:text-orange-300",
  },
  {
    id: "herramientas-electricas",
    title: "Herramientas Eléctricas",
    description: "Taladros, pulidoras y más",
    icon: <Drill className="h-8 w-8" />,  // perfecto usar drill aquí
    color: "bg-blue-100 dark:bg-blue-900/40",
    textColor: "text-blue-600 dark:text-blue-300",
  },
  {
    id: "herramientas-mano",
    title: "Herramientas de Mano",
    description: "Destornilladores, alicates y más",
    icon: <Hammer className="h-8 w-8" />,
    color: "bg-orange-100 dark:bg-orange-900/40",
    textColor: "text-orange-600 dark:text-orange-300",
  },
];

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-4xl md:text-5xl">
          Productos Distriluna
        </h1>
        <p className="mt-4 text-lg text-black dark:text-orange-400">
          Todo lo que necesitas para tus proyectos de construcción
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/categorias/${category.id}`} className="transition-transform hover:scale-105">
            <Card className="h-full overflow-hidden">
              <CardHeader className={`${category.color} ${category.textColor}`}>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-base">{category.description}</CardDescription>
              </CardContent>
              <CardFooter className="bg-blue-50 dark:bg-blue-950/40 p-4">
                <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Ver productos →</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
