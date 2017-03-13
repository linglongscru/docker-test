// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as ArticleActions from '../actions/ArticleActions'

@connect((store) => store.article)
export default class Article extends React.Component {
  static propTypes = {
    article: React.PropTypes.object
  }

  componentWillMount () {
    this.props.dispatch(ArticleActions.fetch(this.props.params.id))
  }

  render () {
    if (this.props.article === null) {
      return null
    }

    return (
      <div>
        <p><Link to={'/feeds/' + this.props.article.relationships.feed.data.id + '/articles'}>Back to feed articles</Link></p>

        <h1><small>article</small> {this.props.article.attributes.title}</h1>

        <p><a href={this.props.article.attributes.url}>{this.props.article.attributes.url}</a></p>

        <p>{this.props.article.attributes.text}</p>
      </div>
    )
  }
}
