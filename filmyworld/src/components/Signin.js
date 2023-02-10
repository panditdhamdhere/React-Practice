import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [form, setForm] = useState({
        name: "",
        mobile: "",
        password: ""

    })

    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(true);

    return (
        <div className='w-full flex flex-col mt-8 items-center'>
                <h1 className='text-xl font-bold mt'>Sign Up</h1>
            {otpSent ?
                <>
                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-white font-bold">OTP</label>
                            <input

                                id="message"
                                name="message"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    {/* 
// button  */}
                    <div className='p-2 w-full md:w-full'>
                        <button
                            class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">{loading ? <TailSpin height={25} color="white" /> : 'Confirm OTP'}</button>
                    </div>

                </>
                :
                <>
                

                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-white font-bold">Name</label>
                            <input

                                id="message"
                                name="message"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>



                    <div class="p-2 w-1/3">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-white font-bold">Mobile No</label>
                            <input
                                type={'number'}
                                id="message"
                                name="message"
                                value={form.mobile}
                                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>


                    <div class="p-2 w-full md:w-1/3">
                        <div class="relative">
                            <label for="message" class="leading-7 text-sm text-white font-bold">Password</label>
                            <input

                                id="message"
                                name="message"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className='p-2 w-full md:w-full'>
                        <button
                            class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">{loading ? <TailSpin height={25} color="white" /> : 'Sign Up'}</button>
                    </div>
                </>
            }
            <div>
                <p>Already have an account? <Link to={'/lognin'}> <span className='text-blue-500'>Login</span></Link></p>
            </div>

            {/* <div className='mt-40'>
                <p>Build by Pandit with Love</p>
            </div>
             */}
        </div>
    )
}

export default Signin
