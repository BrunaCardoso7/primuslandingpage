/* eslint-disable @next/next/no-img-element */
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
                <img className="logo" src="/images/logoPrimus.png" alt="" />
            </div>
            <Menu />
            <Navbar/>
        </div>
    </header>
  )
}

