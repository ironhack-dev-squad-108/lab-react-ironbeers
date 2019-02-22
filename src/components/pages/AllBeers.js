import React, { Component } from 'react'
import api from '../../api'

export default class AllBeers extends Component {
  render() {
    return (
      <div>
        <h1>All Beers</h1>
      </div>
    )
  }
  componentDidMount(){
    api.getBeersCached()
      .then(beers => {
				console.log('TCL: Home -> componentDidMount -> beers', beers)
      })
  }
}
