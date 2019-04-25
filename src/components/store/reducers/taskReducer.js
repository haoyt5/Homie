const initState = {
    tasks:[],
    tasksData:[],
    taskData:[],
    unassignedTasksData:[],
    assignedTasksData:[],
    pendingTasksData:[]
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
                assignedTasksData:action.assignedTasksData
            }
        case 'GET_TASK':
        console.log('get the specific task data')
        return {
                ...state,
                taskData:action.taskData
            }
        default:
            return state
    }
    
}

export default taskReducer