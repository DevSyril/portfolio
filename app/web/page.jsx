"use client"
import React from 'react'
import { animate, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


const services = [
    { title: "Sites vitrines" },
    { title: "E-commerces" },
    { title: "Portfolios" },
    { title: "Applications web" },
    { title: "Landing pages" },
    { title: "Sites responsifs" },
]


const page = () => {
    return (
        <section className='min-h-[80vh] flex flex-col py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
                    }}
                    className=''>

                    <div className=''>
                        <h1 className="text-6xl font-extrabold text-outline text-transparent mt-[50px] text-center">Boostez votre présence en ligne <br />avec des sites web professionnels et performants!</h1>

                        <div className="flex justify-center mt-[30px] gap-[20px]">
                            {services.map((service, index) => {
                                return (
                                    <div key={index} className='px-[12px] py-[6px] border-2 rounded-full border-white '>
                                        <h3 className='font-bold text-white'> {service.title} </h3>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-[30px] text-center">
                            <a href='/contact'>
                                <Button>
                                    Commencez votre projet
                                </Button>
                            </a>
                        </div>

                    </div>


                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] mt-[70px]">

                        <div className='w-full xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>

                            <div className="flex flex-col gap-[15px] h-[50%]">
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>Pourquoi Mes services?</h2>
                                <p className="text-justify	">
                                    Désormais, Avoir une présence en ligne est devenue indispensable.
                                    <br />
                                    Mes sites sont conçus pour attirer, engager et convertir vos visiteurs en clients. Grâce à des designs modernes, une navigation intuitive, et des performances optimales, vous bénéficiez d’une plateforme qui reflète parfaitement votre marque et booste votre visibilité en ligne.
                                    Faire appel à nos services, c’est :
                                </p>
                                <ul className='list-disc ml-2 text-justify'>
                                    <li>
                                        Profiter d’un accompagnement personnalisé à chaque étape de votre projet.
                                    </li>
                                    <li>
                                        Garantir des sites optimisés pour les moteurs de recherche (SEO) et adaptés à tous les écrans (responsive design).
                                    </li>
                                    <li>
                                        Accroître vos chances de générer des revenus grâce à une stratégie digitale performante.
                                    </li>
                                </ul>

                                <p className='text-justify'>Vous rêvez d’un site qui donne un véritable élan à votre activité ? Prenez contact dès aujourd’hui pour concrétiser vos projets.</p>
                            </div>

                        </div>

                        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl'>

                            <div className='relative w-full h-full rounded-xl'>
                                <Image
                                    src={"/assets/work/thumb1.png"}
                                    fill
                                    alt=''
                                    className='object-cover rounded-xl'
                                />
                            </div>
                        </div>

                    </div>

                


                </motion.div>
            </div>
        </section>
    )
}

export default page