import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"

interface BlogCardProps {
    id: string,
    author: string,
    title: string,
    content: string,
    published: string
}

export const BlogCard = ({id ,author, title, content, published} : BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="flex flex-col gap-3 border-b pb-10 w-screen max-w-screen-md">

                <div className="flex gap-2 items-center">
                    <Avatar author={author} />
                    <div>{author}</div>
                    <div>•</div>
                    <div className="font-normal text-xs text-slate-500">{published}</div>
                </div>

                <div className="font-semibold text-lg">{title}</div>

                <div className="font-serif">{content.slice(0, 150) + "..."}</div>

                <div className="font-medium text-xs text-slate-500">{`${Math.ceil(content.length / 100)} min read`}</div>

            </div>
        </Link>

    )
}