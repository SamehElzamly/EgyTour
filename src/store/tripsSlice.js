import { createSlice } from '@reduxjs/toolkit'
export const tripsSlice = createSlice({
  name: 'tripsSlice',
  initialState:[],
  reducers: {
    addTrips: (state,action) => {
      return [...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTrips } = tripsSlice.actions

export default tripsSlice.reducer