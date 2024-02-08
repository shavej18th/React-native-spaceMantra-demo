import { ApolloClient, InMemoryCache } from "@apollo/client";
import { REACT_APP_BACKENED_URL } from "@env";

export const client = new ApolloClient({
    uri:REACT_APP_BACKENED_URL,
    cache: new InMemoryCache(),
  });