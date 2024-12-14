"use client"
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import { animate, motion } from 'framer-motion'
import Link from 'next/link'


const services = [
  {
    num: '01',
    title: 'Développement Web',
    description: "Je conçois et développe les sites web (Vitrines / E-commerce), portfolios personnels et même les applications web de vos entreprises, vous donnant de meilleures chances d'accroître vos résultats financiers ou visibilité.",
    href: ""
  },
  {
    num: '02',
    title: 'Développement Mobile',
    description: "Je conçois et développe des applications mobiles pour android afin de répondre aux besoins de votre entreprise, vous rapprocher de votre clientèle et vous démarquer de la concurrence.",
    href: ""
  },
  {
    num: '03',
    title: 'Développement Desktop',
    description: "Je conçois et développe des applications pour ordinateur (logiciels de gestion de stock, applications de suivi des relations clients (CRM), logiciels d'archivage de documents, etc), bref tout ce qu'il faut pour automatiser les tâches au sein de l'entreprise.",
    href: ""
  },
  {
    num: '04',
    title: 'UI/UIX Design',
    description: "Je designe les interfaces graphiques de vos sites web et applications web, mobiles et desktop en prenant à coeur d'améliorer au maximum l'expérience utilisateur, garantissant une meilleure prise en main pour vos utilisateurs. ",
    href: ""
  },

]


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className="w-full flex justify-between items-center">

                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>

                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>

                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'> {service.title} </h2>
                <p className='text-white/60'> {service.description} </p>

                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services