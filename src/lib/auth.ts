import { NextAuthOptions } from "next-auth";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCrediantials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || clientId.length === 0) {
    throw new Error("Google clientId is missing");
  }
  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Google clientSecret is missing");
  }
  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCrediantials().clientId,
      clientSecret: getGoogleCrediantials().clientSecret,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      const prismaUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!prismaUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        picture: prismaUser.image,
      };
    },
    redirect() {
      return "/dashboard";
    },
  },
};
