import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { BlogVeiw } from "../components/BlogVeiw";

// use atomFamily and selectorFamily afterwards

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
            <BlogVeiw blog={blog} />
        </div>
    )
}