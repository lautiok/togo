import React from 'react'
import { useForm } from 'react-hook-form'
import { useNotes } from '../../context/NoteContext'
import { useNavigate } from 'react-router-dom'

export const NoteFormPage = () => {
    const { register, handleSubmit, } = useForm()
    const { createNote } = useNotes()
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        createNote(data)
        navigate('/notes')
    })

    return (
        <div className='task-form-page'>
            <h1>New Note</h1>
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

        </div>
    )
}
