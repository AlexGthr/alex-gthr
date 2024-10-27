import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
            <h1>
                <a href="/" className="logo">AlexGthr</a>
            </h1>

            <div className="relative md:justify-self-center">
                <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                <Navbar navOpen={navOpen} />
            </div>

            <div href="#contact" className='flex gap-3 max-md:hidden md:justify-self-end'>
                <a href="https://github.com/AlexGthr" target='_blank'>
                    <GithubIcon 
                        color='#fff'
                        size={24}
                    />
                </a>
                <a href="https://www.linkedin.com/in/alexandre-gauthier-1639922b0/" target='_blank'>
                    <LinkedinIcon 
                        color='#fff'
                        size={24}
                    />
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header