"use client"

import { Bell, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1 flex items-center max-w-md relative">
        <Search className="w-4 h-4 absolute left-3 text-sidebar-foreground/50" />
        <input 
          type="text" 
          placeholder="Search across AI models..." 
          className="w-full bg-background border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        />
      </div>
      
      <div className="flex items-center gap-4">
        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-sidebar-foreground/5 text-sidebar-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        )}
        
        <button className="p-2 rounded-full hover:bg-sidebar-foreground/5 text-sidebar-foreground transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer ring-2 ring-background">
          SH
        </div>
      </div>
    </header>
  );
}
