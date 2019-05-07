import React, { Component } from 'react';
import AlertWindow from '../alert/AlertWindow'
import { connect } from 'react-redux';
import { fetchTask, reportTaskWithImage, reportTaskWOImage } from '../store/actions/taskActions'
import PageLoader from '../layout/PageLoader'
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
        const { verifybyImage,expiryDate, assign,author, content, title } = this.props.taskdetails.data
        return(
            <div>
            {this.props.taskErr ? <AlertWindow error={ this.props.match.params.id }/> : null }
                <div className="taskdetails-wrapper" key={id} >
                    <div className="container ">
                        <h2 className="sub-instruciton-title">Report the Task</h2>
                        <div className="task-card">
                                <h2 className="title">{title}</h2>
                                <p className="expirydate">Expiry Date | { expiryDate.toDate().toTimeString().replace('GMT+0800 (Taipei Standard Time)','') + " "+ expiryDate.toDate().toDateString() }</p>
                                <p className="expirydate">Posted by | {author}</p>
                                <p className="expirydate">Assigned to | {assign.assignedTo}</p>
                                <p className="expirydate">Description</p>
                                <p>{content}</p>
                                {this.state.imagePreviewUrl[0] && (
                                    <div>
                                    <p className="expirydate">Image attachment</p>
                                    <div className="image-row">
                                        <div className="image-box">
                                            <div className="image-box-inner">
                                            <img className="" src={this.state.imagePreviewUrl} alt=""/> 
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
                                <div className="task-input-row">
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

