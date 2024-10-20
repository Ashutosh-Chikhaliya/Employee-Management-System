import React, { useState } from 'react'

const Header = () => {

    const logOutUser = () => {
        localStorage.setItem("loggedInUser", "");
        window.location.reload();

    }

    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-bold'> 😉</span> </h1>
            <button
                onClick={logOutUser}
                className='bg-red-600 text-white px-5 py-3 rounded-xl text-lg font-medium'
            > Logout
            </button>
        </div>
    )
}

export default Header
