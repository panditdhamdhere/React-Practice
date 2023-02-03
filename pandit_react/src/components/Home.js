import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {

    const [state, setState] = useState(1)
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const res = await get.json()
            setData(res)
            console.log(res);
        }
        getData();

        document.title = `(${state}) Employuees Online`
    }, [state])


    return (
        <div>
            <button onClick={() => setState(state + 1)}>Click me{state}</button>
            {
                data.map((element, index) => {
                    return (
                        <Link to={`/app/${element.id}`}> <div className='data' key={index}>
                            <h4>{element.firstName}</h4>
                            <h4>{element.email}</h4>
                            <h4>{element.contactNumber}</h4>
                        </div>
                        </Link>
                    )
                })

            }
            <Outlet />
        </div>
    )
}

export default Home
