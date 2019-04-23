const initState = {
    tasks:[],
    tasksData:[],
    taskData:[]

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
            console.log('get a list of task data')
            return {
                ...state,
                tasksData:action.tasksData
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