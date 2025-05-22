import Link from "next/link"
import { Drill, Home, WrenchIcon as Screwdriver, Search, Wrench } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function MobileNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar productos..." className="w-full rounded-lg bg-background pl-8" />
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="flex flex-col gap-2 p-2">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-600 dark:text-blue-400 transition-all hover:text-orange-500 dark:hover:text-orange-400"
            >
              <Home className="h-5 w-5" />
              <span>Inicio</span>
            </Link>
            <Link
              href="/categorias/equipos-electronicos"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-600 dark:text-blue-400 transition-all hover:text-orange-500 dark:hover:text-orange-400"
            >
              <Drill className="h-5 w-5" />
              <span>Equipos Electrónicos</span>
            </Link>
            <Link
              href="/categorias/herramientas-manuales"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-600 dark:text-blue-400 transition-all hover:text-orange-500 dark:hover:text-orange-400"
            >
              <Screwdriver className="h-5 w-5" />
              <span>Herramientas Manuales</span>
            </Link>
            <Link
              href="/categorias/accesorios-consumibles"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-blue-600 dark:text-blue-400 transition-all hover:text-orange-500 dark:hover:text-orange-400"
            >
              <Wrench className="h-5 w-5" />
              <span>Accesorios y Consumibles</span>
            </Link>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
