import { gql, graphql } from 'react-apollo'
import { loadPostsQuery } from '../queries/loadPosts'

const createPostMutation = gql`
  mutation CreatePost($title: String!) {
    createPost(input: { title: $title }) {
      post {
        id
        title
      }
    }
  }
`

const createPost = graphql(createPostMutation, {
  props: ({ mutate }) => ({
    createPost: (title) => mutate({
      variables: { title },
      refetchQueries: [{
        query: loadPostsQuery,
        variables: { title: '' }
      }]
    })
  })
})

export default createPost
