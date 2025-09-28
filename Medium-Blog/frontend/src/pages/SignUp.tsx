import { AuthSignUp } from "../components/AuthSignUp"
import { Quote } from "../components/Quote"


export const SignUp = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <AuthSignUp type={"signup"} />
            </div>
            <div className="hidden lg:block">
                <Quote />                
            </div>
        </div>
    )
}