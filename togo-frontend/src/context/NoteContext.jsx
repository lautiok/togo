import { createContext, useContext, useState } from "react";
import { createNoteRequest, deleteNoteRequest, getNoteRequest, getNotesrequest, updateNoteRequest } from '../api/notes';

const NotesContext = createContext();

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) {
        throw new Error('useNotes must be used within a NotesProvider');
    }

    return context;
}

export function NoteProvider({ children }) {
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {
        try {
            const res = await getNotesrequest();
            setNotes(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const createNote = async (note) => {
        const res = await createNoteRequest(note);
        console.log(res)
    }

    const delateNote = async (id) => {
        try {
            const res = await deleteNoteRequest(id);

            if (res.status === 204) setNotes(notes.filter(note => note._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getNote = async (id) => {
        try {
            const res = await getNoteRequest(id);
            return res.data
        } catch (error) {
            console.log(error)
        }
    }


    const updateNote = async (id, note) => {
        try {
            await updateNoteRequest(id, note)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <NotesContext.Provider value={{
            createNote,
            getNotes,
            delateNote,
            notes,
            getNote,
            updateNote

        }}>


            {children}
        </NotesContext.Provider>
    )
}