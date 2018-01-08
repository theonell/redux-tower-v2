import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../assets/global.css'

class Head extends Component {
  render() {

    return (
      <Wrap>
        <Link to='/'>home</Link>
      </Wrap>
    )
  }
}

export default Head

const Wrap = styled.div`
  background: #00bcd4;
  text-align: center;
  padding: 20px;
  a{
    font-size: 26px;
    color: #fff;
  }
`
