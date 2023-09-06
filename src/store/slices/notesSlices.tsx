import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type Note = {
    id: string,
    title: string,
    content: string,
    date: Date,
}

interface Notes {
    notes: Note[]
}

const initialState: Notes = {
    notes: [
        {
            id: nanoid(),
            title: "learn fullstack development",
            content: "lorem lipsm adfad  kjadf adsf asdfoaadf adfa ads afdf  df",
            date: new Date()
        },
        {
            id: nanoid(),
            title: "learn fullstack development",
            content: "lorem lipsm adfad  kjadf adsf asdfoaadf adfa ads afdf  df",
            date: new Date()
        },
        {
            id: nanoid(),
            title: "learn fullstack development",
            content: "lorem lipsm adfad  kjadf adsf asdfoaadf adfa ads afdf  df",
            date: new Date()

        },
    ]
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNotes: (state, action: PayloadAction<Note>) => {
            state.notes = [...state.notes, action.payload]
        },
        updateNote: (state, action) => {
            const editNotes = state.notes.filter((item) => item.id !== action.payload.id)
            state.notes = [...editNotes, action.payload]
        },
        deleteNote: (state, action) => {
            const existNotes = state.notes.filter((item) => item.id !== action.payload)
            state.notes = [...existNotes]
        }
    }
})

export const { addNotes, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer