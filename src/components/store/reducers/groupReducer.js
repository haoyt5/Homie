const initState = {
    groups:null,
    switchError:null
}
const groupReducer = (state = initState, action ) => {
    switch(action.type){
        case 'GROUP_ADD':
            return {
                ...state,
                groups:action.groupsData
            }
        case 'SWITCHGROUP_SUCCESS':
            return state
        case 'SWITCHGROUP_ERROR':
            return {
                ...state,
                switchError:action.error
            }
        default:
            return state
    }
    
}
export default groupReducer