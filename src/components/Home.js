import React, { Component } from 'react'
import store from '../store'

class Home extends Component {

  render() {
    console.log(store.getState())
    return (
      <div>
        home
      </div>
    )
  }
}

export default Home
