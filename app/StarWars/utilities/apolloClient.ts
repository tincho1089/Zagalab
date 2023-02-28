import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GetApiUrl } from 'services'

const client = new ApolloClient({
  uri: GetApiUrl(),
  cache: new InMemoryCache(),
})

export default client
