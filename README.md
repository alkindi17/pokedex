# Pokédex

Visit at: https://pokedex.alialkindi.dev

This is a React application built with Next.js. It displays all Pokémon and their details, with the ability to search and filter the list of pokemons, and more.

## Project Overview

#### Features:

- Stunning responsive UI.
- Mobile Screen friendly.
- Browse full list of pokémons seamlessly.
- View detailed pokemons details.
- Search and filter pokemons.
- Add pokemons to favourites.
- Random pokemon getter.
- View your recently viewed pokemons.
- Secure Login with Google Authentication.

#### Major Libraries Used:

- **Shadcn/UI** for UI components.
- **Google Firebase** for secure user authentication and data storage.
- **Algolia** for instant search functionality.

## How to clone and run?

### Via Git

To clone and run the project, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/alkindi17/pokedex.git
```

2. Navigate to the project directory.

```bash
cd pokedex
```

4. Install the dependencies.

```bash
npm install
```

5. Start the development server.

```bash
npm run dev
```

The application should be available at `http://localhost:3000`.

### With Docker Image

To pull and run the Docker image of the project, follow these steps:

1. Pull the Docker image from Docker Hub:

```bash
docker pull alialkindi/pokedex:latest
```

2. Run the Docker container:

```bash
docker run -p 3000:3000 alialkindi/pokedex:latest
```

The application should be available at `http://localhost:3000`.

## Contact

If you have any questions or feedback, please feel free to contact me **contact@alialkindi.dev**.
