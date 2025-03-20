"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";

type FlashcardProps = {
  question: string;
  answer: string;
};

export default function Flashcard({ question, answer }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  return (
    <div 
      className="aspect-[3/2] w-full [perspective:1000px] cursor-pointer"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div
        className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${
          showAnswer ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Question Side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="w-full h-full rounded-xl 
            shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden
            border border-gray-800 hover:border-blue-500/50 group">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-center mb-2">{question}</h2>
            </CardContent>
            
            <CardFooter className="justify-center">
              <span className="text-gray-400 text-sm mt-4 group-hover:text-blue-400 transition-colors duration-300">
                Click to flip
              </span>
            </CardFooter>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
              from-blue-500 to-purple-500 transform transition-transform duration-300 
              group-hover:scale-x-100 scale-x-0" />
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full 
              transform translate-x-12 -translate-y-12 group-hover:translate-x-8 
              group-hover:-translate-y-8 transition-transform duration-700" />
          </Card>
        </div>

        {/* Answer Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="w-full h-full rounded-xl 
            shadow-lg p-6 flex flex-col items-center justify-center relative overflow-hidden
            border border-gray-800 hover:border-purple-500/50 group">
            <CardContent className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold text-center mb-2">{answer}</h2>
            </CardContent>
            
            <CardFooter className="justify-center">
              <span className="text-gray-400 text-sm mt-4 group-hover:text-blue-400 transition-colors duration-300">
                Click to flip back
              </span>
            </CardFooter>
            
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
              from-purple-500 to-blue-500 transform transition-transform duration-300 
              group-hover:scale-x-100 scale-x-0" />
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full 
              transform translate-x-12 -translate-y-12 group-hover:translate-x-8 
              group-hover:-translate-y-8 transition-transform duration-700" />
          </Card>
        </div>
      </div>
    </div>
  );
}
