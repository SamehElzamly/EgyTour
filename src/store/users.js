import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers=createAsyncThunk('getUsers/fetchUsers',async()=>{
    const res=await fetch('http://localhost:4000/getAllUsers')
    const allusers= await res.json()
    return allusers
})
export const fetchUserData=createAsyncThunk ('getUserData/fetchUserData',async(userId)=>{
    const data=await fetch(`http://localhost:4000/${userId}`)
    const userData=await data.json();
    console.log(userData);
    return userData
})
export const fetchUserId=createAsyncThunk ('getUserId/fetchuserId',async (userEmail)=> {
                                        let object={userEmail:userEmail}
                                        try {
                                            const response = await fetch('http://localhost:4000/getId',{
                                                method:"post",
                                                headers: {
                                                "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify(object)
                                            });
                                            const data = await response.json();
                                            console.log(data);
                                            return data
                                        } catch (error) {
                                            console.error('Error fetching data:', error);
                                        }
                                        }
) 
export const getUsers=createSlice({
    name:"users",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            return action.payload
        }).addCase(fetchUserData.fulfilled,(state,action)=>{
            return action.payload
        }).addCase(fetchUserId.fulfilled,(state,action)=>{
            return action.payload
        })
    },
})
export const{}=getUsers.actions;
export default getUsers.reducer