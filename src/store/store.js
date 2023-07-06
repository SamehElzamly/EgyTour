import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import getUsers from './users';
import fetchUserId from './users'
import fetchUserData from './users'
import getTrips from './tripsSlice';
import fetchSpeTrips from './tripsSlice';

const persistConfig ={
  key : "root",
  version:1,
  storage
}

const reducer = combineReducers({
  getUsers:getUsers,
  getTrips:getTrips,
  fetchSpeTrips:fetchSpeTrips,
  fetchUserData:fetchUserData,
  fetchUserId:fetchUserId
})

const persistedReducer= persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer: {
    reducer:persistedReducer
},
})