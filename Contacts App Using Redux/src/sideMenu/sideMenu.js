import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./sideMenu.css"

const SideMenu = () => {

    const [isActive, setIsActive] = useState('');

    return (

        <div className='sideMenu'>

            <div className='myIntro'>

                <h3>Welcome !</h3>
                <h3>I'm Sri...</h3>

            </div>

            <div className='linksSection'>

                <Link to='/' className={isActive === "homeActive" ? "ActiveBtn" : "link"} onClick={() => { setIsActive("homeActive") }}>Home</Link>
                <Link to='/contacts' className={isActive === "contactsActive" ? "ActiveBtn" : "link"} onClick={() => { setIsActive("contactsActive") }}>Contacts</Link>
                <Link to='/notes' className={isActive === "notesActive" ? "ActiveBtn" : "link"} onClick={() => { setIsActive("notesActive") }}>Notes</Link>

            </div>

        </div>

    )
}

export default SideMenu;
