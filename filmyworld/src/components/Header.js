import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='sticky z-10 header bg-black top-0  text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500' >
            <span>Filmy<span className='text-white'>Verse</span></span>
            <Link to= {"/addmovie"}><h1 className='text-lg text-white cursor-pointer flex items-center'>
            <Button><AddIcon className='mr-1' color='secondary' /> <span className='text-green-500'>Add New</span></Button>
            </h1></Link>
        </div>
    )
}

export default Header
