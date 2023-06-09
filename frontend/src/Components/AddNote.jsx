import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = (props) => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { addNote } = context;
    const [note, setNotes] = useState({ title: "", description: "", tag: "" })

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNotes({ title: "", description: "", tag: "" })
        props.showalert("Notes Added Successfully", "success",)
    }
    const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <div className="containerd my-3 fl-c">
                <h2>Add a note</h2>
                <form className='my-3 fl-c'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={note.title} id="title" onChange={onChange} />
                    </div>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor="tag">Tag</label>
                        <input type="text" name="tag" className="form-control" id="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label txt1">Description</label>
                        <input type="text" className="form-control" id="description" value={note.description} name="description" onChange={onChange} />
                    </div>
                  
                    <button type="submit" disabled={note.title.length < 5 || note.description.length < 5} className="btn btn-primary" onClick={handleclick}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
