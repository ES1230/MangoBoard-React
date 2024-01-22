
import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
    
        userLogin(state,데이터){
            return 데이터.payload;
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