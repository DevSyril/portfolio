import { Item } from '@radix-ui/react-select'
import Link from 'next/link'
import React from 'react'

import {FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, link: 'https://github.com/DevSyril'},
    {icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/syrilkokou'},
    {icon: <FaWhatsapp />, link: 'https://wa.me/22870741970'},
    {icon: <FaEnvelope />, link: 'mailto:kokousyril@gmail.com'},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (<Link key={index} target='blank' href={item.link} className={iconStyles}>
                {item.icon}
            </Link>)
        })}
    </div>
  )
}

export default Social