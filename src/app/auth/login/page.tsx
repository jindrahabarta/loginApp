import React from 'react'
import styles from '../page.module.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
    description: 'You can login to the app via this page',
}

const Login = () => {
    return (
        <main className="flex justify-center items-center">
            <div className={styles.formBg}>
                <div className="flex flex-col items-center gap-4 border-black border border-opacity-50 p-6 min-w-96 bg-white">
                    <h1>Login</h1>
                    <form className="flex flex-col gap-3">
                        <div className={styles.inputBg}>
                            <input
                                placeholder="Email or username"
                                type="text"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputBg}>
                            <input
                                placeholder="Passoword"
                                type="text"
                                className={styles.input}
                            />
                        </div>
                        <button
                            type="submit"
                            className=" px-8 py-2 text-lg text-white font-bold rounded-full bg-gradient-to-br from-orange-500 to-orange-700"
                        >
                            Login
                        </button>
                    </form>

                    <p>
                        Are you new here?{' '}
                        <a
                            className=" text-violet-800 hover:text-violet-500 duration-200"
                            href="/auth/register"
                        >
                            Click here to register
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Login
