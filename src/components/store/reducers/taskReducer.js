const initState = {
    tasks:[],
    tasksData:[],
    taskData:[],
    unassignedTasksData:[],
    assignedTasksData:[],
    pendingTasksData:[],
    completeTasksData:[]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
        console.log('create task', action.task)
         return state
        case 'CREATE_TASK_ERROR':
            console.log('create task', action.err)
            return state
        case 'GET_TASKS':
            console.log('get all task data')
            return {
                ...state,
                tasksData:action.tasksData,
                unassignedTasksData:action.unassignedTasksData,
                assignedTasksData:action.assignedTasksData,
                pendingTasksData:action.pendingTasksData,
                completeTasksData:action.completeTasksData
            }
        case 'GET_TASK':
        console.log('get the specific task data')
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