import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {blogs, loading} = useBlogs();

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="flex flex-col gap-5">
                    {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} author={blog.author.name || "Anon"} title={blog.title} content={blog.content} published="Dec 23, 2045" />)}
                </div>
            </div>
        </div>
    )
}