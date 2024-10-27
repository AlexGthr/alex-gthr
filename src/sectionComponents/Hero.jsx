import React from 'react'
import { ButtonPrimary, ButtonOutline } from '../components/Button'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>

          <div className="flex items-center gap-3">

            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar.jpg"
                width={40}
                height={40}
                alt="Henry clark portrait"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Open to work
            </div>

          </div>

          <h2 className="headline-1 max-w-[20ch] sm:max-w-[30ch] lg:max-w-[20ch] mt-5 mb-8 lg:mb-10">
          Créer des applications web évolutives et performantes
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[400px] ml-auto rounded-full ring ring-zinc-700 overflow-hidden">
            <img
              src="/images/hero_banner.png"
              width={400}
              height={400}
              alt="Alex Gauthier"
              className='w-full'
            />
          </figure>
        </div>

      </div>
    </section>
  )
}

export default Hero