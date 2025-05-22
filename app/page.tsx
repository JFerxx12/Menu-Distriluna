import Link from "next/link"
import { Drill, Wrench, WrenchIcon as Screwdriver } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const categories = [
    {
      id: "equipos-electronicos",
      title: "Equipos Electrónicos",
      description: "Taladros, sierras eléctricas y más",
      icon: <Drill className="h-8 w-8" />,
      color: "bg-blue-100 dark:bg-blue-900/40",
      textColor: "text-blue-600 dark:text-blue-300",
    },
    {
      id: "herramientas-manuales",
      title: "Herramientas Manuales",
      description: "Destornilladores, alicates y llaves",
      icon: <Screwdriver className="h-8 w-8" />,
      color: "bg-orange-100 dark:bg-orange-900/40",
      textColor: "text-orange-600 dark:text-orange-300",
    },
    {
      id: "accesorios-consumibles",
      title: "Accesorios y Consumibles",
      description: "Tornillos, chasos, clavos y boquillas",
      icon: <Wrench className="h-8 w-8" />,
      color: "bg-blue-50 dark:bg-blue-950/40",
      textColor: "text-blue-500 dark:text-blue-200",
    },
  ]

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
