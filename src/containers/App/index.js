import React, { Component } from 'react'
import { connect } from 'react-redux'
require('./styles.scss')

export class App extends Component {
  render() {
    return (
      <div className='test_v2'>Road signs with Provider. Props shape: {this.props.signs.shape}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    signs: state.signs
  }
}

export default connect(mapStateToProps)(App)
