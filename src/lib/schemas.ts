import { z } from "zod";

export const deckFormSchema = z.object({
  name: z.string().min(1, "Deck name cannot be empty"),
});

export type DeckFormValues = z.infer<typeof deckFormSchema>; 
