import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, closeTask } from '../store/actions/taskActions'
import imageholder from '../../img/uma.jpg'
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
    handleFinish = (e) => {
        e.preventDefault()
        const taskUid = this.props.match.params.id
        const { assign } = this.props.taskdetails.data
        this.props.closeTask(taskUid,assign,this.state.file)
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
        const { assign,author, content, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <h2 className="sub-instruciton-title">Report the Task</h2>
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | Wed</p>
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
                    <div className="uploadwrapper">
                        <form action=""
                            onSubmit={this.handleFinish}>
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

                </div>


                

                
            </div>
           
        )
    } else {
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
}
const mapStateToProps = (state, ownProps) => {
    const taskdetails = state.task.taskData ? state.task.taskData : null
    return {
        taskdetails: taskdetails
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        fetchTask: (taskUid) => dispatch(fetchTask(taskUid)),
        closeTask: (taskUid,assign,imagefile)=>dispatch(closeTask(taskUid,assign,imagefile))
    }
}

export default    connect(mapStateToProps,mapDispatchToProps)(TaskMemo);

