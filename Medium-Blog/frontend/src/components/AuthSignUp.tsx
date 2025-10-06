import { useState } from "react"
import type { SignUpInput } from "@xkaranme/medium-blog"
import { InputBox } from "./InputBox"
import { AuthHeader } from "./AuthHeader"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { type AppDispatch } from "../store"
import { setUser } from "../store/userSlice"

export const AuthSignUp = ({type} : {type: 'signup' | 'signin'}) => {
    const navigate =  useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const [givenInputs, setGivenInputs] = useState<SignUpInput>({
        email: '',
        password: '',
        name: ''
    })

    async function sendRequest() {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, givenInputs)
            const token = res.data.token
            console.log(token)
            localStorage.setItem('token', token)
            // Fetch current user details and populate store
            try {
                const me = await axios.get(`${BACKEND_URL}/api/v1/user`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                dispatch(setUser({ name: me.data?.name, token }))
            } catch (e) {
                // noop: user fetch failure shouldn't block navigation
            }
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
                        <InputBox label="Name" placeholder="username" onChange={(e) => {
                            setGivenInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} />

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