"use client"
import React, { useState } from 'react';
import './styles/menu.scss'


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
        <button onClick={showMenu} className={`${isOpen? 'menu-open': 'menu'}`}>
            <div  id="x1" className="row-menu"></div>
            <div id="x" className="row-menu"></div>
            <div  id="x2"  className="row-menu"></div>
        </button>
        {isOpen && (
            <div className="nav-bar">
                <a className='link' href="#">Home</a>
                <a className='link' href="#">Localização</a>
                <a className='link' href="#">Catálogo</a>
                <a className='link' id='btn-fale-conosco' href="#">Fale conosco</a>
            </div>
        )

        }
    </div>
    );
};

export default Menu;