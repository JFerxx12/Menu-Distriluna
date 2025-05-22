import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/products"

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { productId } = params
  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href={`/categorias/${product.categoryId}`} className="text-sm text-muted-foreground hover:underline">
          ← Volver a {product.categoryName}
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Badge variant="outline" className="w-fit">
            {product.brand}
          </Badge>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">Desde ${product.price.toLocaleString()}</p>
          <p className="text-muted-foreground">{product.description}</p>

          <div className="mt-4">
            <h2 className="mb-2 text-lg font-semibold">Variantes disponibles</h2>
            <Tabs defaultValue={product.variants[0].id.toString()}>
              <TabsList className="w-full justify-start">
                {product.variants.map((variant) => (
                  <TabsTrigger key={variant.id} value={variant.id.toString()}>
                    {variant.size}
                  </TabsTrigger>
                ))}
              </TabsList>
              {product.variants.map((variant) => (
                <TabsContent key={variant.id} value={variant.id.toString()} className="mt-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Tamaño:</span>
                          <span>{variant.size}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Precio:</span>
                          <span>${variant.price.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Referencia:</span>
                          <span>{variant.reference}</span>
                        </div>
                        <div className="mt-2">
                          <h3 className="mb-1 font-medium">Especificaciones:</h3>
                          <ul className="list-inside list-disc text-sm text-muted-foreground">
                            {variant.specifications.map((spec, index) => (
                              <li key={index}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                        <Button className="mt-2">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Añadir al carrito
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
