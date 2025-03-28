import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";
import Deck from "@/components/Deck";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const query = gql`
  query GetDecks {
    decks {
      id
      name
    }
  }
`;

export default async function Page() {
  const { data } = await getClient().query({ query });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold">Your decks</h1>
        <Button asChild size="default">
          <Link href="/decks/new">Add deck</Link>
        </Button>
      </div>

      {data.decks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg w-full text-center">
          <h2 className="text-2xl font-semibold mb-2">No decks yet</h2>
          <p className="mb-4">Start by creating your first deck to begin studying!</p>
          <Button asChild>
            <Link href="/decks/new">Create your first deck</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {data.decks.map((deck: { id: number; name: string }) => (
            <Deck key={deck.id} name={deck.name} deckId={String(deck.id)} />
          ))}
        </div>
      )}
    </div>
  );
}
