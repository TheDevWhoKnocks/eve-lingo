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
          <div className='show-card__content'>
            <img src={`/public/img/icons/${image}`} className='icon show-card__image' />
            <div>
              <h3 className='heading heading--md heading--lp'>{title}</h3>
              <h4 className='subheading'>({abbreviation})</h4>
              <p className='text text--fixed center'>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
