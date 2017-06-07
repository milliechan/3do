import { gql, graphql } from 'react-apollo'

const loadPostsQuery = gql`
  query loadPosts($title: String!) {
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
