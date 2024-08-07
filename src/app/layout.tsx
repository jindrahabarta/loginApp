import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components/NavBar'
import Head from 'next/head'
import AuthProvider from './_components/AuthProvider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Login app',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Tilt+Neon&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            <body className="flex flex-col justify-between min-h-screen">
                <AuthProvider>
                    <Toaster position="bottom-right"></Toaster>
                    <NavBar></NavBar>
                    {children}
                    <footer className="flex justify-end select-none ">
                        <p>
                            Made by{' '}
                            <a
                                className="text-violet-800 hover:text-violet-500 duration-200 underline"
                                href="/"
                            >
                                Jindra Habarta
                            </a>
                        </p>
                    </footer>
                </AuthProvider>
            </body>
        </html>
    )
}
