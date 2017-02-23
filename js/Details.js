import React from 'react'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    lingo: shape({
      abbreviation: string,
      title: string,
      description: string,
      image: string
    })
  },
  render () {
    const { abbreviation, title, description, image } = this.props.lingo
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({abbreviation})</h2>
          <img src={`/public/img/icons/${image}`} />
          <p>{description}</p>
        </section>
      </div>
    )
  }
})

export default Details
