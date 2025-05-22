import Image from "next/image"

export function DistrilunaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/distri.png"
      alt="Logo Distriluna"
      width={32}
      height={32}
      className={className}
      priority
    />
  )
}
