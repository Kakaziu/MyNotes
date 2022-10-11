import React, { useState } from "react";
import './style.css'
import {AiTwotoneDelete, AiFillCheckCircle} from 'react-icons/ai'
import api from "../../services/api";

function Notes(props){

    const [changedDesc, setChangedDesc] = useState('')

    async function handleEdit(e, notes, id){
        e.style.boxShadow = 'none'
        e.style.cursor = 'default'
 
        if(changedDesc && changedDesc !== notes){
            await api.post(`/edit/${id}`, {
                desc: changedDesc
            })
        }
    }

    function handleClick(e){
        e.style.boxShadow = '0 0 5px black'
        e.style.borderRadius = '5px'
        e.style.cursor = 'text'
    }

    return(
        <ul>
            {props.allNotes.map(note => {
                return (<li className="note" key={note._id}>
                    <div className={note.checked ? 'checkedNote' : 'title'}>
                        <p><strong>{note.title}</strong></p>
                        <span className="binIcon" onClick={async () => await props.onDeleteItem(note._id)}><AiTwotoneDelete size='20'></AiTwotoneDelete></span>
                    </div>

                    <div className="desc">
                        <textarea 
                            defaultValue={note.desc} 
                            onChange={e => setChangedDesc(e.target.value)}
                            onBlur={(e) => handleEdit(e.target, note.desc, note._id)}
                            onClick={(e) => handleClick(e.target)}
                        />
                    </div>

                    <div className="iconDiv">
                        <span className={note.checked ? 'favIcon checked': 'favIcon'} onClick={(e) => props.onSetFav(e.target, note._id)}><AiFillCheckCircle size='20'/></span>
                    </div>
                </li>)
            })}        
        </ul>
    )
}

export default Notes