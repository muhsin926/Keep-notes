import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type Note = {
    id: string,
    title: string,
    content: string,
    category: string,
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
            category: 'job',
            date: new Date(),
        },
        {
            id: nanoid(),
            title: 'Grocery List',
            content: 'Buy milk, eggs, bread, and vegetables.',
            category: 'food',
            date: new Date(),
        },
        {
            id: nanoid(),
            title: 'Book Recommendations',
            content: 'Check out "The Great Gatsby" and "To Kill a Mockingbird."',
            category: 'personal',
            date: new Date(),
        },
        {
            id: nanoid(),
            title: 'Workout Plan',
            content: '30 minutes of cardio, followed by strength training.',
            category: 'personal',
            date: new Date(),
        },
        {
            id: nanoid(),
            title: 'Recipe Ideas',
            content: 'Try a new pasta recipe with garlic and olive oil.',
            category: 'food',
            date: new Date(),
        },
        {
            id: nanoid(),
            title: 'Travel Plans',
            content: 'Book flights to Paris for next summer vacation.',
            category: 'personal',
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