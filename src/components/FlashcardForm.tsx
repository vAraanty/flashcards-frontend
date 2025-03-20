"use client";

import { gql, useMutation } from "@apollo/client";
import { useRouter, useParams } from "next/navigation";
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
import { Textarea } from "@/components/ui/textarea";
import { flashcardFormSchema, type FlashcardFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";

const CREATE_FLASHCARD = gql`
  mutation CreateFlashcard($deckId: ID!, $question: String!, $answer: String!) {
    createFlashcard(input: { deckId: $deckId, question: $question, answer: $answer }) {
      flashcard {
        id
        question
        answer
      }
      errors
    }
  }
`;

interface FlashcardFormProps {
  onSuccess?: () => void;
}

export function FlashcardForm({ onSuccess }: FlashcardFormProps) {
  const router = useRouter();
  const params = useParams();
  const deckId = params.id as string;
  
  const form = useForm<FlashcardFormValues>({
    resolver: zodResolver(flashcardFormSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const [createFlashcard, { loading }] = useMutation(CREATE_FLASHCARD, {
    onCompleted: () => {
      if (onSuccess) {
        onSuccess();
      } else {
        router.push(`/decks/${deckId}`);
      }
    },
    onError: (error) => {
      form.setError("root", { message: error.message });
    },
  });

  const onSubmit = async (values: FlashcardFormValues) => {
    await createFlashcard({ 
      variables: { 
        deckId, 
        question: values.question, 
        answer: values.answer 
      } 
    });
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
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter the question"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Answer</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter the answer"
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
            {loading ? "Creating..." : "Create flashcard"}
          </Button>
          
          <Button
            variant="outline"
            asChild
          >
            <Link href={`/decks/${deckId}`}>
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
} 
