import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Distriluna. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
            Términos
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
            Privacidad
          </Link>
          <Link href="#" className="text-sm text-muted-foreground underline underline-offset-4">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
