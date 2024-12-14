"use client"

import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaPhp, FaJava, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiWordpress, SiExpress, SiLaravel, SiJquery, SiBootstrap, SiLinkedin } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'


const about = {
  title: "A props de moi",
  description: "<<La satisfaction de voir un travail bien fait est la plus grande récompense pour celui qui s'investit avec passion et détermination dans chaque tâche.>>. Passionné de technologies depuis ma plus tendre enfance, je m’évertue à faire en sorte que ces paroles prennent sens à travers toutes mes œuvres, aidé de ma créativité et de ma ténacité à toute épreuve",
  info: [
    {
      fieldname: "Nom",
      fieldValue: "Syril KOKOU"
    },
    {
      fieldname: "Tel",
      fieldValue: "(+228) 70 74 19 70"
    },
    {
      fieldname: "Expérience",
      fieldValue: "01 Année"
    },
    {
      fieldname: "email",
      fieldValue: "kokousyril@gmail.com"
    },
    {
      fieldname: "Nationalité",
      fieldValue: "Togolaise"
    },
    {
      fieldname: <SiLinkedin/>,
      fieldValue: "linkedin.com/in/syrilkokou"
    },
    {
      fieldname: "Freelance",
      fieldValue: "Disponible"
    },
  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon Expérience",
  description: "Développeur full-stack maîtrisant les technologies du web, mobile et du desktop, j'ai eu l'opportunité de travailler dans de merveilleuses entreprises lesquelles m'ont beaucoup appris.",
  items: [
    {
      company: "Digitalis Togo",
      position: "Développeur Fullstack",
      duration: "2024 - Présent",
    },
    {
      company: "Talented Business Center",
      position: "Développeur Wordpress",
      duration: "2022 - 2023",
    },
  ]

}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Ma scolarité",
  description: "Passionné d'informatique et de droit depuis ma plus tendre enfance, j'ai entrepris un parcours dans les deux directions. ",
  experiences: [
    {
      institution: "ADN - Simplon.co",
      position: "Développement web et web mobile",
      duration: "2023",
    },

    {
      institution: "Université de Lomé",
      position: "Droit privé - Droit des affaires",
      duration: "2019-2022",
    },
  ]

}


const skills = {
  title: "Mes Skills",
  description: "De par ma formation et mon auto-formation de développeur full-stack, voci toutes les compétences et technologies que j'ai acquises.",
  skills: [
    {
      name: "HTML5",
      icon: <FaHtml5 />
    },
    {
      name: "CSS3",
      icon: <FaCss3 />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "PHP",
      icon: <FaPhp />
    },
    {
      name: "Java",
      icon: <FaJava />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />
    },
    {
      name: "Figma",
      icon: <FaFigma />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />
    },
    {
      name: "Wordpress",
      icon: <SiWordpress />
    },
    {
      name: "Express.js",
      icon: <SiExpress />
    },
    {
      name: "Laravel",
      icon: <SiLaravel />
    },
    {
      name: "Jquery",
      icon: <SiJquery />
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap />
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>

      <div className="container mx-auto">
        <Tabs defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>A propos de moi</TabsTrigger>
          </TabsList>


          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'> {experience.title} </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'> {experience.description} </p>
                <ScrollArea className="h-[400px]" >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span> {item.duration} </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'> {item.position} </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[10px] h-[10px] rounded-full bg-accent'></span>
                            <p className='text-white/60'> {item.company} </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'> {education.title} </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'> {education.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                    {education.experiences.map((item, index) => {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span> {item.duration} </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'> {item.position} </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[10px] h-[10px] rounded-full bg-accent'></span>
                            <p className='text-white/60'> {item.institution} </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-4'>
                  <h3 className='text-4xl font-bold'> {skills.title} </h3>
                  <p className='max-[600px] text-white/60 mx-auto xl:mx-0'> {skills.description} </p>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skills.map((skill, index) => {
                      return (
                        <li key={index} className='flex items-center gap-3'>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center'>
                                <div className='text-4xl group-hover:text-accent transition-all duration-300'> {skill.icon} </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'> {skill.name} </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'> {about.title} </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'> {item.fieldname} </span>
                        <span className='text-xl'> {item.fieldValue} </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume