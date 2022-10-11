import React, { useEffect, useState } from 'react';
import api from './services/api';
import NoteForm from './components/NoteForm';
import Header from './components/Header';
import Notes from './components/Notes';
import './global.css';
import './main.css'

function App() { 
  const [allNotes, setAllNotes] = useState([])

  useEffect(() =>{
    getNotes()
  }, [])

  async function getNotes(){
    const response = await api.get('/')

    setAllNotes(response.data)
  }

  function onAddItem(note){
    setAllNotes([...allNotes, note])
  }

  async function onDeleteItem(id){
    const response = await api.delete(`/${id}`)
    const updateNotes = allNotes.filter(note => note._id !== response.data._id)

    setAllNotes(updateNotes)
  }

  async function onSetFav(e, id){
    const response = await api.post(`/check/${id}`)

    if(response){
      getNotes()
    }
  }

  return (
   <div className='app'>
      <Header></Header>
      <main>
        <NoteForm onAddItem={onAddItem}></NoteForm>
        <Notes allNotes={allNotes} onDeleteItem={onDeleteItem} onSetFav={onSetFav}></Notes>
      </main>
        
   </div>
  );
}

export default App;
