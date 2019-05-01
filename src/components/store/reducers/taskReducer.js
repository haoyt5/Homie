const initState = {
    tasks:[],
    tasksData:[],
    taskData:[],
    unassignedTasksData:[],
    assignedTasksData:[],
    pendingTasksData:[],
    completeTasksData:[],
    err:false,
    errMessage:null,
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
        console.log('create task', action.task)
         return state
        case 'TASK_BLANK':
            return{
                ...state,
                err:true
            }
        case 'TASK_BLANK_NOPIC':
        return{
            ...state,
            err:true,
            errMessage:"This task cannot report without a photo."
        }
        case 'RESET_TASK_ALERT':
        return{
            ...state,
            err:false,
            errMessage:null
        }
        case 'CREATE_TASK_ERROR':
            console.log('create task', action.err)
            return state
        case 'GET_TASKS':
            return {
                ...state,
                tasksData:action.tasksData,
                unassignedTasksData:action.unassignedTasksData,
                assignedTasksData:action.assignedTasksData,
                pendingTasksData:action.pendingTasksData,
                completeTasksData:action.completeTasksData
            }
        case 'GET_TASK':
            return {
                    ...state,
                    taskData:action.taskData
                }
        case 'EMPTY_TASK':
            return{
                ...state,
                taskData:[]
            } 
        case 'EMPTY_TASKS':
            return {
                ...state,
                tasksData:[],
                unassignedTasksData:[],
                assignedTasksData:[],
                pendingTasksData:[],
                completeTasksData:[]
            }
        default:
            return state
    }
    
}

export default taskReducer