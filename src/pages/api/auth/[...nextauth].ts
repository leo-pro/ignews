import { query as q } from "faunadb";

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { fauna, getByEmail } from "../../../services/fauna";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      try {
        getByEmail(email as string)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));

        return true;
      } catch {
        return false;
      }
    },
  },
});
