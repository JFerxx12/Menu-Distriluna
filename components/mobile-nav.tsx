import Link from "next/link"
import { Drill, Home, Wrench, Hammer, Paintbrush, Plug, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function MobileNav() {
  return (
    <div className="flex h-full flex-col bg-white dark:bg-black">
      <div className="p-4 border-b border-muted">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar productos..."
            className="w-full rounded-lg bg-muted pl-10 py-2 text-sm"
          />
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-8rem)] px-4 pb-6">
        <nav className="flex flex-col gap-1">
          <NavLink href="/" icon={<Home />} text="Inicio" />
          <NavLink href="/categorias/materiales-construccion" icon={<Drill />} text="Materiales de Construcción" />
          <NavLink href="/categorias/herramientas-mano" icon={<Hammer />} text="Herramientas de Mano" />
          <NavLink href="/categorias/cerraderia" icon={<Wrench />} text="Cerrajería" />
          <NavLink href="/categorias/electrica" icon={<Plug />} text="Eléctrica" />
          <NavLink href="/categorias/pinturas-accesorios" icon={<Paintbrush />} text="Pinturas y Accesorios" />
          <NavLink href="/categorias/herramientas-electricas" icon={<Drill />} text="Herramientas Eléctricas" />
        </nav>
      </ScrollArea>
    </div>
  )
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
    >
      <div className="h-5 w-5 text-blue-600 dark:text-blue-400">{icon}</div>
      <span className="truncate">{text}</span>
    </Link>
  )
}
