import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { BlogView } from "../components/BlogView";

export const Blog = () => {
    const { id } = useParams()
    const {blog, loading} = useBlog({
        id: id || ""
    });

    if (loading) {
        return <div>
            laodingg....
        </div>
    }
    return (
        <div>
            <BlogView blog={blog} />
        </div>
    )
}