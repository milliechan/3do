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
      // refetchQueries: [{
      //   query: loadPostsQuery,
      //   variables: { title: '' }
      // }]
      updateQueries: {
        LoadPosts: (prev, { mutationResult }) => {
          let deletedPost = mutationResult.data.deletePost.post
          return {
            ...prev,
            posts: prev.posts.filter((post) => post.id !== deletedPost.id )
          }
        }
      }
    })
  })
})

export default deletePost
// try out splice
// or update library
// or try out filter
