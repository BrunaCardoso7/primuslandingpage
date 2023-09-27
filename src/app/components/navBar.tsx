import React from 'react';
import './styles/navbar.scss'


interface NavbarProps {
    
}

const Navbar: React.FC<NavbarProps> = ({  }) => {
    return (
        <>
            <div className="nav-bar">
                <a className='link' href="#">Home</a>
                <a className='link' href="#">Catálogo</a>
                <a className='link' href="#">Localização</a>
                <a className='link' id='btn-fale-conosco' href="#">Fale conosco</a>
            </div>
        </>
    );
};

export default Navbar;
