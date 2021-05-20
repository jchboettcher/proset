import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import config from './config'

const httpLink = new HttpLink({
  uri: config.graphqlUrl,
  credentials: 'include',
})

const middlewareLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('token')
  if (token) {
    operation.setContext({
      headers: {
        authorization: token,
      },
    })
  }

  return forward(operation)
})

const errorLink = onError(() => {
  // Handle specific errors here
  //   e.g. redirect to login on AuthenticationError
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    errorLink,
    middlewareLink,
    httpLink,
  ]),
})

export default client
