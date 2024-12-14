"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub, BsGlobe } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import Link from 'next/link'
import WorkSlidersBtn from '@/components/WorkSlidersBtn'


const projects = [
  {
    num: "01",
    category: "Frontend",
    title: 'Nourriture du monde',
    description: "Nourriture du Monde, une entreprise d'import-export et de transport basée à Lomé, dans le quartier de Bè, souhaite se démarquer de la concurrence en créant un site web attrayant et adaptable. Ce site vise à augmenter leur visibilité en ligne et à attirer de nouveaux clients.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Jquery" }, { name: "Laravel/PHP" }],
    image: '/assets/work/ndm-frontend.jpeg',
    live: "",
    github: 'https://github.com/DevSyril/ndm-laravel.git'
  },
  {
    num: "02",
    category: "Full Stack",
    title: 'Carrabina Hoels',
    description: "Carrabina Hotels, un complexe hôtelier fictif, offre des services d'hôtellerie, de restauration et d'organisation d'événements. Suite à la création de leur site web, ils ont exprimé le besoin d'un système de gestion pour optimiser la gestion des chambres, du restaurant, des réservations et des paiements.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Javascript" }, { name: "PHP" }, { name: "Mysql" }],
    image: '/assets/work/carrabina-front.jpeg',
    live: "",
    github: 'https://github.com/DevSyril/ndm.git'
  },
  {
    num: "03",
    category: "Full Stack",
    title: 'Food Delivery',
    description: "Food Delivery, un restaurant fictif, propose des services de restauration sur place et de livraison à domicile. Pour renforcer sa présence sur le marché et promouvoir ses activités, il souhaite un site web permettant de mettre en avant ses recettes, de gérer les réservations et de recevoir les paiements efficacement.",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "React.JS" }, { name: "Express.js" }, { name: "Mongo Db" }],
    image: '/assets/work/foodel.jpeg',
    live: "",
    github: "https://github.com/DevSyril/foodDel.git"
  },
  {
    num: "04",
    category: "Full Stack",
    title: 'Ril Task',
    description: "Ril Task est une application de gestion de tâche dont la mission principale est d'aider son utilisateur à prendre des notes sur ses activités et autres rapidement et facilement et surtout de garder une trace de ses notes. Avec un design convivial, l'application est très agréable à utiliser comme en témoignent ceux qui l'on tutilisé...",
    stack: [{ name: "Html5" }, { name: "Css3" }, { name: "Next.js" }, { name: "Express.js" }, { name: "Mongo Db" }, { name: "TypeScript" }],
    image: '/assets/work/rilTask.PNG',
    live: "",
    github: "https://github.com/DevSyril/rilTask.git"
  },
]



const Work = () => {
  
  const [project, setProject] = useState(projects[0])

  const handleProjectChange = (swiper) => {

    const currentIndex = swiper.activeIndex
    setProject(() => projects[currentIndex])

  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: {
          delay: 2.4,
          duration: 0.5,
          ease: 'easeInOut',
        }
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>


          <div className="w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline"> {project.num} </div>

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'> {project.category} </h2>

              <p className='text-white/60'> {project.description} </p>

              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>

              <div className='border border-white/20'>
              </div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>En live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Dépôt Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>


          <div className="w-full">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleProjectChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>

                      <div className='absolute top-0 bottom--0 w-full h-full bg-black/10 z-10'></div>

                      <div className='relative w-full h-full'>
                        <Image
                          src={item.image}
                          fill
                          alt=''
                          className='object-cover'
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSlidersBtn containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"} 
              btnStyles={"bg-accent hover:bg-accent-hover text-primary text-22px] w-[44px] h-[44px] flex justify-center items-center transition-all"}
              iconStyles={"text-white"}/>
            </Swiper>
          </div>


        </div>
      </div>
    </motion.div>
  )
}

export default Work