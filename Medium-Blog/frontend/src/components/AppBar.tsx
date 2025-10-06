import { Link } from "react-router-dom"
import { UserLogo } from "./UserLogo"
import { useSelector } from "react-redux"
import type { RootState } from "../store"

export const AppBar = () => {
    const user = useSelector((state : RootState) => state.user)

    return (
        <div className="flex border border-b-black justify-between mb-10 items-center px-36 py-5">
            <Link to={'/'}>
                <div className="font-merriweather font-extrabold text-3xl">Medium</div>
            </Link>

            <div className="flex gap-3 items-center">
                <Link to={'/publish'}>
                    <button className="bg-green-600 font-medium text-xs text-white rounded-full p-2">
                        Publish
                    </button>
                </Link>

                <UserLogo author={user.name || 'Anon'} />
            </div>
        </div>
    )
}