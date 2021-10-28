import { Client, query as q } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: "db.us.fauna.com",
});

export async function getByEmail(email: string) {
  const response = await fauna.query(
    q.If(
      q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email))),
      q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email))),
      q.Create(q.Collection("users"), { data: { email } })
    )
  );

  return response;
}
