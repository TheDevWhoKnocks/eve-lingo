import React from 'react'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    lingo: shape({
      abbreviation: string,
      title: string,
      description: string,
      image: string,
      attribution: string
    })
  },
  render () {
    const { abbreviation, title, description, image, attribution } = this.props.lingo
    return (
      <div className='details'>
        <Header />
        <section className='details-card'>
          <div className='details__left'>
            <img src={`/public/img/icons/${image}`} className='details-card__img' />
          </div>
          <div className='details__right'>
            <h1 className='heading heading--md'>{title} ({abbreviation})</h1>
            <p className='text'>{description}</p>
            <p className='text text--sm'>{attribution}</p>
          </div>
        </section>
      </div>
    )
  }
})

export default Details
