import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";
import Deck from "@/components/Deck";

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
      <h1 className="text-4xl font-bold text-white mb-8">Your Decks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {data.decks.map((deck: { id: number; name: string }) => (
          <Deck key={deck.id} name={deck.name} deckId={deck.id} />
        ))}
      </div>
    </div>
  );
}
