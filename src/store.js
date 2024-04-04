
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
    
        userLogin(state,data){
            return data.payload;
        },
        userLogout(){
            return null;
        }

    }
});

export default configureStore({

    reducer : {
        user : user.reducer
    }
})

export let {userLogout, userLogin} = user.actions; 