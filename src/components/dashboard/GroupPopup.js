import React, { Component } from 'react'
import { faGripLines, faPlus, faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
export class GroupPopup extends Component {
  render() {
    return (
      <div className="popup" >
        <div className="container">
            <div className="row">
                <div className="close-popup-row" onClick={this.props.togglePopup}><FontAwesomeIcon icon={faGripLines} /></div> 
            </div>
            <div className="option-block">
                <div  className="option-row ">
                    <div className="option-icon">
                        <FontAwesomeIcon icon={faDoorClosed} />
                    </div>
                    <div className="option-text">米花町五丁目39番地</div>
                </div>
                <div  className="option-row ">
                    <div className="option-icon ">
                        <FontAwesomeIcon icon={faDoorClosed} />
                    </div>
                    <div className="option-text">米花町五丁目39番地</div>
                </div>
            </div>


            <div className="u-bottom">
                <div className="container">
                    <NavLink to="/signgroup/signin" >
                        <div  className="option-row ">
                            <div className="option-icon">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className="option-text">Join new group</div>
                        </div>
                    </NavLink> 
                </div>

            </div>

        </div>
      </div>
    )
  }
}

export default GroupPopup
