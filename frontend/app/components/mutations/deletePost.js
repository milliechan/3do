import  { gql, graphql } from 'react-apollo'
import { loadPostsQuery } from '../queries/loadPosts'

const deletePostMutation = gql`
  mutation DeletePost($id: ID!) {
    deletePost(input: { id: $id }) {
      post {
        id
        title
      }
    }
  }
`

const deletePost = graphql(deletePostMutation, {
  props: ({ mutate }) => ({
    deletePost: (id) => mutate({
      variables: { id },
      refetchQueries: [{
        query: loadPostsQuery,
        variables: { title: '' }
      }]
    })
  })
})

export default deletePost
