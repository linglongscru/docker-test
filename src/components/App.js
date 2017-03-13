// @flow

import React from 'react'
import { Link } from 'react-router'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <p><Link to="/feeds">Feeds</Link></p>

        {this.props.children}
      </div>
    )
  }
}
