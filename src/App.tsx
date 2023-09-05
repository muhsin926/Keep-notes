import { useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import Modal from "./components/Modal";

function App() {
  const [notes, setNotes] = useState([
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
  ]);
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [isVisible, setIsVisble] = useState(false)

  const addNote = () => {
    if (!title || !content) return
    const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: new Date()
    }
    setNotes([...notes, newNote])
    setTitle('')
    setContent('')
  }

  const deleteNote = (id:string) => {
      const updateNotes = notes.filter((note) => note.id != id)
      setNotes(updateNotes)
  }

  return (
    <>
      <Header />
      <div className="p-5 flex justify-center">
        <div className='xs:col-span-12 md:col-span-6 lg:col-span-4 w-96 border-zinc-300 border-[1px] rounded-xl p-5 flex flex-col gap-4'>
          <input className="focus:outline-none" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <textarea
            className="focus:outline-none"
            rows={3}
            cols={10}
            placeholder='Content...'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-end">
            <button onClick={addNote} className="bg-gray-200 py-1 px-3 rounded">Save</button>
          </div>
        </div>
      </div>
      <NotesList notes={notes} handleDeleteNote={deleteNote} />
      <Modal note={notes[0]} isVisible={isVisible}/>
    </>
  );
}

export default App;
