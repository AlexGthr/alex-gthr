import React from 'react'


const aboutItem = [
    {
        label: 'Motivation',
        number: 100
    },
    {
        label: 'Projets',
        number: 5
    },
];

const About = () => {
    return (
        <section id="about" className='section'>
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Après une reconversion de la vitrerie miroiterie au développement web, je viens de terminer ma formation et d’obtenir mon titre de développeur. Je suis à la recherche de ma première expérience pour mettre mes compétences en pratique et créer des solutions web modernes et efficaces.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItem.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    {number === 100 ? (
                                        <span className="text-emerald-600 font-semibold md:text-3xl">%</span>
                                    ) : (
                                        <span className="text-emerald-600 font-semibold md:text-3xl">+</span>
                                    )}
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}


                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            width={30}
                            height={30}
                            className='ml-auto md:w-[40px] md:h-[40px]'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About