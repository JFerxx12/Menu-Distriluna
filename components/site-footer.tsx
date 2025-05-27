import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-blue-200 dark:border-blue-800 py-6 md:py-0 bg-blue-50 dark:bg-blue-950/20">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-center text-sm leading-loose text-blue-600 dark:text-blue-400 md:text-left">
          © 2025 Equipo CodeStart. Equipo de desarrollo Web. sTodos los derechos reservados.
        </p>
        <div className="flex gap-4">
          <Link
            href="https://code-start-git-main-jhojanfer12-gmailcoms-projects.vercel.app/"
            className="text-sm text-orange-500 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300"
          >
            Términos
          </Link>
          <Link
            href="https://code-start-git-main-jhojanfer12-gmailcoms-projects.vercel.app/"
            className="text-sm text-orange-500 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300"
          >
            Privacidad
          </Link>
          <Link
            href="https://code-start-git-main-jhojanfer12-gmailcoms-projects.vercel.app/"
            className="text-sm text-orange-500 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
