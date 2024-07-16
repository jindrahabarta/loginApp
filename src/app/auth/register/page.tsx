import React from 'react'
import { Metadata } from 'next'
import RegisterForm from './_components/RegisterForm'

export const metadata: Metadata = {
    title: 'Register new user',
    description: 'You can register to the app via this page',
}

const Register = () => {
    return (
        <main className="flex justify-center items-center">
            <RegisterForm></RegisterForm>
        </main>
    )
}

export default Register
