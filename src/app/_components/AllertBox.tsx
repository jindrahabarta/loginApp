'use client'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'

const AllertBox = () => {
    const [x, setX] = useState<number | null>(null)
    const session = useSession()
    const [allerts, setAllerts] = useState<string[]>([])

    const clicked = () => {}

    useEffect(() => {
        console.log(session)
        setAllerts((prevAllerts) => [...prevAllerts, 'newallert'])
    }, [session])

    useEffect(() => {
        if (allerts.length > 0) {
            const timer = setTimeout(() => {
                setAllerts((prevAllerts) => prevAllerts.slice(1))
            }, 1000)

            return () => clearTimeout(timer)
        }
    }, [allerts])

    return (
        <div className="absolute bottom-10 right-10 flex flex-col gap-2">
            <button onClick={clicked}>1</button>

            {allerts.length > 0 &&
                allerts.map((allert, i) => (
                    <Allert key={i} type={x}>
                        {allert}
                    </Allert>
                ))}
        </div>
    )
}

const Allert = ({ type, children }: { type: number | null; children: any }) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className={`bg-gray-100 px-4 py-3 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default AllertBox
