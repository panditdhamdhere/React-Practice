import React from 'react'
import { useContext } from 'react'
import { AppState } from '../App'

const ComC = () => {
    const appData = useContext(AppState)

    return (
        <div className='compc'>
            <div>
                ComC

            </div>
            <h1>{appData.data}</h1>
            <h1>name: {appData.name.name}</h1>
            <h1>age: {appData.name.age}</h1>
        </div>
    )
}

export default ComC
