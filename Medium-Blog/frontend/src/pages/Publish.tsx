import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { useAutosizeTextArea } from "../hooks";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const titleRef = useAutosizeTextArea(title);
    const contentRef = useAutosizeTextArea(content);

    const postBlog = async () => {
        const token = localStorage.getItem('token')
        await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return (
        <div>
            <AppBar />
            <div className="flex flex-col mx-52 mt-10 border rounded p-6 gap-4">
                <textarea
                ref={titleRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="w-full resize-none overflow-hidden text-3xl font-bold outline-none"
                rows={1}
                />
                <textarea
                ref={contentRef}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your story..."
                className="w-full resize-none overflow-hidden text-base outline-none"
                rows={6}
                />
                <button onClick={postBlog} className="text-white mx-64">Post</button> 
            </div>
        </div>

    )
}