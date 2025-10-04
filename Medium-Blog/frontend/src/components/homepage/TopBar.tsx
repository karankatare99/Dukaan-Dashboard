import { Link, useNavigate } from "react-router-dom"


export const TopBar = () => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between py-5 px-28 border border-b-black">
            <Link to={'/'}>
                <div className="font-merriweather font-extrabold text-3xl">Medium</div>
            </Link>
            <div className="flex font-inter text-sm items-center gap-8">
                <Link to={''}>
                    <div>My Story</div>
                </Link>
                <Link to={'/signin'}>
                    <div>Signin</div>
                </Link>
                <Link to={'https://x.com/XkaranMe'}>
                    <div>Contact</div>
                </Link>
                <button onClick={() => {navigate('/signup')}} className="rounded-full px-4 py-2 text-white">Get started</button>
            </div>
        </div>
    )
}