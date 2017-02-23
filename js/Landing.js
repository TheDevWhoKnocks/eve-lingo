import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatchSetSearchTerm: func
  },
  handleSearchTermChange (event) {
    this.props.dispatchSetSearchTerm(event.target.value)
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <div className='header'>
          <h1 className='heading'>ΞVΞ LIΠGΘ</h1>
          <h5 className='heading heading--sm'>Fly <span className='line-through'>safe</span> smarter.</h5>
        </div>
        <div className='wrapper'>
          <form onSubmit={this.handleSearchSubmit}>
            <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
          </form>
          <Link to='/search'>or Browse All</Link>
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (searchTerm) {
      dispatch(setSearchTerm(searchTerm))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
