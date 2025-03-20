"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "./ui/card";

type DeckProps = {
  name: string;
  deckId: string;
};

export default function Deck({ name, deckId }: DeckProps) {
  return (
    <Link href={`/decks/${deckId}`} className="block w-full">
      <Card className="transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group">
        <CardContent className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-2">{name}</h2>
        </CardContent>
        
        <CardFooter className="justify-center">
          <span className="text-gray-400 text-sm group-hover:text-blue-400 transition-colors duration-300">
            Click to view cards
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
