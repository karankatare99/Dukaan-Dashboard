import { AuthSignIn } from "../components/AuthSignIn"
import { Quote } from "../components/Quote"


export const SignIn = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <AuthSignIn type="signin" />
            </div>
            <div className="hidden lg:block">
                <Quote />                
            </div>
        </div>
    )
}