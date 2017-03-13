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

    this.onNameInputChanged = this.onNameInputChanged.bind(this)
    this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(FeedActions.fetch(this.props.params.id))

    this.state = {
      name: this.props.feed.attributes.name
    }
  }

  onNameInputChanged (e) {
    const name = e.target.value
    this.setState({name})
  }

  onSaveButtonClicked (e) {
    this.props.dispatch(FeedActions.update(this.props.feed.id, this.state.name))
  }

  render () {
    if (this.props.feed === null) {
      return null
    }

    return (
      <div>
        <h1>
          <small>feed</small>
          <input type="text" onChange={this.onNameInputChanged} value={this.state.name} />
        </h1>

        <p><Link to={'/feeds/' + this.props.feed.id}>Back</Link></p>

        <button onClick={this.onSaveButtonClicked}>Save feed</button>
      </div>
    )
  }
}
