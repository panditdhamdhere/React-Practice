import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef } from './firebase/Firebase'
import { addDoc } from 'firebase/firestore'
import { TailSpin } from 'react-loader-spinner'
import swal from 'sweetalert'

const Reviews = ({ id }) => {
    const [rate, setRate] = useState(0)
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState("");

    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewsRef, {
                movieid: id,
                name: "pandit dhamdhere",
                rating: rate,
                thought: form,
                timestamp: new Date().getTime()
            })


            swal({
                title: "Review sent successfully",
                icon: "success",
                buttons: false,
                timer: 3000
            })
        } catch (error) {
            swal({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        setLoading(false);
    }

    return (
        <div className='mt-4 border-t-2 border-gray-900 w-full'>
            <ReactStars size={30}
                half={true}
                onChange={(rates) => setRate(rates)}
            />
            <input
                value={form}
                onChange = {(e) => setForm(e.target.value)}
                placeholder='Share Your Thoughts Here'
                className='w-full p-2 outline-none header'
            />
            <button onClick={sendReview} className='bg-green-500 w-full p-2 flex justify-center'>
                {loading ? <TailSpin height={20} color='white' /> : 'Share'}
            </button>
        </div>
    )
}

export default Reviews
