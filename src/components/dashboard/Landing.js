import React, { Component } from 'react'

export class Landing extends Component {
  render() {
    return (
        <div className="welcome-wrapper">
                <div className="container">
                    <div className="col-2-1">
                        <div className="logo-block">
                            <div className="logo-holder expand-effect"><h2>●´∀`●</h2></div>
                        </div>
                    </div>
                    <div className="col-2-1">
                        <div className="campaign-block">
                            <h1 className="campaign-block-title ">Start from <span className="brand">HOMIE</span><br/> Arrange houseworks easier.</h1>
                            <p className="">Manage, collaborate and track the houseworks smart.  </p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
  }
}

export default Landing
