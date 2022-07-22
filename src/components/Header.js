import React from 'react'
import world from '../images/world.svg'

export default function Header() {
    return (
        <header className="header">
            <img className='header__img' src={world} alt='logo'/>
            <p className='header__txt'>my travel journal</p>
        </header>
    )
}