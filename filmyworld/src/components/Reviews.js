import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Reviews = () => {
    const [rate, setRate] = useState(0)

    return (
        <div className='mt-4 border-t-2 border-gray-900 w-full'>
            <ReactStars size={30}
                half={true}
                onChange={(rates) => setRate(rates)}
            />
            <input
                placeholder='Share Your Thoughts Here'
                className='w-full p-2 outline-none header'
            />
            <button className='bg-green-500 w-full p-1'>Share</button>
        </div>
    )
}

export default Reviews
