import React, { Component } from 'react'

export class PageLoader extends Component {
  render() {
    return (
            <div className="container">
                 <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    )
  }
}

export default PageLoader
