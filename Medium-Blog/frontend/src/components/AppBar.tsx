import { Link } from "react-router-dom"
import { UserLogo } from "./UserLogo"
import { useMetaData } from "../hooks"

export const AppBar = () => {
    const { user } = useMetaData()

    return (
        <div className="flex border border-b-black justify-between items-center px-36 py-5">
            <Link to={'/'}>
                <div className="font-merriweather font-extrabold text-3xl">Medium</div>
            </Link>

            <div className="flex gap-3 items-center">
                <Link to={'/publish'}>
                    <button className="bg-green-600 font-medium text-xs text-white rounded-full p-2">
                        Publish
                    </button>
                </Link>

                <UserLogo author={user?.name || 'Anon'} />
            </div>
        </div>
    )
}