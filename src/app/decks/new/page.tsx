"use client";

import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CREATE_DECK = gql`
  mutation CreateDeck($name: String!) {
    createDeck(input: { name: $name }) {
      deck {
        id
        name
      }
      errors
    }
  }
`;

export default function NewDeck() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  
  const [createDeck, { loading }] = useMutation(CREATE_DECK, {
    onCompleted: () => {
      router.push("/decks");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Deck name cannot be empty");
      return;
    }
    
    await createDeck({ variables: { name } });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-[#0a0a0a] border border-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-6">Create New Deck</h1>
        
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">
              Deck Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
              placeholder="Enter deck name"
            />
          </div>
          
          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating..." : "Create Deck"}
            </button>
            
            <Link
              href="/decks"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
