import React from 'react'
import { MdDelete } from 'react-icons/md'

type NotesListProps = {
    notes: {
        id: string,
        title: string,
        content: string,
        date: Date,
    }[],
    handleDeleteNote: (id: string) => void
}

const NotesList = (props: NotesListProps) => {
    return (
        <div className='p-10 gap-4 grid grid-cols-12 gap-4 mx-auto '>
            {
                props.notes.map((note) => (
                    <div className='xs:col-span-12 md:col-span-6 lg:col-span-4 w-96 bg-yellow-100 rounded-xl p-5 flex flex-col gap-4'>
                        <h3 className='font-semibold'>{note.title}</h3>
                        <p>{note.content}</p>
                        <div className='flex justify-between mt-3 items-center'>
                            <p className='text-sm'>{note.date.toLocaleDateString()}</p>
                            <div  className='cursor-pointer' onClick={() => props.handleDeleteNote(note.id)}><MdDelete /></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NotesList