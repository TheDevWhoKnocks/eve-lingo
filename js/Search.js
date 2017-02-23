import React from 'react'
import { connect } from 'react-redux'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string, bool } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    lingos: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string,
    showSearch: bool
  },
  render () {
    return (
      <div className='search'>
        <div className='header'>
          <Header showSearch />
        </div>

        <div>
          {this.props.lingos
            .filter((lingo) => `${lingo.abbreviation} ${lingo.title} ${lingo.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((lingo) => {
              return (
                <ShowCard key={lingo.uid} {...lingo} />
              )
            })}
            {utilSpace}
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

export default connect(mapStateToProps)(Search)
