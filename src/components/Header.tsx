"use client"; // Needed if the header includes interactivity (dropdowns, toggles, etc.)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-500">
              Flashcards
            </span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/") 
                  ? "text-blue-400" 
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              Home
            </Link>

            <Link 
              href="/decks" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/decks") 
                  ? "text-blue-400" 
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              Decks
            </Link>

            <Link 
              href="/about" 
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/about") 
                  ? "text-blue-400" 
                  : "text-gray-400 hover:text-blue-400"
              }`}
            >
              About
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
