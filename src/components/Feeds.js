// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as FeedsActions from '../actions/FeedsActions'
import * as FeedActions from '../actions/FeedActions'

@connect((store) => store.feeds)
export default class Feeds extends React.Component {
  static propTypes = {
    feeds: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  constructor () {
    super()

    this.state = {
      name: ''
    }

    this.onNameInputChanged = this.onNameInputChanged.bind(this)
    this.onCreateButtonClicked = this.onCreateButtonClicked.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(FeedsActions.fetch())
  }

  onNameInputChanged (e) {
    const name = e.target.value
    this.setState({name})
  }

  onCreateButtonClicked (e) {
    this.props.dispatch(FeedActions.create(this.state.name))
  }

  render () {
    return (
      <div>
        <input type="text" onChange={this.onNameInputChanged} value={this.state.url} />
        <button onClick={this.onCreateButtonClicked}>Create feed</button>

        <ul>
          {this.props.feeds.map((feed) =>
            <li><Link to={'/feeds/' + feed.id}>{feed.attributes.name}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}
