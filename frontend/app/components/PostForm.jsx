import React from 'react'
import createPost from 'mutations/createPost'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createPost(this.state.title)
    this.setState({ title: '' })
  }

  handleChange(e) {
    this.setState({ title: e.target.value })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Create a post
          { ' ' }
          <input value={ this.state.title } onChange={ this.handleChange } name="title" placeholder="Enter a todo" />
        </label>
        <input type="submit" />
      </form>
    )
  }
}
export default createPost(PostForm)
