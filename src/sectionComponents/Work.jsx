import React from 'react'
import ProjectCard from '../components/ProjectCard';

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Project number 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/Session.png',
      title: 'Dashboard admin',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/Forum.png',
      title: 'Site Forum',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/Cinema.png',
      title: 'Movies - Cinema',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
      tags: ['HTML5', 'PHP', 'Symfony'],
      projectLink: 'https://github.com/AlexGthr'
    },
    {
      imgSrc: '/images/beergarden.png',
      title: 'Beergarden',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.',
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