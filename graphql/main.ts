import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export const apolloClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });


