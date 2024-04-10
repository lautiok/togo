import React, { useEffect } from 'react';
import { useNotes } from '../../context/NoteContext';
import { Link } from 'react-router-dom';
import './NotePageStyle.css';

export const NotePage = () => {
    const { getNotes, notes, delateNote } = useNotes();

    useEffect(() => {
        getNotes();
    }, []);

    const generateRandomPastelColor = () => {
        const r = Math.floor(Math.random() * 100) + 100;
        const g = Math.floor(Math.random() * 100) + 100;
        const b = Math.floor(Math.random() * 100) + 100;
        return `rgb(${r}, ${g}, ${b})`;
    };

    const getColorForNote = (noteId) => {
        const storedColor = localStorage.getItem(`noteColor_${noteId}`);
        return storedColor || generateRandomPastelColor();
    };

    const saveColorForNote = (noteId, color) => {
        if (!localStorage.getItem(`noteColor_${noteId}`)) {
            localStorage.setItem(`noteColor_${noteId}`, color);
        }
    };

    return (
        <div className='notes-page'>
            <button className='add-notes'>
                <Link to='/notes/addnotes' className='add-task-link'>
                    Add Note
                </Link>
            </button>
            <div className='note-container'>
                <div className='note-cards-container'>
                    {notes.map((note) => {
                        const noteColor = getColorForNote(note._id);
                        saveColorForNote(note._id, noteColor);
                        return (
                            <div key={note._id} className='note-card' style={{ backgroundColor: noteColor }}>
                                <h1>{note.title}</h1>
                                <p>{note.description}</p>
                                <div className='note-card-buttons'>
                                    <a href={`/notes/${note._id}`} className='edit'>
                                        Edit
                                    </a>
                                    <button onClick={() => delateNote(note._id)} className='delete'>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


