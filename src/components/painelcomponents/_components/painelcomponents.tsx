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
      {/* Left Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col">
        <div className="flex items-center mb-6">
          <Layout className="mr-2" />
          <span className="font-semibold">Script</span>
        </div>
        <div className="relative mb-4">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <nav className="space-y-2 flex-1">
          <Button variant="ghost" className="w-full justify-start">
            <Layout className="mr-2 h-4 w-4" />
            AI Chat
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Templates
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Community
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Clock className="mr-2 h-4 w-4" />
            History
          </Button>
        </nav>
        <div className="mt-auto space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Help
          </Button>
          <div className="flex justify-between items-center">
            <span className="text-sm">Light</span>
            <Button variant="ghost" size="sm">
              <Sun className="h-4 w-4 mr-2" />
              <Moon className="h-4 w-4" />
            </Button>
            <span className="text-sm">Dark</span>
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

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Script</h1>
        <p className="text-muted-foreground mb-8">
          Get started by Script a task and Chat can do the rest. Not sure where to start?
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-yellow-600" />
              </div>
              <span>Write copy</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Layout className="h-6 w-6 text-blue-600" />
              </div>
              <span>Image generation</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <span>Create avatar</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <span>Write code</span>
              <PlusCircle className="ml-auto h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </div>
        <div className="relative">
          <Input placeholder="Summarize the latest" className="pr-20" />
          <Button size="sm" className="absolute right-1 top-1">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex mt-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm">
            <Paperclip className="h-4 w-4 mr-2" />
            Attach
          </Button>
          <Button variant="ghost" size="sm">
            <Mic className="h-4 w-4 mr-2" />
            Voice Message
          </Button>
          <Button variant="ghost" size="sm">
            <Layout className="h-4 w-4 mr-2" />
            Browse Prompts
          </Button>
          <span className="ml-auto">20 / 3,000</span>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Script may generate inaccurate information about people, places, or facts. Model: Script AI v1.3
        </p>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 border-l p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Projects (7)</h2>
          <Button variant="ghost" size="sm">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">New Project</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Learning From 100 Years of...</h3>
                <p className="text-sm text-muted-foreground">For athletes, high altitude prod...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Research officiants</h3>
                <p className="text-sm text-muted-foreground">Maxwell's equations—the foun...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">What does a senior lead de...</h3>
                <p className="text-sm text-muted-foreground">Physiological respiration involv...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Write a sweet note to your...</h3>
                <p className="text-sm text-muted-foreground">In the eighteenth century the G...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium">Meet with cake bakers</h3>
                <p className="text-sm text-muted-foreground">Physical space is often conceiv...</p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

