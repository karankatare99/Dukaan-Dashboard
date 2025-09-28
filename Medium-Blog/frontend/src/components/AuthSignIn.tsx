import { useState } from "react"
import type { SignInInput } from "@xkaranme/medium-blog"
import { InputBox } from "./InputBox"
import { AuthHeader } from "./AuthHeader"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const AuthSignIn = ({type} : {type: 'signup' | 'signin'}) => {
    const navigate = useNavigate()

    const [givenInputs, setGivenInputs] = useState<SignInInput>({
        email: '',
        password: '',
    })

    async function sendRequest() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, givenInputs)
            const token = res.data.token
            console.log(token)
            localStorage.setItem('token', token)
            navigate('/blogs')
        } catch(e) {
            alert('The request has failed')
        }
    }
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">

                <div className="flex flex-col gap-3">
                    <AuthHeader type={type} />

                    <div className="flex flex-col gap-4 mt-5">
                        <InputBox label="Email" placeholder="google@gmail.com" onChange={(e) => {
                            setGivenInputs(c => ({
                                ...c,
                                email: e.target.value
                            }))
                        }} />

                        <InputBox label="Password" type="password" placeholder="" onChange={(e) => {
                            setGivenInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                    </div>

                    <button onClick={sendRequest} className="text-white mt-2">{type === 'signup' ? 'Sign Up' : 'Sign In'}</button>

                </div>

            </div>
        </div>
    )
}