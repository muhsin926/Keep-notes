import { configureStore } from "@reduxjs/toolkit";
import notesSlices from "./slices/notesSlices";
import editReducer from './slices/editSlices'

const store = configureStore({
    reducer: {
        notes: notesSlices,
        editSlices: editReducer,
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch