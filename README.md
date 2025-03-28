# Flashcards Frontend

> ⚠️ **Note**: This is a small learning project and not production-ready. It was created to gain hands-on experience with React, Next.js, Apollo Client, and GraphQL. While functional, it's meant for educational purposes and may contain bugs or areas for improvement.

A modern, responsive web application for creating and studying flashcards. Built with Next.js, TypeScript, and GraphQL.

## Features

- 🎨 Modern UI with dark/light mode support
- ⚡ Fast and responsive design
- 🔄 Real-time updates with GraphQL (🛠️ under development)
- 📱 Mobile-friendly interface
- 🎯 Interactive flashcard study sessions (🛠️ under development)
- 🔍 Search and filter functionality (🛠️ under development)
- 📊 Progress tracking (🛠️ under development)

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- A GraphQL backend server

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Update the following variables in `.env.local`:
   - `NEXT_PUBLIC_GRAPHQL_ENDPOINT`: Your GraphQL API endpoint

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
frontend/
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable UI components
│   ├── lib/          # Utility functions and configurations
│   └── types/        # TypeScript type definitions
├── public/           # Static assets
└── ...config files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL integration
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
