import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const uploadLink = createUploadLink({
  uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
  link: uploadLink,
  cache: cache,
});

export default client;
