"use client"
import React from 'react';
import './styles/header.scss'
import Menu from './Menu';

export function Header(){
  return(
    <div className="header-wrapper">
        <div className="logo">
            <h3>Primus<span> motores</span></h3>
        </div>
        <Menu/>
    </div>
  )
}

