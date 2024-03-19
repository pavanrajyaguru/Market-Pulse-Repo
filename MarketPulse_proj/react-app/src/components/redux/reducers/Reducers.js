const initialState = {
    user :null
};

const Reducers = (state = initialState,action) =>{
    switch(action.type){
        case 'Login' :{
        return{
            ...state,
            user : action.payload
        }
        }
        case 'Logout' : {
            return{
                ...state,
                user: null
            }
        }
        default :
        return state;

        
    }
}

export default Reducers