import React, { Component } from 'react'

export class Loader extends Component {
  render() {
    return (
        <div className="container">
            <div className="empty-card">
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
  }
}

export default Loader
