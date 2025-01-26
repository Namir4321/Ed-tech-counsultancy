import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import db from "@/utils/db";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await db.profile.findUnique({
            where: { email: credentials.email },
          });
          if (!user) {
            throw new Error("No user found please register!.");
          } else {
            const passwordChecked = await compare(
              credentials.password,
              user.password
            );
            if (!passwordChecked) {
              throw new Error("Invalid email or password.");
            }
          }
          return {
            id: user.id,
            email: user.email,
          };
        } catch (err) {
          throw new Error(err.message);
        }
      },
    }),
  ],
});
