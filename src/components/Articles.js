// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as ArticlesActions from '../actions/ArticlesActions'
import * as ArticleActions from '../actions/ArticleActions'

@connect((store) => store.articles)
export default class Articles extends React.Component {
  static propTypes = {
    articles: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  constructor () {
    super()

    this.state = {
      url: ''
    }

    this.onUrlInputChanged = this.onUrlInputChanged.bind(this)
    this.onCreateButtonClicked = this.onCreateButtonClicked.bind(this)
  }

  componentWillMount () {
    this.props.dispatch(ArticlesActions.fetch())
  }

  onUrlInputChanged (e) {
    const url = e.target.value
    this.setState({url})
  }

  onCreateButtonClicked (e) {
    this.props.dispatch(ArticleActions.create(this.props.params.id, this.state.url))
  }

  render () {
    return (
      <div>
        <p><Link to={'/feeds/' + this.props.params.id}>Back to feed</Link></p>

        <input type="text" onChange={this.onUrlInputChanged} value={this.state.url} />
        <button onClick={this.onCreateButtonClicked}>Create article</button>

        <ul>
          {this.props.articles.map((article) =>
            <li><Link to={'/articles/' + article.id}>{article.attributes.title}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}
