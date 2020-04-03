import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const uploadLink = createUploadLink({
  uri: 'http://localhost:5000/graphql'
});

const client = new ApolloClient({
  link: uploadLink,
  cache
});

export default client;
