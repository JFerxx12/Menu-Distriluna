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
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-700 dark:text-blue-300",
    },
    {
      id: "herramientas-manuales",
      title: "Herramientas Manuales",
      description: "Destornilladores, alicates y llaves",
      icon: <Screwdriver className="h-8 w-8" />,
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-700 dark:text-green-300",
    },
    {
      id: "accesorios-consumibles",
      title: "Accesorios y Consumibles",
      description: "Tornillos, chasos, clavos y boquillas",
      icon: <Wrench className="h-8 w-8" />,
      color: "bg-amber-100 dark:bg-amber-900",
      textColor: "text-amber-700 dark:text-amber-300",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Productos Distriluna</h1>
        <p className="mt-4 text-lg text-muted-foreground">Todo lo que necesitas para tus proyectos de construcción</p>
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
              <CardFooter className="bg-muted/50 p-4">
                <span className="text-sm font-medium">Ver productos →</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
