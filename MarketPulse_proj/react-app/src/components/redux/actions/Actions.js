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

export const handleToast = (type,msg) =>{
    return{
        type :'handleToast',
        payload : {type,msg},
    }
}