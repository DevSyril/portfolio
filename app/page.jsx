import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'


const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>

          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Développeur d’applications</span>
            <h1 className='h2 mb-6 mt-6'>Hello ! Je suis <br />
              <span className='h1 text-accent'>Syril Kokou</span></h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              J’excelle dans la création d’expériences numériques élégantes et
              je maîtrise divers langages de programmation et technologies
            </p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/assets/cv-ril.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg"
                  className="uppercase flex items-center gap-2">
                  <span >Télécharger mon CV</span>
                  <FiDownload className='text-xl' />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover;transition-all duration-500 "} />
              </div>

            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>

        {/* <Stats /> */}
      </div>
    </section>
  )
}

export default Home