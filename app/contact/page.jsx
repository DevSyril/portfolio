"use client"
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+228) 70 74 19 70"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kokousyril@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Adakpamé, Zorobar, Lomé"
  },
]

const Contact = () => {

  const [lastname, setLastname] = useState("")
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('lastname', lastname)
    formData.append('firstname', firstname)
    formData.append('email', email)
    formData.append('phoneNumber', phoneNumber)
    formData.append('subject', subject)
    formData.append('message', message)


    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: 'Portfolio - Nouveau message',
        text: 'Nouveau message depuis le portfolio.',
        html: `<div>
          <h1> Vous venez de recevoir un nouveau message depuis votre portfolio</h1>
          <h3>Expéditeur : ${lastname + " " + firstname} </h3>
          <h3>Service demandé : ${subject} </h3>
          <h4>Adresse email : ${email} </h4>
          <h4>Numero de téléphone : ${phoneNumber} </h4>
          <h4>Message : </h4> <br />  <p> ${message} </p>
        </div>`,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      toast.success('Email envoyé avec succès !');
      setLoading(false)

      setTimeout(() => {
        window.location.reload();
      },2000)
      
    } else {
      toast.error('Échec de l\'envoi de l\'email.');
      setLoading(false)
      
    }

  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className='py-6'>

      <ToastContainer stacked/>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>

          <div className='xl:w-[54%]  order-2 xl:order-none'>

            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                Je vous accompagne dans tout votre processus de digitalisation en transposant vos idées dans la réalité, pour que vous atteigniez les objectifs que vous avez définis!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Prénom" onChange={(e) => setFirstname(e.target.value)} />
                <Input type="lastname" placeholder="Nom de famille" onChange={(e) => setLastname(e.target.value)} />
                <Input type="email" placeholder="Adresse email" onChange={(e) => setEmail(e.target.value)} />
                <Input type="phone" placeholder="Téléphone" onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>

              <Select required onValueChange={(e) => setSubject(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectionner un service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Sélectionner un service</SelectLabel>
                    <SelectItem value="Développement web">Développement web</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Développement mobile">Développement mobile</SelectItem>
                    <SelectItem value="Développement Desktop">Développement Desktop</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-[200px]" placeholder="Ecrivez votre message ici" onChange={(e) => setMessage(e.target.value)} />

              <Button size="" className="max-w-40">{loading ? "Envoi ..." : "Envoyer"}</Button>
            </form>
          </div>

          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item) => {
                return (
                  <li key={item.title} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center'>
                      <div className='text-[28px]'> {item.icon} </div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'> {item.title} </p>
                      <h3 className='text-xl'> {item.description} </h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </div>

    </motion.section>
  )
}

export default Contact