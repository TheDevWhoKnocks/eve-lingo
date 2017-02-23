import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    uid: string.isRequired,
    abbreviation: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    image: string.isRequired
  },
  render () {
    const { uid, abbreviation, title, description, image } = this.props
    return (
      <Link to={`/details/${uid}`}>
        <div className='show-card'>
          <img src={`/public/img/icons/${image}`} />
          <div>
            <h3>{title}</h3>
            <h4>({abbreviation})</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
