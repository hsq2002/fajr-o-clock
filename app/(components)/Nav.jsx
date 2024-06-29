import React from 'react'
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex-justify-between bg-nav p-4">
        <div className='flex items-center spaxe-x-4'>
            <Link href="/">
                Home </Link>
        <div className="flex items-center space-x-4 ml-3 text-black">
            <em><Link href=" /AIQuiz">AI Quiz</Link></em>
            </div>
        </div>
    </nav>
  )
}

export default Nav;
