import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { deleteNote } from '../store/slices/notesSlices'
import { setEditNote, setIsVisible } from '../store/slices/editSlices'
import ReactPaginate from 'react-paginate'

type Note =
    {
        id: string,
        title: string,
        content: string,
        date: Date,
    }
type NotesListProps = {
    notes: {
        notes: Note[],
    },
}

const NotesList = (props: NotesListProps) => {
    const { editNote } = useAppSelector((state) => state.editSlices)
    const { searchText } = useAppSelector((state) => state.searchSlice)
    const [pageNumber, setPageNumber] = useState(0)
    const dispatch = useAppDispatch();

    const notesList = props.notes.notes.filter((note) => note.title.toLowerCase().includes(searchText.toLowerCase())) || []

    // PageNation
    const notesPerPage = 3;
    const noteVisited = pageNumber * notesPerPage;
    const pageCount = Math.ceil(notesList.length / notesPerPage)
    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    }


    const handleEditNote = (note: Note) => {
        dispatch(setEditNote(note))
        dispatch(setIsVisible(true))
    }
    return (
        <div className='p-10 gap-4 grid grid-cols-12 gap-4 mx-auto place-items-center'>
            {
                notesList.slice(noteVisited, pageNumber + notesPerPage).map((note) => (
                    <div onClick={() => handleEditNote(note)} className='xs:col-span-12 md:col-span-6 lg:col-span-4 w-96 bg-yellow-100 rounded-xl p-5 flex flex-col gap-4 cursor-pointer'>
                        <h3 className='font-semibold'>{note.title}</h3>
                        <p>{note.content}</p>
                        <div className='flex justify-between mt-3 items-center'>
                            <p className='text-sm'>{note.date.toLocaleDateString()}</p>
                            <div className='cursor-pointer' onClick={() => dispatch(deleteNote(note.id))}><MdDelete /></div>
                        </div>
                    </div>
                ))
            }
            <div className='col-span-12 mt-10'> <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            /></div>
        </div>
    )
}

export default NotesList