import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkele } from "../components/BlogSkele";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const {blogs, loading} = useBlogs();
    
    if (loading) {
        return (
            <div>
                <AppBar />
                <BlogSkele />  
                <BlogSkele />  
                <BlogSkele />  
                <BlogSkele />  
                <BlogSkele />  
                <BlogSkele />  
            </div>
        )
    }

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="flex flex-col gap-5">
                    {blogs.map(blog => <BlogCard key={blog.id} id={blog.id} author={blog.author.name || "Anon"} title={blog.title} content={blog.content} publishedAt={blog.publishedAt} />)}
                </div>
            </div>
        </div>
    )
}