import React from 'react'
import 'boxicons'

const index = () => {
    return (
        <header className='fixed top-0 w-full shadow-lg bg-white'>
            <div className="container">
                <nav className='flex justify-between items-center py-6'>
                    <a href='./index.html' className='text-[#111517] text-2xl font-extrabold '>
                        Where in the world?
                    </a>

                    <button className='flex items-center gap-3'>
                        <i className='bx bx-moon text-[#111517] text-xl'></i>
                        <p className='text-[#111517] text-base font-semibold'>Dark Mode</p>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default index