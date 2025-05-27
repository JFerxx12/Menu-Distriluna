import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProductsByCategory } from "@/lib/products"

interface CategoryPageProps {
  params: {
    categoryId: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params
  const { categoryId } = resolvedParams
  const { category, products } = getProductsByCategory(categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 hover:underline"
        >
          ← Volver a categorías
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-4xl">
          {category.title}
        </h1>
        <p className="mt-2 text-lg text-orange-600 dark:text-orange-400">{category.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} href={`/productos/${product.id}`} className="transition-transform hover:scale-105">
            <Card className="h-full overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">
                  {product.brand}
                </Badge>
                <CardTitle className="line-clamp-2 text-lg">{product.name}</CardTitle>
                <div className="mt-2 text-sm text-muted-foreground">
                  {product.variants.length} {product.variants.length === 1 ? "variante" : "variantes"}
                </div>
              </CardContent>
              <CardFooter className="bg-blue-50 dark:bg-blue-950/40 p-4">
                <div className="flex w-full items-center justify-between">
                  
                  <span className="text-sm text-orange-500 dark:text-orange-400">Ver detalles →</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
