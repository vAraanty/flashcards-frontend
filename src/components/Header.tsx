"use client"; // Needed if the header includes interactivity (dropdowns, toggles, etc.)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#1a1f2e] border-b border-gray-800">
      <div className="container mx-auto px-4">
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
          </nav>
        </div>
      </div>
    </header>
  );
}
