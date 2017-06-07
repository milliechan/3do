import React from 'react'
import PostForm from 'PostForm'
import PostList from 'PostList'
import { connect } from 'react-redux'
import { addHighlight, removeHighlight } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  addHighlight: () => dispatch(addHighlight()),
  removeHighlight: () => dispatch(removeHighlight())
})

const mapStateToProps = (state)=> {
  console.log(state)
  return {
    showingHighlight: state.show
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 style={ this.props.showingHighlight && { background: 'yellow' } || null } onClick={ this.props.showingHighlight ? this.props.removeHighlight : this.props.addHighlight }>Post Todos</h1>
        <PostForm />
        <PostList />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
