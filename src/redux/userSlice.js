import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        name:"DuyAnh",
        age:"23",
        about:"Web dev",
        avaUrl:
        "https://vcdn-giaitri.vnecdn.net/2022/03/07/the-batman-robert-pattinson-jp-5567-9569-1646616004.jpg",
        themeColor:"#ff9051",
    },
    reducers:{
       update:(state,action)=>{
           state.name = action.payload.name;
           state.age = action.payload.age;
           state.about = action.payload.about;
           state.avaUrl = action.payload.avaUrl; 
           state.themeColor = action.payload.themeColor;
       }
    }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;