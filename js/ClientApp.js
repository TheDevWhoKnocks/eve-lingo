import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/lingo.json'
import '../public/normalize.css'
import '../public/css/main.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match
              pattern='/search'
              component={(props) => <Search lingos={preload.lingos} {...props} />}
            />
            <Match
              pattern='/details/:id'
              component={(props) => {
                const lingos = preload.lingos.filter((lingo) => props.params.id === lingo.uid)
                return <Details lingo={lingos[0]} {...props} />
              }}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
