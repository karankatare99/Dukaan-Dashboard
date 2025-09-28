import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    id: string
    title: string,
    content: string,
    author: {
        name: string
    }
}

const token = localStorage.getItem('token')

export const useBlog = ({ id } : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data.post)
                setBlog(res.data.post)
                setLoading(false)
            })
    }, [id])

    return {
        blog,
        loading
    }

}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setBlogs(res.data.posts)
                setLoading(false)
            })
    }, [])

    return {
        blogs,
        loading
    }
}
