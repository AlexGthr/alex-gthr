import React from 'react'
import { ButtonPrimary } from '../components/Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'A propos',
    href: '#about'
  },
  {
    label: 'Skill',
    href: '#about'
  },
  {
    label: 'Projets',
    href: '#work'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/AlexGthr'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alexandre-gauthier-1639922b0/'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="flex items-center justify-center mb-4">

          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className='hover:text-zinc-200'>Alex Gauthier</span> 
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer