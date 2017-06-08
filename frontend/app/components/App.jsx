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
  return {
    showingHighlight: state.highlightTitle.show
  }
}

const withHighlightControls = connect(
  mapStateToProps,
  mapDispatchToProps
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
    this.state = { searchTitle: '' }
  }

  handleSearch(e) {
    this.setState({ searchTitle: e.target.value })
  }
  render() {
    return (
      <div>
        <h1 style={ this.props.showingHighlight && { background: 'yellow' } || null } onClick={ this.props.showingHighlight ? this.props.removeHighlight : this.props.addHighlight }>Post Todos</h1>
        <label>Search: <input value={ this.state.searchTitle } onChange={ this.handleSearch }/></label>
        <PostForm />
        <PostList title={ this.state.searchTitle } />
      </div>
    )
  }
}


export default withHighlightControls(App)
