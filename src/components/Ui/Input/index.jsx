import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const index = () => {
    const [date, setDate] = useState('')
    
    useEffect((date) => {
        axios.get(`https://restcountries.com/v3.1/name${date}`).then((response) => response.data)
    })

    return (
        <input onChange={((e) => setDate(e.target.value))} type="text" placeholder='Search for a country…' className='w-[480px] focus:outline-none placeholder:text-[#848484] text-sm' />
    )
}

export default index