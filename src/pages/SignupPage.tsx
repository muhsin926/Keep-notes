import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firbase'

const SignupPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password)
        }catch(err) {
            console.error(err)
        }
    }
    return (
        <div className="flex justify-center">
            <div className="my-[3rem] mx-4 py-[3rem] bg-white rounded-lg w-[440px] shadow-lg">
                <h2 className=" text-center text-3xl font-bold">
                    Sign up
                </h2>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className="px-[3rem] pt-[1rem] flex flex-col mt-[2rem]"
                >
                    <label className="text-sm " htmlFor="userName">
                        Full name
                    </label>
                    <input
                        type="text"
                        name="userName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-400 rounded focus:outline-none w-full h-10 p-3"
                    />
                    <label className="text-sm mt-5" htmlFor="userName">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-400 rounded focus:outline-none w-full h-10 p-3"
                    />
                    <label className="text-sm mt-5" htmlFor="userName">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-400 rounded focus:outline-none w-full h-10 p-3"
                    />
                    <div>
                        <button
                            type="submit"
                            className="border border-darkBlue px-6 py-2 mt-4 rounded font-bold hover:shadow-md"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
                <div className="ml-[3rem]">
                    <p className="text-xs mt-4 mb-1 text-lightBlue">
                        Already have an account? <Link to={"/signin"}>Sign in.</Link>
                    </p>
                    <p className="text-xs text-lightBlue">Terms and conditions.</p>
                </div>
            </div>
        </div>
    )
}

export default SignupPage