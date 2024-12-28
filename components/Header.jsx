import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
const Header = () => {
    return (
        <header className="">
            <div className="mt-5 px-[3rem]">
                <nav className='flex justify-between items-center'>
                    <Link href="/"><h2 className="text-4xl font-semibold">Strive</h2></Link>
                    <div className="flex items-cn">
                        <Button className="font-semibold me-5 text-md">Create Project</Button>
                        <SignedOut>
                            <Button className="font-semibold text-md"><SignInButton /></Button>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
