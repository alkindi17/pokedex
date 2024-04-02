# Pokédex

Visit at: https://pokedex.alialkindi.dev

This is a React application built with Next.js. It displays all Pokémon and their details, with the ability to search and filter the list of pokemons, and more.

## Project Overview

##### Features:

- Stunning responsive UI.
- Mobile Screen friendly.
- Browse full list of pokémons seamlessly.
- View detailed pokemons details.
- Search and filter pokemons.
- Add pokemons to favourites.
- Random pokemon getter.
- View your recently viewed pokemons.
- Secure Login with Google Authentication.

##### Major Libraries Used:

- **Shadcn/UI** for UI components.
- **Google Firebase** for secure user authentication and data storage.
- **Algolia** for instant search functionality.

## Cloning & Running the Project

To clone and run the project, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/alkindi17/pokedex.git
```

2. Navigate to the project directory.

```bash
cd pokedex
```

3. Create `.env.local` file at root directory, and edit to link to your Algolia account.  
   Create your account at https://www.algolia.com.  
   To use my algolia account for review purposes please contact me **contact@alialkindi.dev**

```
ALGOLIA_ADMIN_API_KEY = <Your Admin API Key>
NEXT_PUBLIC_ALGOLIA_APPLICATION_ID = <Your Application ID>
NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY = <Your Search API Key>
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

## Contact

If you have any questions or feedback, please feel free to contact me **contact@alialkindi.dev**.
