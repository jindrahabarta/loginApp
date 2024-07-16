import Link from 'next/link'
import Arrow from './Icons/Arrow'

export default function Home() {
    return (
        <main className="flex flex-col justify-center gap-4 items-center">
            <h1 className=" text-6xl">Home page</h1>
            <Link
                href="/auth/login"
                className="group/ico flex gap-2  items-center tapToLogin"
            >
                <h2 className="group-hover/ico:text-orange-500 duration-200 ">
                    Tap to login
                </h2>
                <Arrow color="#f97316" width="20px"></Arrow>
            </Link>
        </main>
    )
}
