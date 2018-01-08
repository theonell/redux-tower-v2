import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import CourseContainer from '../containers/CourseContainer'
import Head from './Head'

class Main extends Component {

  render() {
    return (
      <Router>
        <div>
          <Head />
          <Route exact path='/' component={HomeContainer} />
          <Route path='/c/:id' component={CourseContainer} />
        </div>
      </Router>
    )
  }
}

export default Main
