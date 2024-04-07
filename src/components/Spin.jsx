import React, { Component } from 'react'
import loading from "./spinner.gif"

export class Spin extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" className='text-center m-auto' />
      </div>
    )
  }
}

export default Spin