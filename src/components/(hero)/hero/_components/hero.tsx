import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Image
          src="/Stec2.png"
          alt="Página não encontrada"
          width="300"
          height="300"
          className="mx-auto"
          style={{ aspectRatio: "300/300", objectFit: "cover" }}
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Página ainda não desenvolvida
        </h1>
        <p className="mt-4 text-muted-foreground">
          Volte em outro momento para conferir se a página já está disponível.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  )
}