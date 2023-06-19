import React, { useState } from 'react'
import logo from "./images/images/logo.svg"
import CloseIcon from '@mui/icons-material/Close';
function Header() {
    const [menu, setmenu] = useState(false)

    function open(e) {
        e.preventDefault()
        // sidebar.style.right = 0
        setmenu(true)
        
    }
    function close()
        {
            setmenu(false)
        }
    return (
        <header>
            <img src={logo}></img>
            <ul>
                <li><a href="">model S</a></li>

                <li><a >model 3</a></li>

                <li><a href="">model x</a></li>

                <li><a href="">model y</a></li>

                <li><a href="">solar roof</a></li>

                <li><a href="">solar roof</a></li>
            </ul>
            <ul>
                <li><a href="">shop</a></li>

                <li><a href="">account </a></li>

                <li onClick={open}><a href="" className='open' >menu </a></li>
            </ul>

            {/* ternary operator */}
            <ul className='sidebar' style={{right: (menu === true) ? 0 : '-250px'}}> 
                <CloseIcon className='cross'  onClick={close}/>
                <li>
                    <a href="">model x</a>
                </li>
                <li>
                    <a href="">model y</a>
                </li>
                <li>
                    <a href="">model s</a>
                </li>
                <li>
                    <a href="">model 3</a>
                </li>
                <li>
                    <a href=""> sloar roof</a>
                </li>
                <li>
                    <a href="">solar panal</a>
                </li>
            </ul>
        </header>
    )
}
export default Header