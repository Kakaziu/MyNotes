import React, { useEffect, useState } from "react";
import './style.css'
import api from "../../services/api";

function NoteForm(props){
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() =>{
      const btnSubmit = document.getElementById('btn')

      if(title && desc){
        btnSubmit.style.backgroundColor = 'purple'
      }else{
        btnSubmit.style.backgroundColor = 'rgba(128, 0, 128, 0.575)'
      }
    }, [title, desc])

    async function handleSubmit(e){
        e.preventDefault()
    
        const response = await api.post('/', {
          title: title,
          desc: desc,
          fav: false
        })
    
        props.onAddItem(response.data)
        setTitle('')
        setDesc('')
      }

      function handleChangeTitle(e){
        const value = e.target.value

        setTitle(value)
      }

      function handleChangeDesc(e){
        const value = e.target.value

        setDesc(value)
      }

    return(
        <aside className="noteForm">
            <p><strong>Crie uma tarefa</strong></p>

            <form onSubmit={handleSubmit}>
                <div className="camp">
                    <label htmlFor="title">Titulo da tarefa</label>
                    <input onChange={handleChangeTitle} type='text' maxLength='30' value={title}/>
                </div>
                
                <div className="camp">
                    <label htmlFor="desc">Descrição</label>
                    <textarea onChange={handleChangeDesc} value={desc}/>
                </div>

                <button id="btn">Salvar</button>
            </form>
        </aside>
    )
}

export default NoteForm