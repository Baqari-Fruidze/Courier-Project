import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "enter username",
        },
        password: {
          label: "Password:",
          type: "text",
          placeholder: "enter password",
        },
      },
      async authorize(credentials) {
        console.log("credentials");
        const user = {
          id: "1",
          name: "baqari",
          password: "baqari1234",
          email: "baqari@gmail.com",
          age: 30,
          status: "investor",
        };

        if (
          credentials?.username == user.name &&
          credentials?.password == user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
