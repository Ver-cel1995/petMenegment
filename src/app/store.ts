import {configureStore} from "@reduxjs/toolkit";
import {petReducer, petSlice} from "../features/pets/petsSlice.ts";


export const store = configureStore({
    reducer: {
        [petSlice.name]: petReducer
    }
})

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;