"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'


const links = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'A propos', path: '/resume' },
    { name: 'Mes travaux', path: '/work' },
    { name: 'Contact', path: '/contact' },
]


const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <>
                <SheetContent className="flex flex-col">
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href={"/"}>
                            DevSyril<span className='text-accent'>.</span>
                        </Link>
                    </div>

                    <nav className='flex flex-col justify-center items-center gap-8'>
                        {links.map((link, index) => {
                            return (<Link href={link.path} key={index} className={`
                        ${link.path === pathname && "text-accent border-b-2 border-accent"}
                        text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>)
                        })}
                    </nav>
                </SheetContent>
            </>
        </Sheet>
    )
}

export default MobileNav