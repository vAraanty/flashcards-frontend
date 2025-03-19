"use client";

import { useState } from "react";
import Card from "./Card";

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
          <Card hoverColor="blue">
            <h2 className="text-2xl font-bold text-white text-center mb-2">{question}</h2>
            
            <span className="text-gray-400 text-sm mt-4 group-hover:text-blue-400 transition-colors duration-300">
              Click to flip
            </span>
          </Card>
        </div>

        {/* Answer Side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card hoverColor="purple">
            <h2 className="text-2xl font-bold text-white text-center mb-2">{answer}</h2>
            
            <span className="text-gray-400 text-sm mt-4 group-hover:text-blue-400 transition-colors duration-300">
              Click to flip back
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}
