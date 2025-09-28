import { Link } from "react-router-dom"
import { UserLogo } from "./UserLogo"

export const AppBar = () => {
    return (
        <div className="flex justify-between items-center px-36 py-5">
            <Link to={'/blogs'}>
                <div>Medium</div>
            </Link>

            <div className="flex gap-3 items-center">
                <div>Publish</div>
                <UserLogo author="J L" />
            </div>
        </div>
    )
}