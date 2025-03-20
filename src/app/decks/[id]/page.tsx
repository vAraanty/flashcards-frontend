import { gql } from "@apollo/client";
import { getClient } from "@/lib/ApolloClient";
import Flashcard from "@/components/Flashcard";

const query = gql`
  query Deck($id: ID!) {
    deck(id: $id) {
      flashcards {
        id
        question
        answer
      }
    }
  }
`;

export default async function Home({ params }: { params: { id: string } }) {
  const { data } = await getClient().query({ query, variables: { id: params.id } });

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-8">Flashcards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {data.deck.flashcards.map((flashcard: { id: number; question: string; answer: string }) => (
          <Flashcard key={flashcard.id} question={flashcard.question} answer={flashcard.answer} />
        ))}
      </div>
    </div>
  );
}
