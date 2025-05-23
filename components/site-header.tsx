import Link from "next/link"
import { Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { DistrilunaLogo } from "@/components/distriluna-logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center justify-between gap-4">
    
    {/* Logo con espacio fijo */}
    <div className="flex items-center min-w-[220px]">
      <Link href="/" className="flex items-center space-x-2 whitespace-nowrap">
        <DistrilunaLogo className="h-8 w-8" />
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
          DISTRI<span className="text-orange-500 dark:text-orange-400">LUNA</span>
        </span>
      </Link>
    </div>
    
    {/* Nav con flex-grow y flex-shrink */}
    <nav
      className="hidden md:flex gap-x-6 flex-grow flex-shrink overflow-x-auto max-w-[calc(100%-600px)] scrollbar-thin scrollbar-thumb-gray-400/40 scrollbar-track-transparent"
  style={{ minWidth: "200px" }}
    >
      <Link
        href="/categorias/materiales-construccion"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Materiales de Construcción
      </Link>
      <Link
        href="/categorias/herramientas-mano"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Herramientas de Mano
      </Link>
      <Link
        href="/categorias/cerraderia"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Cerrajería
      </Link>
      <Link
        href="/categorias/electrica"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Eléctrica
      </Link>
      <Link
        href="/categorias/pinturas-accesorios"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Pinturas y Accesorios
      </Link>
      <Link
        href="/categorias/herramientas-electricas"
        className="text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:text-orange-500 dark:hover:text-orange-400 whitespace-nowrap"
      >
        Herramientas Eléctricas
      </Link>
    </nav>
    
    {/* Buscador con ancho fijo */}
    <div className="flex items-center gap-2 min-w-[320px] max-w-[320px]">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar productos..."
          className="w-full rounded-lg bg-background pl-8"
        />
      </div>
      <ThemeToggle />
    </div>
    
  </div>
</header>

  )
}
