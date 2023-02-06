import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { TailSpin } from 'react-loader-spinner';
// import reactStars from "react-stars"
const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {

        }
        getData()
    }, [])


    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>
            {loading ? <div className='w-full flex justify-center items-center h-96'><TailSpin height={40} color="white" /> </div> :
    
                    data.map((e, i) => {
                        return (

                            <div key={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-75'>
                                <img className='h-72' src={e.image} alt='movie poster' />
                                <h1><span className='text-blue-500'>Name: </span>{e.title}</h1>
                                <h1 className='flex items-center mr-1'>
                                    <span className='text-blue-500'>Rating:</span>{e.rating}
                                    <ReactStars size={20}
                                        half={true}
                                        value={5}
                                        edit={false}
                                    />
                                </h1>

                                <h1><span className='text-blue-500'>Year: </span>{e.year}</h1>
                            </div>
                        );
                    })
                }
            
            
        </div>
    )
}

export default Cards
