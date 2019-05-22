import React, { Component } from 'react';
import AlertWindow from '../alert/AlertWindow'
import { connect } from 'react-redux';
import { fetchTask, reportTaskWithImage, reportTaskWOImage } from '../store/actions/taskActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import PageLoader from '../layout/PageLoader';
import temp from '../../img/temp.png'

export class TaskMemo extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef()
    }
    state = {
        files:[],
        imagePreviewUrl:[],
        imagefile:null
    }
    handleBack = (e) =>{
        e.preventDefault();
        window.location.href="#/"
      }
    handleChange = (e) =>{
        this.setState({
            files:  e.target.files,
            imagePreviewUrl: URL.createObjectURL(e.target.files[0]),
            file:e.target.files[0]
        })
    }
    handleReportWithImage = (e) => {
        e.preventDefault()
        const taskUid = this.props.match.params.id
        const { assign } = this.props.taskdetails.data
        this.props.reportTaskWithImage(taskUid,assign,this.state.file)
    }
    handleReport = (e) =>{
        e.preventDefault()
        const taskUid = this.props.match.params.id
        const { assign } = this.props.taskdetails.data
        this.props.reportTaskWOImage(taskUid,assign)
    }
    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.fetchTask()
    }
  render() {
    const id = this.props.match.params.id
    if (this.props.taskdetails.data){
        const { createAt,verifybyImage,expiryDate, assign,author, content, title } = this.props.taskdetails.data
        return(
            <div>
            {this.props.taskErr ? <AlertWindow error={ this.props.match.params.id }/> : null }
                <div className="taskdetails-wrapper" key={id} >
                    <div className="container ">
                        <h2 className="sub-instruciton-title">Report the Task</h2>
                        <div className="task-card">
                                <div className="expiry-row">
                                    <div className="expiry-col">
                                        <div className="expiry-assign-pic">
                                            <div className="expiry-picbox">
                                                <div className="expiry-picbox-inner">
                                                    { assign.assignedToURL !== null ? <img className="expiry-img" src={assign.assignedToURL} alt=""/> :<div className="card-img-holder" style={{backgroundColor:assign.assignedToColor}}><p>{assign.assignedTo[0]}</p></div> }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="expiry-assign-name">
                                            <div className="assign-text"><span>Assigned to</span> </div>
                                            <div className="assign-content">{assign.assignedTo}</div>
                                        </div>
                                    </div>
                                    <div className="expiry-date-col">
                                        <div className="date-tag-time">{ expiryDate.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','').slice(0, 5)}</div>
                                        <div className="date-tag-date">
                                            <span className="date-tag-span">{expiryDate.toDate().toDateString()}</span>
                                            </div>
                                    </div>
                                </div>
                                <div className="content-block">
                                     <h2 className="title">{title}</h2>
                                    <p className="main-content">{content}</p>
                                </div>
                                <div className="hr-row">
                                    <hr/>
                                </div>
                                <div className="create-row">
                                    <span>{createAt.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','').slice(0, 5)}</span>・
                                    <span>{createAt.toDate().toDateString().slice(4, 15).replace( /\s+/g ,"/")}</span>・
                                    <span>{author}</span>
                                </div>
                                
                                {this.state.imagePreviewUrl[0] && (
                                    <div>
                                    <div className="image-row">
                                        <div className="image-box">
                                            <div className="image-box-inner">
                                            <img className="" src={this.state.imagePreviewUrl} alt=""/> 
                                            {/* <img className="" src={temp} alt=""/>  */}
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
    
                        </div>
                        {verifybyImage ? (
                            <div className="uploadwrapper">
                            <form action=""
                                onSubmit={this.handleReportWithImage}>
                                <div className="task-file-input-row">
                                    <label htmlFor="imagefile">attachment</label>
                                    <input id="imagefile"
                                        type="file"
                                        onChange={this.handleChange}
                                        ref={this.fileInput}/>
                                </div>
                                <div className="feature-row">
                                <button onClick={this.handleBack} 
                                        className="medium-square-button cancel-button">Back</button>
                                <button  className="medium-square-button">Finish</button>
                                </div>
                            </form>
                        </div>
                        ): (
                        <div className="uploadwrapper">
                            <form action=""
                                onSubmit={this.handleReport}>
                                <div className="feature-row">
                                <button onClick={this.handleBack} 
                                        className="medium-square-button cancel-button">Back</button>
                                <button  className="medium-square-button">Finish</button>
                                </div>
                            </form>
                        </div>)}

                    </div>
                    
                </div>
            </div>
           
        )
    } else {
        return <PageLoader />
    }
  }
}
const mapStateToProps = (state, ownProps) => {
    const taskdetails = state.task.taskData ? state.task.taskData : null
    return {
        taskdetails: taskdetails,
        taskErr: state.task.err
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTask: (taskUid) => dispatch(fetchTask(taskUid)),
        reportTaskWithImage: (taskUid,assign,imagefile)=>dispatch(reportTaskWithImage(taskUid,assign,imagefile)),
        reportTaskWOImage: (taskUid,assign)=>dispatch(reportTaskWOImage(taskUid,assign))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(TaskMemo);

