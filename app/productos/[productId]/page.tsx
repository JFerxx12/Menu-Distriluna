"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById } from "@/lib/products"
import { useState } from "react"

interface ProductPageProps {
  params: Promise<{ productId: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  // Usar `use()` para resolver los parámetros
  const { productId } = use(params)

  const product = getProductById(productId)

  if (!product) {
    notFound()
  }

  const [selectedVariantId, setSelectedVariantId] = useState(product.variants[0].id)
  const selectedVariant = product.variants.find((v) => v.id === selectedVariantId)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          href={`/categorias/${product.categoryId}`}
          className="text-sm text-blue-600 dark:text-blue-400 hover:text-orange-500 dark:hover:text-orange-400 hover:underline"
        >
          ← Volver a {product.categoryName}
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={selectedVariant?.image || product.image || "/placeholder.svg"}
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
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{product.name}</h1>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="mt-4">
            <h2 className="mb-2 text-lg font-semibold text-blue-600 dark:text-blue-400">Variantes disponibles</h2>
            <Tabs value={selectedVariantId.toString()} onValueChange={(value) => setSelectedVariantId(Number(value))}>
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
                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md text-blue-600 dark:text-blue-400 text-sm">
                          Para consultar disponibilidad y precios, por favor contacte con nuestro equipo de ventas.
                        </div>
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
