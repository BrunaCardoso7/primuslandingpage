"use client"
import React from 'react';
import './styles/header.scss'
import Menu from './Menu';
import Navbar from './navBar';

export function Header(){
  return(
    <header>
        <div className="header-wrapper">
            <div className="logo">
                <h3>Primus<span> motores</span></h3>
            </div>
            <Menu />
            <Navbar/>
        </div>
    </header>
  )
}

