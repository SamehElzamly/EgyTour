import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTrips=createAsyncThunk('getTrips/fetchTrips',async()=>{
    const res=await fetch('http://localhost:4000/getAllTrips')
    const alltrips= await res.json()
    return alltrips
})
    // fetch trips according to location 
    export const fetchSpeTrips=createAsyncThunk('getSpeTrips/fetchSpeTrips',async(location)=>{
        let data={location:location}
        const res=await fetch('http://localhost:4000/getTripsAccordingToLocation',
        {
            method:"post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
        )
        const alltrips= await res.json()
        return alltrips
    })
export const getTrips = createSlice({
    name: 'tripsSlice',
    initialState:[],
    reducers: {
    },
    extraReducers:builder=>{
        builder.addCase(fetchTrips.fulfilled,(state,action)=>{
            return action.payload
        }).addCase(fetchSpeTrips.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { } = getTrips.actions

export default getTrips.reducer