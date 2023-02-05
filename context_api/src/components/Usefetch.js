import React from 'react'
import { useState, useEffect } from 'react'
const Usefetch = () => {

    const [data, setData] = useState([]);

    useEffect((url) => {
        async function getData() {
            const call = await fetch("url");

            const res = await call.json();
            // console.log(res);
            setData(res);

        }
        getData();
    }, [])

    return [data]
}

export default Usefetch
