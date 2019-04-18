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
            console.log(action)
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNINGROUP_NOTEXIST':
            console.log('This group id is not exist')
            return {
                ...state,
                groupError: "This groupid was not exist"
                    }
        case 'SIGNINGROUP_ERROR':
            console.log('The password is incorrect')
            return {
                ...state,
                groupError: "That was an invalid password"
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
            groupError: "This group id has already been used"
            }
        default:
            return state
    }
    
}
export default authReducer