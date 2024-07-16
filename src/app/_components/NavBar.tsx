'use client'
import Link from 'next/link'
import React from 'react'
import LogoutIco from '../Icons/LogoutIco'
import Image from 'next/image'
import './style.css'
import { useSession } from 'next-auth/react'

const NavBar = () => {
    const session = useSession()

    return (
        <div className="flex justify-between items-center py-2 px-4 border-b border-gray-500 shadow-sm shadow-gray-300">
            <Link className="flex gap-1 items-center group/logo" href="/">
                <LogoutIco color="#f97316" width="44px"></LogoutIco>
                <h1>Log in</h1>
            </Link>

            {session.status === 'authenticated' ? (
                <div className="flex items-center gap-4">
                    <h2>{session.data?.user?.name}</h2>
                    <Link href="/userpage">
                        <div className="w-10 h-10 bg-slate-300 border-2 border-gray-400 rounded-full overflow-hidden">
                            {session.status === 'authenticated' && (
                                <Image
                                    src={session.data?.user?.image}
                                    width={50}
                                    height={50}
                                    alt="user-image"
                                ></Image>
                            )}
                        </div>
                    </Link>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <Link href="/auth/login" className="font-bold">
                        Login
                    </Link>
                    <Link href="/auth/register">
                        <button className=" px-8 py-2 text-lg text-white font-bold rounded-full bg-gradient-to-br from-orange-500 to-orange-700">
                            Register
                        </button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default NavBar
