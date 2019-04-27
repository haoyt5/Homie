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
        imagefile: '',
        magePreviewUrl:''
    }
    handleChange = (e) =>{
        this.setState({
            files:  URL.createObjectURL(e.target.files[0]),
            imagePreviewUrl: URL.createObjectURL(e.target.files[0])
        })
    }
    handleDismiss = (e)=>{
        e.preventDefault()
        console.log('取消')
    }
    handleFinish = (e) => {
        e.preventDefault()
        console.log(this.state)
        // console.log(this.fileInput.current.files)
        console.log(this.fileInput.current.files[0])
        // const { assign }=this.props.taskdetails.data
        // this.props.closeTask(this.props.match.params.id,assign)
    }
    componentDidMount(){
        this.props.fetchTask(this.props.match.params.id)
    }
  render() {
    const id = this.props.match.params.id
    if (this.props.taskdetails.data){
        const { assign,author, content, title } = this.props.taskdetails.data
        return(
            <div className="taskdetails-wrapper" key={id} >
                <div className="container ">
                    <div className="task-card">
                            <h2 className="title">{title}</h2>
                            <p className="expirydate">Expiry Date | Wed</p>
                            <p className="expirydate">Posted by | {author}</p>
                            <p className="expirydate">Assigned to | {assign.assignedTo}</p>
                            <p>{content}</p>
                            
                    </div>
                    <div className="image-box">
                    <div className="image-box-inner">
                    {this.state.files[0] && <img src={this.state.imagePreviewUrl} alt=""/> }
                    </div>
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
                            <button onClick={this.handleDismiss} >Back</button>
                            <button>Finish</button>
                        </form>
                    </div>
                </div>


                

                
            </div>
           
        )
    } else {
        return (
            <div className="container">
                <p>Loading ...</p>
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
        closeTask: (taskUid,assign)=>dispatch(closeTask(taskUid,assign))
    }
}

export default    connect(mapStateToProps,mapDispatchToProps)(TaskMemo);

