import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNotes } from '../../context/NoteContext'
import { useNavigate, useParams } from 'react-router-dom'

export const NoteUpdate = () => {
    const { register, handleSubmit, setValue, getValues } = useForm()
    const { updateNote, getNote } = useNotes()
    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        async function loadNote() {
            if (params.id) {
                const note = await getNote(params.id)
                console.log(note)
                setValue('title', note.title)
                setValue('description', note.description)
            }
        }
        loadNote()
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        const { title, description } = data
        const updatedNote = { title, description }
        try {
            await updateNote(params.id, updatedNote)
            navigate('/notes')
        } catch (error) {
            console.log(error)
        }
    })
    return (
        <div className='task-form-page'>
            <h1>Update Note</h1>
            <div className='register-task'>
                <form className='register-form-task' onSubmit={onSubmit}>
                    <input type="text" placeholder='Title'
                        {...register('title', { required: true })}
                        autoFocus
                    />
                    <textarea rows="3" placeholder='Description'
                        {...register('description', { required: true })}></textarea>

                    <button>Save Note</button>
                </form>
            </div>

        </div >
    )
}
