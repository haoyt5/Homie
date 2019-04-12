const initState = {
    tasks:[
        {id:'1',title:'丟垃圾',content:'丟一般垃圾還有塑膠回收'},
        {id:'2',title:'丟垃圾',content:'丟一般垃圾還有塑膠回收'}
    ]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
        console.log('create task', action.task)
         return state
        case 'CREATE_TASK_ERROR':
            console.log('create task', action.err)
            return state
        default:
            return state
    }
    
}

export default taskReducer