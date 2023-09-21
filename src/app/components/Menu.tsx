"use client"
import React, { useState } from 'react';
import './styles/menu.scss'
import Navbar from './navBar';

interface MenuProps {
    
}

const Menu: React.FC<MenuProps> = ({  }) => {

    const [isOpen, setOpen] = useState(false);

    const showMenu = ()=>{
        console.log(isOpen)
        return setOpen(!isOpen)
    }
    return (
    <div className='menu-menu'>
        <button onClick={showMenu} className={`menu-burger ${isOpen? 'menu-open': 'menu'}`}>
            <div  id="x1" className="row-menu"></div>
            <div id="x" className="row-menu"></div>
            <div  id="x2"  className="row-menu"></div>
        </button>
        {isOpen && (
            <Navbar/>
        )
        }
    </div>
    );
};

export default Menu;