import React from 'react'

import SkillCard from '../components/SkillCard'


const skillItem = [
    {
      imgSrc: '/images/html.png',
      label: 'HTML5',
      desc: 'Markup Language'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/php.png',
      label: 'PHP',
      desc: 'Server-side Language'
    },
    {
      imgSrc: '/images/symfony.svg',
      label: 'Symfony',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/nextjs.svg',
      label: 'NextJS',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
  return (
    <section id='skill' className="section">
        <div className="container">

            <h2 className="headline-2">
              Outils essentiels que j'utilise
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
              Découvrez les outils et technologies puissants que j'utilise pour créer des sites web et applications performants et d'exception.
            </p>

            <div className="grid  gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc}, key) => (
                        <SkillCard 
                          key={key}
                          imgSrc={imgSrc}
                          label={label}
                          desc={desc}
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
