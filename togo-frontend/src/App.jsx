import React from 'react'
import { Authprovider } from './context/AutchContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { TaskPage } from './pages/TaskPage/TaskPage'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'
import { TaskFormPage } from './pages/TaskFormPage/TaskFormPage'
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { ProtectRouter } from './ProtectRouter'
import { TaskProvider } from './context/tasksContext'
import { TaskUpdate } from './pages/TaskUpdate/TaskUpdate'
import './App.css'
import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage'
import { Contacts } from './pages/Contacts/Contacts'
import { NotePage } from './pages/NotesPage/NotePage'
import { NoteFormPage } from './pages/NoteFormPage/NoteFormPage'
import { NoteUpdate } from './pages/NoteUpdate/NoteUpdate'
import { NoteProvider } from './context/NoteContext'




function App() {
  return (
    <>
      <Authprovider>
        <TaskProvider>
          <NoteProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/aboutus' element={<AboutUsPage />} />
                <Route path="/contact" element={<Contacts />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectRouter />} >
                  <Route path="/tasks" element={<TaskPage />} />
                  <Route path="/tasks/addtask" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskUpdate />} />
                  <Route path="/notes" element={<NotePage />} />
                  <Route path="/notes/addnotes" element={<NoteFormPage />} />
                  <Route path="/notes/:id" element={<NoteUpdate />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </NoteProvider >
        </TaskProvider>
      </Authprovider>


    </>
  )
}

export default App
