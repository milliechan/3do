import { gql, graphql } from 'react-apollo'

export const loadPostsQuery = gql`
  query LoadPosts($title: String) {
    posts(title: $title) {
      id
      title
    }
  }
`


const loadPosts = graphql(loadPostsQuery, {
  options: ({ title }) => ({ variables: { title } })
})

export default loadPosts
