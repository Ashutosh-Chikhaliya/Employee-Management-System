import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("")
        setPassword("")
    }


    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='border-2 border-emerald-500 rounded-xl p-20'>
                    <form
                        className='flex flex-col items-center justify-center'
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                    >
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className='border-2 border-emerald-500 py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-lg'
                            type="email"
                            placeholder='Enter Email'
                            required
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className='border-2 border-emerald-500 py-3 px-5 mt-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-lg'
                            type="password"
                            placeholder='Enter Password'
                            required
                        />
                        <button
                            className='bg-emerald-500 py-3 px-5 text-xl text-white outline-none mt-3 placeholder:text-white rounded-lg'
                        >Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
