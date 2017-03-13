// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as FeedActions from '../actions/FeedActions'

@connect((store) => store.feed)
export default class Feed extends React.Component {
  static propTypes = {
    feed: React.PropTypes.object
  }

  constructor () {
    super()

    this.onDestroyButtonClicked = this.onDestroyButtonClicked.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(FeedActions.fetch(this.props.params.id))
  }

  onDestroyButtonClicked (e) {
    this.props.dispatch(FeedActions.destroy(this.props.feed.id))
  }

  render () {
    if (this.props.feed === null) {
      return null
    }

    return (
      <div>
        <h1><small>feed</small> {this.props.feed.attributes.name}</h1>

        <p><Link to={'/feeds/' + this.props.feed.id + '/edit'}>Edit feed</Link></p>

        <button onClick={this.onDestroyButtonClicked}>Destroy feed</button>

        <p><Link to={'/feeds/' + this.props.feed.id + '/articles'}>Articles</Link></p>
      </div>
    )
  }
}
