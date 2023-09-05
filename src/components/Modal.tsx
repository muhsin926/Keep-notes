import React from 'react'

type ModalProps = {
    note: {
        id: string,
        title: string,
        content: string,
        date: Date,
    },
    isVisible: boolean
}

const Modal = (props: ModalProps) => {
    if(!props.isVisible) return null
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className=' w-96 border-zinc-300 bg-white border-[1px] rounded-xl p-5 flex flex-col gap-4'>
                <input className="focus:outline-none" type="text" value={props.note.title} placeholder="Title" />
                <textarea
                    className="focus:outline-none"
                    rows={3}
                    cols={10}
                    placeholder='Content...'
                    value={props.note.content}
                // onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex justify-end">
                    <button className="bg-gray-200 py-1 px-3 rounded">Update</button>
                </div>
            </div>
        </div>
    )
}

export default Modal