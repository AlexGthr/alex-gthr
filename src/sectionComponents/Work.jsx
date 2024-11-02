import React from 'react'
import ProjectCard from '../components/ProjectCard';

const works = [
  {
    imgSrc: '/images/NessPrimeurs.png',
    title: 'Ness Primeurs',
    desc: 'Projet e-commerce complet avec un back-office pour gérer produits, commandes et clients.',
    tags: ['HTML5', 'CSS3', 'PHP', 'Symfony'],
    projectLink: 'https://github.com/AlexGthr'
  },
  {
    imgSrc: '/images/Session.png',
    title: 'Dashboard admin',
    desc: 'Application de gestion des sessions de formation, réalisée dans le cadre de ma formation.',
    tags: ['HTML5', 'CSS3', 'PHP', 'Symfony'],
    projectLink: 'https://github.com/AlexGthr'
  },
  {
    imgSrc: '/images/Forum.png',
    title: 'Site Forum',
    desc: 'Forum de discussion interactif permettant des échanges entre utilisateurs, développé durant ma formation.',
    tags: ['HTML5', 'CSS3', 'PHP'],
    projectLink: 'https://github.com/AlexGthr'
  },
  {
    imgSrc: '/images/Cinema.png',
    title: 'Movies - Cinema',
    desc: 'Application de gestion de films, premier projet d’apprentissage pour explorer les bases du développement.',
    tags: ['HTML5', 'CSS3', 'PHP'],
    projectLink: 'https://github.com/AlexGthr'
  },
  {
    imgSrc: '/images/beergarden.png',
    title: 'Beergarden',
    desc: 'Intégration complète d’une maquette pour un site de bar à bières, conçu dans un exercice de design.',
    tags: ['HTML5', 'CSS3'],
    projectLink: 'https://github.com/AlexGthr'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

            <h2 className="headline-2 mb-8">
                Mes projets réalisés
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, desc, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        desc={desc}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work