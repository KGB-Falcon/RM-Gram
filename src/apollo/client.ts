import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
    cache: new InMemoryCache()
})