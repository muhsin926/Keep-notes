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
            title: 'Meeting Notes',
            content: 'Discuss project progress with the team.',
            date: new Date(),
          },
          {
            id: nanoid(),
            title: 'Grocery List',
            content: 'Buy milk, eggs, bread, and vegetables.',
            date: new Date(),
          },
          {
            id: nanoid(),
            title: 'Book Recommendations',
            content: 'Check out "The Great Gatsby" and "To Kill a Mockingbird."',
            date: new Date(),
          },
          {
            id: nanoid(),
            title: 'Workout Plan',
            content: '30 minutes of cardio, followed by strength training.',
            date: new Date(),
          },
          {
            id: nanoid(),
            title: 'Recipe Ideas',
            content: 'Try a new pasta recipe with garlic and olive oil.',
            date: new Date(),
          },
          {
            id: nanoid(),
            title: 'Travel Plans',
            content: 'Book flights to Paris for next summer vacation.',
            date: new Date(),
          },
    ]
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action) => {
            state.notes = [...action.payload]
        },
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

export const { setNotes, addNotes, updateNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer