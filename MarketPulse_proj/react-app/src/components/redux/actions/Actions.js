export const login = (userdata) =>{
    return{
        type : 'Login',
        payload : userdata,
    }
}

export const logout = () =>{
    return {
        type :"Logout"
    }
}