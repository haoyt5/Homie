const initState = {
    tasks:[],
    tasksData:[]
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
            console.log('get the tasks data')
            return {
                ...state,
                tasksData:action.tasksData
            }
        default:
            return state
    }
    
}

export default taskReducer