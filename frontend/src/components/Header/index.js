import React from "react";
import './style.css'
import { BsFillSuitHeartFill } from 'react-icons/bs'

function Header(){
    return(
        <header>
            <h2>MyNotes  <BsFillSuitHeartFill size='25'></BsFillSuitHeartFill></h2>
        </header>
    )
}

export default Header