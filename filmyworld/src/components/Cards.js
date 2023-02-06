import React, { useState } from 'react'
import ReactStars from 'react-stars'
// import reactStars from "react-stars"
const Cards = () => {
    const [data, setData] = useState([]);


    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            {data.map((e, i) => {
return (
         
                <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-75'>
                    <img className='h-72' src={e.img} alt='movie poster' />
                    <h1><span className='text-blue-500'>Name: </span>{e.name}</h1>
                    <h1 className='flex items-center mr-1'>
                        <span className='text-blue-500'>Rating:</span>{e.rating}
                    <ReactStars size={20}
                    half={true}
                    value={e.rating}
                    edit={false}
                    />
                    </h1>

                    <h1><span className='text-blue-500'>Year: </span>{e.year}</h1>
                </div>
            )})}

        </div>
    )
}

export default Cards
