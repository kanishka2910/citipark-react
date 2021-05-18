import axios from 'axios';
import {GET_ERRORS,GET_SLOTS} from './type';

export const createSlots = (parking_slots,history)=> async dispatch=>
{
    try 
    {
       const res =await axios.post("http://localhost:8080/api/bookslot",parking_slots);
        history.push("/parkingSlot");
    } catch(errors){
        dispatch({
            type : GET_ERRORS,
            payload : errors.response.data
        });

    }
};
export const getSlots=() => async dispatch =>{
    const res = await axios.get("http://localhost:8080/api/veiw");
    dispatch({
        type:GET_SLOTS,
        payload:res.data
    });
}

