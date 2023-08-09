import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Input from '../../components/Ui/Input'

const index = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get('https://restcountries.com/v2/all').then((response) => setCountries(response.data))
    }, [])

    // countries.map(element, index)


    return (
        <main className='mt-[80px] py-[45px]'>
            {/* <div setLoader={true} className='loader_wrapper grid place-content-center w-full h-screen bg-[rgba(0,0,0,0.5)] absolute top-0'>
                <span className="loader">L &nbsp; ading</span>
            </div> */}

            <div className="container">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center border max-w-[480px] py-4 rounded-[5px] px-8 shadow-lg hover:shadow-2xl hover:cursor-text gap-6 duration-200'>
                        <i className='bx bx-search text-[#848484] text-lg'></i>
                        <Input />
                    </div>

                    <select className='cursor-pointer px-6 py-4 shadow-md border hover:shadow-xl duration-200 focus:outline-none'>
                        <option value="">Filter by Region</option>
                    </select>
                </div>

                <div className='wrapper grid grid-cols-4 gap-[66px] mt-12'>
                    {
                        countries.map((el, index) => {
                            return (
                                <div className="card w-[270px] rounded-[5px] shadow-lg hover:shadow-2xl duration-300" key={index}>
                                    <div className='w-[270px] h-[160px] border overflow-hidden'>
                                        <img src={el.flag} alt="flag" className='h-[160px] object-cover object-center w-full' />
                                    </div>
                                    <div className='px-6 pt-6 pb-[46px]'>
                                        <h5 className='text-[#111517] text-lg font-extrabold mb-4'>{el.name}</h5>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#111517] text-sm font-light'><strong className='font-semibold'>Population: </strong>{el.population}</p>
                                            <p className='text-[#111517] text-sm font-light'><strong className='font-semibold'>Region: </strong> {el.region}</p>
                                            <p className='text-[#111517] text-sm font-light'><strong className='font-semibold'>Capital: </strong> {el.capital}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default index