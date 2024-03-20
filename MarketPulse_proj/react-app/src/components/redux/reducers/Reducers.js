import { toast } from 'react-toastify';


const initialState = {
    user: null,
};

const Reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'Login': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'Logout': {
            return {
                ...state,
                user: null
            }
        }

        
        case 'handleToast': {
            const { type, msg } = action.payload;
            let bodyStyle = {};
        
            switch(type) {
                case 'success':
                    bodyStyle = { color: 'green' };
                    break;
                case 'error':
                    bodyStyle = { color: 'red' };
                    break;
                default:
                    break;
            }
        
            return toast[type](msg, {
                position: 'bottom-right',
                bodyStyle: bodyStyle
            });
        }
        
        default:
            return state ;
    }
}

export default Reducers