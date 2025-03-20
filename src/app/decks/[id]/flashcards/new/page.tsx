"use client";

import { FlashcardForm } from "@/components/FlashcardForm";

export default function NewFlashcard() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="border border-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Create new flashcard</h1>
        <FlashcardForm />
      </div>
    </div>
  );
}
