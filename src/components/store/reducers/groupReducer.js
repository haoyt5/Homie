const initState = {
    groups:null,
    switchError:null,
    defaultGroupData:null
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
        case 'GET_GROUP':
            return {
                ...state,
                defaultGroupData:action.groupData
                }
        case 'GET_GROUP_EMPTY':
            return {
                ...state,
                defaultGroupData:null
                }
        default:
            return state
    }
}
export default groupReducer