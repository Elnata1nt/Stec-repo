import * as React from "react"
import { Search, Layout, FileText, Users, Clock, Settings, HelpCircle, Sun, Moon, PlusCircle, Send, Paperclip, Mic } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ScriptInterface() {
  return (
    <div className="flex h-screen bg-background">
      {/* Barra Lateral Esquerda */}
      <div className="w-64 border-r p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <Layout className="mr-2" />
          <span className="font-semibold">Script</span>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Pesquisar" className="pl-8" />
        </div>
        <nav className="space-y-2 flex-1">
          <Button variant="ghost" className="w-full justify-start">
            <Layout className="mr-2 h-4 w-4" />
            Chat AI
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Projetos
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Modelos
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Documentos
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Comunidade
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-2 h-4 w-4" />
            Histórico
          </Button>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Ajuda
          </Button>
          <div className="flex justify-between items-center">
            <span className="text-sm">Claro</span>
            <Button variant="ghost" size="sm">
              <Sun className="h-4 w-4 mr-2" />
              <Moon className="h-4 w-4" />
            </Button>
            <span className="text-sm">Escuro</span>
          </div>
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Emilia Caitlin</span>
              <span className="text-xs text-muted-foreground">hey@unispace.agency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Script</h1>
        <p className="text-muted-foreground mb-8">
          Comece criando uma tarefa e o Chat pode fazer o resto. Não sabe por onde começar?
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <span>Escrever cópia</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <span>Geração de imagem</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span>Criar avatar</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <span>Escrever código</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>
        <div className="relative">
          <Input placeholder="Resumir o mais recente" className="pr-20" />
          <Button size="sm" className="absolute right-1 top-1">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex mt-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4 mr-2" />
            Anexar
          </Button>
          <Button variant="ghost" size="sm">
            <Mic className="h-4 w-4 mr-2" />
            Mensagem de voz
          </Button>
          <Button variant="ghost" size="sm">
            <Layout className="h-4 w-4 mr-2" />
            Navegar por sugestões
          </Button>
          <span className="ml-auto">20 / 3.000</span>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          O Script pode gerar informações imprecisas sobre pessoas, lugares ou fatos. Modelo: Script AI v1.3
        </p>
      </div>

      {/* Barra Lateral Direita */}
      <div className="w-64 border-l p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Projetos (7)</h2>
          <Button variant="ghost" size="sm">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Novo Projeto</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Aprendendo com 100 Anos de...</h3>
                <p className="text-sm text-muted-foreground">Para atletas, produção em alta altitude...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Pesquisar officiants</h3>
                <p className="text-sm text-muted-foreground">Equações de Maxwell—os fundamentos...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">O que faz um desenvolvedor sênior...</h3>
                <p className="text-sm text-muted-foreground">A respiração fisiológica envolve...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Escrever uma nota doce para seu...</h3>
                <p className="text-sm text-muted-foreground">No século dezoito, o G...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Escrita AI, projeto simples e...</h3>
                <p className="text-sm text-muted-foreground">A terapia ocupacional é um campo...</p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
