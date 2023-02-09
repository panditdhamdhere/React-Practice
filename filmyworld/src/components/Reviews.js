import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from './firebase/Firebase'
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore'
import { TailSpin, ThreeDots } from 'react-loader-spinner'
import swal from 'sweetalert'

const Reviews = ({ id, prevRating, userRated }) => {
    const [rate, setRate] = useState(0)
    const [loading, setLoading] = useState(false);
    const [reviewsLoading, setReviewsLoading] = useState(false);
    const [form, setForm] = useState("");
    const [data, setData] = useState();



    const sendReview = async () => {
        setLoading(true);
        try {
            await addDoc(reviewsRef, {
                movieid: id,
                name: "pandit dhamdhere",
                rate: rate,
                thought: form,
                timestamp: new Date().getTime()
            })
            const ref = doc(db, "movies", id)
            await updateDoc(ref, {
                rate: prevRating + rate,
                rated: userRated + 1
            })
            setRate(0);
            setForm("");

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

    useEffect(() => {
        async function getData() {
            setReviewsLoading(true);
            let quer = query(reviewsRef, where('movieid', '==', id))
            const querySnapshot = await getDocs(quer);

            querySnapshot.forEach((doc) => {
                setData((prev) => [...prev, doc.data()])
            })

            setReviewsLoading(false);

        }
        getData()
    }, [])

    return (
        <div className='mt-4 border-t-2 border-gray-900 w-full'>
            <ReactStars
                size={30}
                half={true}
                value={rate}
                onChange={(rates) => setRate(rates)}
            />
            <input
                value={form}
                onChange={(e) => setForm(e.target.value)}
                placeholder='Share Your Thoughts Here'
                className='w-full p-2 outline-none header'
            />
            <button onClick={sendReview} className='bg-green-500 w-full p-2 flex justify-center'>
                {loading ? <TailSpin height={10} color='white' /> : 'Share'}
            </button>

            {reviewsLoading ?
                <div className='mt-6 flex justify-center'><ThreeDots height={15} color="white" /></div>
                :
                <div className='mt-4 p-2'>
                    {data.map((e, i) => {
                        return (
                            <div className='bg-gray-500 p-2 w-full border-b border-red-500 mt-2' key={i}>
                                <div className='flex items-center'>
                                    <p className='text-blue-500'>{e.name}</p>
                                    <p className='ml-3 text-xs'>{new Date(e.timestamp).toLocaleString()}</p>
                                </div>
                                <ReactStars
                                    size={20}
                                    half={true}
                                    value={e.rating}
                                    edit={false}
                                />
                                <p>{e.thought}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Reviews
