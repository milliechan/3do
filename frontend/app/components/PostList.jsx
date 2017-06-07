import React from 'react'
import PostItem from 'PostItem'
import loadPosts from 'queries/loadPosts'

const PostList = (props) => {
  if (props.data.loading) {
    return <div>Loading...</div>
  }
  console.log(props)
  return (
    <div>
      <h3>Post List</h3>
      <PostItem />
    </div>
  )
}


export default loadPosts(PostList)
