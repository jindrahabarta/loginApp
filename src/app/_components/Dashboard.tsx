'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import LogoutIco from '../Icons/LogoutIco'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'

const Dashboard = () => {
    const session = useSession()

    const signOutt = () => {
        signOut().then(() => {
            redirect('/'), toast.success('Successfully logout')
        })
    }

    return (
        <section className="flex flex-col items-center gap-8 ">
            <h1 className="font-bold">
                {session.status === 'authenticated' &&
                    'Hi, ' + session.data.user?.name}
            </h1>
            <div className="flex w-1/2 gap-4">
                <div className=" flex-1 flex flex-col gap-2 items-center justify-between bg-gray-100 rounded-xl p-4 min-w-64">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="w-16 h-16 bg-slate-300 border-2 border-gray-400 rounded-full overflow-hidden">
                            {session.status === 'authenticated' && (
                                <Image
                                    src={session.data?.user?.image}
                                    width={200}
                                    height={200}
                                    alt="user-image"
                                ></Image>
                            )}
                        </div>
                        <h2>
                            {session.status === 'authenticated'
                                ? session.data?.user?.name
                                : 'Prihlaš se'}
                        </h2>
                    </div>

                    <button
                        onClick={signOutt}
                        className="flex gap-1 group/ico items-center self-end text-gray-500 hover:text-black duration-150"
                    >
                        <LogoutIco width="25px" color="#6b7280"></LogoutIco>
                        <p>Log out</p>
                    </button>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <h2>Details:</h2>
                    <div className="flex justify-between">
                        <span className="flex gap-1">
                            <p>email: </p>{' '}
                            <p className="font-bold">jindriskuv@email.cz</p>
                        </span>
                        <button className="px-2 text-gray-600 underline hover:no-underline  ">
                            edit
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-1">
                            <p>phone: </p>{' '}
                            <p className="font-bold">678 á87 á66</p>
                        </span>
                        <button className="px-2  text-gray-600 underline hover:no-underline  ">
                            edit
                        </button>
                    </div>

                    <h3 className="mt-4">Address: </h3>
                    <div className="flex justify-between">
                        <span className="flex gap-1">
                            <p>Street: </p>{' '}
                            <p className="font-bold">mor. kar. 103</p>
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-1">
                            <p>City: </p> <p className="font-bold">Cer. voda</p>
                        </span>
                    </div>
                    <button className="px-2  bg-gray-200 rounded-lg text-gray-600 hover:bg-gray-300 duration-200  ">
                        edit address
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
