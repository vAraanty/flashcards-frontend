declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
} 
