import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import UserMenu from './UserMenu'
const Header = () => {
    return (
        <header>
            <div className="mt-5 px-[3rem]">
                <nav className='flex justify-between items-center'>
                    <Link href="/"><h2 className="text-4xl font-semibold">Strive</h2></Link>
                    <div className="flex items-center">
                        <Button className="font-semibold me-5 ">Create Project</Button>
                        <SignedOut>
                            <SignInButton forceRedirectUrl='/onboarding'>
                                <Button className=" font-semibold">Login</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserMenu />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
