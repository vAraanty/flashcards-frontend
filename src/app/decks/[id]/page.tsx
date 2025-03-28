import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";
import Flashcard from "@/components/Flashcard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const query = gql`
  query Deck($id: ID!) {
    deck(id: $id) {
      name
      flashcards {
        id
        question
        answer
      }
    }
  }
`;

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await getClient().query({ query, variables: { id } });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold">{data.deck.name}</h1>
        <Button asChild size="default">
          <Link href={`/decks/${id}/flashcards/new`}>Add flashcard</Link>
        </Button>
      </div>

      {data.deck.flashcards.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg w-full text-center">
          <h2 className="text-2xl font-semibold mb-2">No flashcards yet</h2>
          <p className="mb-4">Start by adding your first flashcard to this deck!</p>
          <Button asChild>
            <Link href={`/decks/${id}/flashcards/new`}>Create your first flashcard</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {data.deck.flashcards.map((flashcard: { id: number; question: string; answer: string }) => (
            <Flashcard key={flashcard.id} question={flashcard.question} answer={flashcard.answer} />
          ))}
        </div>
      )}
    </div>
  );
}
