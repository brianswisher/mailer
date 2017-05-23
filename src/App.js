import React, { Component } from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

const Gist = ({ match }) => ( // eslint-disable-line
  <div>
    {match.params.gistId}
  </div>
)

const GistDeets = ({ gist }) => ( // eslint-disable-line
  <div>
    {gist.description}
  </div>
)

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gists: null
    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/gists')
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists })
      })
  }

  render () {
    const { gists } = this.state

    const home = () => (
      <h1>Hello, world.</h1>
    )

    const gistDeets = ({ match }) => (<GistDeets gist={gists.find(g => g.id === match.params.gistId)}>2</GistDeets>)

    return (
      <Router>
        <div>
          <div>
            <Route exact path='/' render={home} />
            {gists && (
              <Route path='/g/:gistId' render={gistDeets} />
            )}
            <Route path='/g/:gistId' component={Gist} />
          </div>
          {gists ? (
            gists.map((gist, key) => (
              <Link key={key} to={`/g/${gist.id}`}>
                <p>{gist.description }} '[no description]'}</p>
              </Link>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Router>
    )
  }
}
