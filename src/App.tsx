import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Modal from "./components/Modal";
import { addNotes } from './store/slices/notesSlices'
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {FiEdit} from 'react-icons/fi'
import { setIsVisible } from "./store/slices/editSlices";

function App() {
  const notes = useAppSelector((state) =>  state.notes)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [addNew, setAddNew] = useState(false)
  const dispatch = useAppDispatch()

  const addNote = () => {
    if (!title || !content) return
    const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: new Date()
    }
    dispatch(addNotes(newNote))
    setTitle('')
    setContent('')
  }

  const handleClick = () => {
    dispatch(setIsVisible(true))
    setAddNew(true)
  }

  return (
    <>
      <Header />
      <div className="p-5 flex justify-center">
        <div onClick={() => handleClick()} className='cursor-pointer justify-between items-center w-96 border-zinc-300 border-[1px] rounded  p-3 flex gap-4'>
          <p>Take a note...</p>
          <FiEdit/>
        </div>
      </div>
      <NotesList notes={notes} />
      <Modal addNew={addNew}/>
    </>
  );
}

export default App;
