import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route } from 'react-router-dom'

class Row extends Component {
  render () {
    return (
      <table cellPadding='0' cellSpacing='0' width='100%'>
        <tbody><tr>{this.props.children}</tr></tbody>
      </table>
    )
  }
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
}

export default class App extends Component {
  render () {
    const colors = {}

    colors.blueDark = '#166899'
    colors.grayDark = '#999999'
    colors.grayDarkest = '#333333'
    colors.grayMedium = '#EDEDED'
    colors.orange = '#FA8D62'
    colors.teal = '#14AA8D'
    colors.white = '#FFFFFF'

    const styles = {}

    styles.base = {
      borderCollapse: 'collapse',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0,
      textAlign: 'center',
      textTransform: 'none'
    }
    styles.rootContainer = Object.assign({}, styles.base, {
      backgroundColor: colors.grayMedium,
      padding: 20
    })

    const home = () => (
      <div>
        <Row>
          <td width='33%'>
            A
          </td>
          <td width='33%'>
            B
          </td>
          <td width='33%'>
            C
          </td>
        </Row>
        <Row>
          <td width='33%'>
            1
          </td>
          <td width='33%'>
            3
          </td>
        </Row>
        <Row>
          <td width='33%'>
            AA
          </td>
        </Row>
      </div>
    )

    return (
      <Router>
        <div style={styles.rootContainer}>
          <Route exact path='/' render={home} />
        </div>
      </Router>
    )
  }
}
