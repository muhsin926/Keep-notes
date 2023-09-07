import React from 'react';
import { useState } from "react";
import Header from "../components/Header";
import NotesList from "../components/NotesList";
import Modal from "../components/Modal";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {FiEdit} from 'react-icons/fi'
import { setIsVisible } from "../store/slices/editSlices";

const HomePage = () => {
    const notes = useAppSelector((state) =>  state.notes)
  const [addNew, setAddNew] = useState(false)
  const dispatch = useAppDispatch()

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
  )
}

export default HomePage