import React from 'react'
import type { Metadata } from 'next'
import Dashboard from '../_components/Dashboard'
import { useSession } from 'next-auth/react'

const page = () => {
    return (
        <main>
            <Dashboard></Dashboard>
        </main>
    )
}

export default page

export const metadata: Metadata = {
    title: 'Dashborad',
    description: 'User page',
}
