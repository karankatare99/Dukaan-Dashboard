import { Link } from "react-router-dom"

export const AuthHeader = ({type} : {type: 'signin' | 'signup'}) => {
    return (
        <>
            <div className="text-3xl text-center font-bold px-10">
                {type === 'signin' ? "Login" : "Create an account"}
            </div>

            <div className="text-slate-600 text-center">
                {type === 'signin' ? "Don't have an account?" : "Already have an account?"}<Link className="underline ml-2" to={type === 'signup' ? '/signin' : '/signup'}>{type === 'signin' ? "SignUp" : "Login"}</Link>
            </div>
        </>
    )
}