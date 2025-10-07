import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    id: string
    title: string,
    content: string,
    publishedAt: string
    author: {
        name: string
    }
}

export const useAutosizeTextArea = (value: string) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // reset
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return textAreaRef;
};

export const useBlog = ({ id } : {id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setBlog(res.data.post)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
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
        const token = localStorage.getItem('token');
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setBlogs(res.data.posts)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            });
    }, [])

    return {
        blogs,
        loading
    }
}
