import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { AppBar } from "../components/AppBar";
import { BlogViewSkele } from "../components/BlogViewSkele";
import { BlogView } from "../components/BlogView";

export const Blog = () => {
    const { id } = useParams()
    const {blog, loading} = useBlog({
        id: id || ""
    });

    if (loading) {
        return (
            <div>
                <AppBar />
                <BlogViewSkele />
            </div>
        )
    }

    return (
        <div>
            <AppBar />
            <BlogView blog={blog} />
        </div>
    )
}