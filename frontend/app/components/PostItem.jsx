import React from 'react'
import deletePost from 'mutations/deletePost'

const PostItem = (props) => {
  return (
    <li><button onClick={ () => props.deletePost(props.post.id) }>Done</button> { props.post.title }</li>
  )
}

export default deletePost(PostItem)
