import { Link } from "react-router-dom"
import { UserLogo } from "./UserLogo"

export const AppBar = () => {
    return (
        <div className="flex justify-between items-center px-36 py-5">
            <Link to={'/blogs'}>
                <div>Medium</div>
            </Link>

            <div className="flex gap-3 items-center">
                <Link to={'/publish'}>
                    <button className="bg-green-600 font-medium text-xs text-white rounded-full p-2">
                        Publish
                    </button>
                </Link>

                <UserLogo author="J L" />
            </div>
        </div>
    )
}