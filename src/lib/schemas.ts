import { z } from "zod";

export const deckFormSchema = z.object({
  name: z.string().min(1, "Deck name cannot be empty"),
});

export type DeckFormValues = z.infer<typeof deckFormSchema>; 

export const flashcardFormSchema = z.object({
  question: z.string().min(1, "Question cannot be empty"),
  answer: z.string().min(1, "Answer cannot be empty"),
});

export type FlashcardFormValues = z.infer<typeof flashcardFormSchema>; 
