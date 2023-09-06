import React, { MouseEvent, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setEditNote, setIsVisible } from '../store/slices/editSlices'


const Modal = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [edit, setEdit] = useState(false)
    const { editNote, isVisible } = useAppSelector((state) => state.editSlices)
    const dispatch = useAppDispatch()

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const divElement = e.target as HTMLDivElement;
        if (divElement.id === 'outerDiv') {
            dispatch(setIsVisible(false))
            dispatch(setEditNote({}))
        }
    }

    const handleSubmit =() => {
        if(!edit) {
            setEdit(true)
            return
        }
       const editedNote = {
        id: editNote.id,
        title: title,
        content: content,
        date: new Date()
       }

    }
    if (!isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='outerDiv' onClick={(e) => handleClick(e)}>
            <div className=' w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col gap-4'>
                <input className="focus:outline-none" type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <textarea
                    className="focus:outline-none"
                    rows={3}
                    cols={10}
                    placeholder='Content...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex justify-end">
                    <button onClick={() => handleSubmit()} className="bg-gray-200 py-1 px-3 rounded">{edit? 'Save' : 'Edit'}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal