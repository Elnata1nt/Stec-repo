import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { JSX, SVGProps } from "react";
import Image from "next/image";

export default function Header() {
  
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 relative"> {/* Adicione 'relative' aqui */}
      <Link
        href="/"
        className="mr-6 hidden lg:flex items-center space-x-2"
        prefetch={false}
      >
        <Image src="/Stec.png" alt="STEC" width={100} height={100} />
      </Link>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Inicio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-black">Serviços</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="/advia"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      Advia
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Advia auxilia os estudantes do direito a despertarem seu
                      potencial máximo com I.A
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/painelchat"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      Painel
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Advia auxilia os estudantes a despertarem seu
                      potencial máximo com I.A
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/merlin"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      Merlin
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Com o Merlin você pode automatizar suporte e atendimento
                      empresarial com controle ponta-a-ponta.
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/painelchat"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      ChatBot
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Desenvolvemos seu chatbot sob medida para automatizar seu
                      negocio.
                    </div>
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/plans"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Planos
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Contato
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <Image src="/Stec.png" alt="STEC" width={100} height={100} />
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Inicio
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Serviços{" "}
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6">
                  <Link
                    href="/advia"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      Advia
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Advia auxilia os estudantes do direito a despertarem seu
                      potencial máximo com I.A
                    </div>
                  </Link>
                  <Link
                    href="/merlin"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      Merlin
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Com o Merlin você pode automatizar suporte e atendimento
                      empresarial com controle ponta-a-ponta.
                    </div>
                  </Link>
                  <Link
                    href="assistance"
                    className="group grid h-auto w-full justify-start gap-1"
                    prefetch={false}
                  >
                    <div className="text-sm font-black leading-none group-hover:underline">
                      ChatBot
                    </div>
                    <div className="line-clamp-2 font-medium text-sm leading-snug text-muted-foreground">
                      Desenvolvemos seu chatbot sob medida para automatizar seu
                      negocio.
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="/plans"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Planos
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contato
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <div className="ml-auto">
        <Link href="/login">
          <Button className="font-black">Login</Button>
        </Link>
      </div>

      {/* Adicione a div aqui */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6h18M3 12h18m-7 6h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
