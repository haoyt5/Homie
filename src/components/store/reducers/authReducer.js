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
            console.log('login success');
            return  {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('signup success and login');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNINGROUP_SUCCESS':
        console.log('signin group success')
        return {
            ...state,
            groupError: null
            }
        case 'SIGNINGROUP_NOTEXIST':
            console.log('This group id was not exist')
            return {
                ...state,
                groupError: "This group id was not exist"
                    }
        case 'SIGNINGROUP_EMPTY':
            console.log('All fields are required')
            return {
                ...state,
                groupError: "All fields are required"
                    }
        case 'SIGNINGROUP_ERROR':
            console.log('The password is incorrect')
            return {
                ...state,
                groupError: "That was an invalid password"
                    }
        case 'SIGNINGROUP_ERROR_EXIST':
        console.log('This member already exist')
        return {
            ...state,
            groupError: "You have been already joined this group"
                }
        case 'SIGNUPGROUP_SUCCESS':
            console.log('signup group success')
            return {
                ...state,
                groupError: null
            }
        case 'SIGNUPGROUP_ERROR':
        console.log('signup group error')
        return {
            ...state,
            groupError: "This group id is already in use by another account"
            }
        default:
            return state
    }
    
}
export default authReducer