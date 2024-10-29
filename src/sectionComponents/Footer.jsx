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

        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-2 mb-8 lg:max-w-[12ch]">
              Commençons à travailler ensemble dès aujourd'hui !
            </h2>

            <ButtonPrimary 
              label="Start project" 
              href="mailto:agauthier5@outlook.fr" 
              icon="chevron_right"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2">Sitemap</p>

              <ul>
                {sitemap.map(({label, href}, key) => (
                  <li key={key}>
                    <a href={href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({label, href}, key) => (
                  <li key={key}>
                    <a href={href} target='_blank' className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-10 mb-4">

          <p className="text-zinc-500 text-sm">
            &copy; 2024 <a href="https://www.youtube.com/watch?v=k3JMkRwd_Nw" className='hover:text-zinc-200'>codewithsadee</a> 
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer