// /app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Initialize NextAuth with configuration
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // Example using a credentials provider
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const respons = await fetch(`https://dummyjson.com/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

        const result = await respons.json();

        if (respons.ok && result) {
          return result;
        } else {
          return null;
        }
      },
    }),
    // Add other providers here
  ],
  // Additional NextAuth configuration...
});

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };
