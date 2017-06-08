import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
})
// by default, this client will send queries to the
// `/graphql` endpoint on the same host
const client = new ApolloClient({
  networkInterface
})

export default client
