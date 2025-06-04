"use client"

import Link from "next/link"
import { Drill, Wrench, Plug, Paintbrush, Hammer, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
      icon: <Paintbrush className="h-8 w-8" />,
      color: "bg-orange-100 dark:bg-orange-900/40",
      textColor: "text-orange-600 dark:text-orange-300",
    },
    {
      id: "electrica",
      title: "Eléctrica",
      description: "Cables, conectores y más",
      icon: <Plug className="h-8 w-8" />,
      color: "bg-blue-100 dark:bg-blue-900/40",
      textColor: "text-blue-600 dark:text-blue-300",
    },
    {
      id: "cerraderia",
      title: "Cerrajería",
      description: "Candados, bisagras y cadenas",
      icon: <Wrench className="h-8 w-8" />,
      color: "bg-orange-100 dark:bg-orange-900/40",
      textColor: "text-orange-600 dark:text-orange-300",
    },
    {
      id: "herramientas-electricas",
      title: "Herramientas Eléctricas",
      description: "Taladros, pulidoras y más",
      icon: <Drill className="h-8 w-8" />,
      color: "bg-blue-100 dark:bg-blue-900/40",
      textColor: "text-blue-600 dark:text-blue-300",
    },
    {
      id: "herramientas-mano",
      title: "Herramientas manuales",
      description: "Destornilladores, alicates y más",
      icon: <Hammer className="h-8 w-8" />,
      color: "bg-orange-100 dark:bg-orange-900/40",
      textColor: "text-orange-600 dark:text-orange-300",
    },
  ]

  const handleWhatsAppContact = () => {
    const phoneNumber = "3143028284"
    const message = "Hola, me interesa conocer más sobre los productos de Distriluna"
    const whatsappUrl = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-4xl md:text-5xl">
          Productos Distriluna
        </h1>
        <p className="mt-4 text-lg text-black dark:text-orange-400">
          Todo lo que necesitas para tus proyectos de construcción
        </p>
      </header>

      {/* Descripción de la empresa */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            En Distriluna comercializamos productos de calidad para brindar soluciones efectivas en el sector de la
            construcción, por ello definimos nuestra gestión empresarial como nuestro compromiso con la calidad y la
            seguridad y salud en el trabajo para satisfacer los requerimientos y expectativas de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="mb-12">
        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/40">
              <CardTitle className="text-blue-600 dark:text-blue-400 text-xl">Misión</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Comercializar productos de alta calidad para el sector de la construcción
                elaborados por la industria nacional e internacional, ofertando al mercado un
                mayor valor agregado, contando siempre con un equipo humano de colaboradores
                y distribuidores eficientes comprometidos con el desarrollo y crecimiento del sur de Colombia.

              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800">
            <CardHeader className="bg-orange-50 dark:bg-orange-950/40">
              <CardTitle className="text-orange-600 dark:text-orange-400 text-xl">Visión</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300">
               Ser una empresa lider en la innovacion, implementacion y distribucion de
               tecnologias, sistemas de informacion, productos y servicios del mercado
               de la construccion en el sur de Colombia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categorías de productos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Nuestras Categorías</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link key={category.id} href={`/categorias/${category.id}`} className="transition-transform">
              <Card className="h-full">
                <CardHeader className={`${category.color} ${category.textColor}`}>
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle className="text-base sm:text-lg break-words">{category.title}</CardTitle>
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
      </section>

      {/* Sección de contacto */}
      <section className="max-w-4xl mx-auto">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-blue-50 dark:bg-blue-950/40 text-center">
            <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Contáctanos</CardTitle>
            <CardDescription className="text-lg">
              Estamos aquí para ayudarte con tus proyectos de construcción
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600 dark:text-gray-400">314 302 8284</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium">Horarios de atención</p>
                    <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 7:30 AM - 5:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sábados: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600 dark:text-gray-400">Cra. 4 #9-46, Mocoa, Putumayo</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Escribir por WhatsApp
                </Button>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Respuesta inmediata durante horarios de atención
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
