import {GET_SLOTS} from "../actions/type";
const initialState={
    slots:[]
};

export default function(state=initialState, action){
    switch(action.type)
    {
        case GET_SLOTS:
            return{
                    ...state,
                    slots: action.payload
            }

            default:
                return state;
    }
}