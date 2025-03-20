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

export default async function Home() {
  const { data } = await getClient().query({ query });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center w-full mb-8">
        <h1 className="text-4xl font-bold">Your decks</h1>
        <Button asChild variant="outline" size="default">
          <Link href="/decks/new">Add deck</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {data.decks.map((deck: { id: number; name: string }) => (
          <Deck key={deck.id} name={deck.name} deckId={String(deck.id)} />
        ))}
      </div>
    </div>
  );
}
