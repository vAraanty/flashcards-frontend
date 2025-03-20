"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { deckFormSchema, type DeckFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";

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

interface DeckFormProps {
  onSuccess?: () => void;
}

export function DeckForm({ onSuccess }: DeckFormProps) {
  const router = useRouter();
  
  const form = useForm<DeckFormValues>({
    resolver: zodResolver(deckFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const [createDeck, { loading }] = useMutation(CREATE_DECK, {
    onCompleted: () => {
      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/decks");
      }
    },
    onError: (error) => {
      form.setError("root", { message: error.message });
    },
  });

  const onSubmit = async (values: DeckFormValues) => {
    await createDeck({ variables: { name: values.name } });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {form.formState.errors.root && (
          <div className="p-3 rounded mb-4">
            {form.formState.errors.root.message}
          </div>
        )}
        
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deck name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter deck name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="flex space-x-4">
          <Button
            type="submit"
            disabled={loading}
            variant="default"
          >
            {loading ? "Creating..." : "Create deck"}
          </Button>
          
          <Button
            variant="outline"
            asChild
          >
            <Link href="/decks">
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
} 
