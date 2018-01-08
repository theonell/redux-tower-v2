import React, { Component } from 'react'

class Home extends Component {

  render() {
    const { courses } = this.props
    console.log(courses)

    return (
      <div>
        home
      </div>
    )
  }
}

export default Home
