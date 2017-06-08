import React from 'react'
import PostItem from 'PostItem'
import loadPosts from 'queries/loadPosts'

const PostList = (props) => {
  if (props.data.loading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h3>Post List</h3>
      <ul>
        { props.data.posts
          && props.data.posts.map((post, index) =>
          <PostItem key={ post.id } post={ post }/>)
        }
      </ul>
    </div>
  )
}


export default loadPosts(PostList)
