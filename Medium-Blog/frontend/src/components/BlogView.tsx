import { format } from "date-fns"
import type { Blog } from "../hooks"
import { UserLogo } from "./UserLogo"

export const BlogView = ({blog} : {blog : Blog}) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 max-w-screen-lg w-full">
                <div className="col-span-2 p-4">
                    <div className="flex flex-col gap-4">
                        <div className="text-4xl font-bold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 text-sm">
                            {format(new Date(blog.publishedAt), "MMM dd, yyyy")}
                        </div>
                        <div>
                            {blog.content}
                        </div>
                    </div>
                </div>

                <div className="ml-10 col-span-1">
                    <div className="font-merriweather text-lg pb-7">
                        Author
                    </div>
                    <div className="flex gap-4 items-center">
                        <div>
                            <UserLogo author={blog.author.name} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="text-xl font-bold">
                                {blog.author.name || 'Anon'}
                            </div>
                            <div className="text-slate-600">
                                Master of mirth, puryevors of puns, and the funniest person in the kingdom
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}