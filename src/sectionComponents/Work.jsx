import React from 'react'
import ProjectCard from '../components/ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 1',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 2',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 3',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 4',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 5',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 6',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">

            <h2 className="headline-2 mb-8">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
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