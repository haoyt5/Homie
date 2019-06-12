const initState = {
    authError: null,
    groupError: null
}
const authReducer = (state = initState, action ) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return  {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNINGROUP_SUCCESS':
            return {
                ...state,
                groupError: null
                }
        case 'SIGNINGROUP_NOTEXIST':
            return {
                ...state,
                groupError: "This group id was not exist"
                    }
        case 'SIGNINGROUP_EMPTY':
            return {
                ...state,
                groupError: "All fields are required"
                    }
        case 'SIGNINGROUP_ERROR':
            return {
                ...state,
                groupError: "That was an invalid password"
                    }
        case 'SIGNINGROUP_ERROR_EXIST':
            return {
                ...state,
                groupError: "You have been already joined this group"
                    }
        case 'SIGNUPGROUP_SUCCESS':
            return {
                ...state,
                groupError: null
            }
        case 'SIGNUPGROUP_ERROR':
            return {
                ...state,
                groupError: "This group id is already in use by another account"
                }
        default:
            return state
    }
}
export default authReducer