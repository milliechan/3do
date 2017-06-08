import React from 'react'
import deletePost from 'mutations/deletePost'

class PostItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(e) {
    this.props.deletePost(this.props.post.id)
  }
  render() {
    return (
      <li><button onClick={ this.handleDelete }>Done</button> { this.props.post.title }</li>
    )
  }
}

export default deletePost(PostItem)
