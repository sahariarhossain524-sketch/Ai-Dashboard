"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, BarChart3, Settings, BrainCircuit } from "lucide-react";
import clsx from "clsx";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar hidden md:flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <BrainCircuit className="w-6 h-6" />
          <span>AI-Dash</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link href="/" className={clsx("flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors", pathname === "/" ? "bg-primary/10 text-primary" : "text-sidebar-foreground hover:bg-sidebar-foreground/5 hover:text-foreground")}>
          <LayoutDashboard className="w-5 h-5" />
          <span>Overview</span>
        </Link>
        <Link href="/analytics" className={clsx("flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors", pathname === "/analytics" ? "bg-primary/10 text-primary" : "text-sidebar-foreground hover:bg-sidebar-foreground/5 hover:text-foreground")}>
          <BarChart3 className="w-5 h-5" />
          <span>Analytics</span>
        </Link>
        <Link href="/customers" className={clsx("flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors", pathname === "/customers" ? "bg-primary/10 text-primary" : "text-sidebar-foreground hover:bg-sidebar-foreground/5 hover:text-foreground")}>
          <Users className="w-5 h-5" />
          <span>Customers</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-foreground/5 hover:text-foreground transition-colors">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
}
