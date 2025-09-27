import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TriangleAlert, Home, BookOpen, Gamepad2, Bell, Wrench, BarChart3, Settings } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-destructive rounded-lg flex items-center justify-center">
                <TriangleAlert className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">DisasterReady</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link 
                to="/learn" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/learn') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Learn</span>
              </Link>
              <Link 
                to="/games" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/games') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Games</span>
              </Link>
              <Link 
                to="/drill" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/drill') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>Drill</span>
              </Link>
              <Link 
                to="/alerts" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/alerts') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>Alerts</span>
              </Link>
              <Link 
                to="/toolkit" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/toolkit') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>Toolkit</span>
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isActive('/dashboard') ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            </nav>
            
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}