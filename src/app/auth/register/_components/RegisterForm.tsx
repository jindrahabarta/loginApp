'use client'
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import styles from '@/app/auth/page.module.css'
import GoogleButton from '@/app/_components/GoogleButton'

import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import useDb from '@/app/_utils/useDb'
import useFetchCollection from '@/app/_utils/useFetchCollection'
import toast from 'react-hot-toast'
import { redirect, useRouter } from 'next/navigation'
import GitHubButton from '@/app/_components/GitHubButton'

const { db } = useDb()

const RegisterForm = () => {
    const { data, loaded, error } = useFetchCollection('users')
    const session = useSession()
    const router = useRouter()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordCheck, setPasswordCheck] = useState<string>('')
    const [passwordError, setPasswordError] = useState<boolean>(false)

    const register = (e: any) => {
        e.preventDefault()
        setPasswordError(false)

        if (password != passwordCheck) {
            setPasswordError(true)
        } else if (true) {
        }
    }

    const registerUser = (props: { provider: string }) => {
        // signIn(props.provider)
        console.log(props)
        // if ((session.status = 'authenticated')) {
        //     addDoc(collection(db, 'users'), {
        //         createdAt: serverTimestamp(),
        //         username: session.data?.user?.name,
        //     })
        //         .then(() => toast.success('Successfully registered'))
        //         .then(() => router.push('/'))
        // } else {
        //     toast.error('Registration fail')
        // }
    }
    return (
        <div className={styles.formBg}>
            <div className="flex flex-col items-center gap-4 border-black border border-opacity-50 p-6 min-w-96 bg-white">
                <h1>Register</h1>
                <form onSubmit={register} className="flex flex-col gap-3">
                    <div className={styles.inputBg}>
                        <input
                            placeholder="Email or username"
                            type="text"
                            maxLength={30}
                            required
                            className={styles.input}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputBg}>
                        <input
                            placeholder="Password"
                            type="text"
                            maxLength={20}
                            required
                            className={styles.input}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputBg}>
                        <input
                            placeholder="Password repeat"
                            type="text"
                            maxLength={20}
                            required
                            className={styles.input}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className=" px-8 py-2 text-lg text-white font-bold rounded-full bg-gradient-to-br from-orange-500 to-orange-700"
                    >
                        Create new account
                    </button>
                    {passwordError && (
                        <p className="text-red-500">
                            Both passwords must be equal
                        </p>
                    )}
                </form>

                <p>
                    Do you have your account?{' '}
                    <a
                        className=" text-violet-800 hover:text-violet-500 duration-200"
                        href="/auth/login"
                    >
                        Click here to login
                    </a>
                </p>
                <div className="flex gap-6 items-center w-full ">
                    <div className="border-b border-gray-400 w-full"></div>
                    <h2>Or</h2>
                    <div className="border-b border-gray-400 w-full"></div>
                </div>
                <GoogleButton></GoogleButton>
                <GitHubButton></GitHubButton>
            </div>
        </div>
    )
}

export default RegisterForm
