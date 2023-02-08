import { createSlice} from "@reduxjs/toolkit";



const settingsSlice = createSlice({
    name:'settings',
    initialState:{
        lightAndDarkmood:false as boolean,
    },
    reducers:{
        toggleMode:(state) => {
            state.lightAndDarkmood = !state.lightAndDarkmood
        }
    }
})

export const {toggleMode} = settingsSlice.actions;

export default settingsSlice.reducer;