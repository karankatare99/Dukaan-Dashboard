import { useState } from "react"
import { AppBar } from "../components/AppBar"

// Add a separate text editor
export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    
    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className="flex flex-col gap-3">
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} className="border w-full font-serif text-3xl text-slate-500 p-4 focus:outline-none focus:text-black" type="text" placeholder="Title" />
                    <input onChange={(e) => {
                        setContent(e.target.value)
                    }} className="border w-full font-serif text-slate-500 p-4 focus:outline-none focus:text-black" type="text" placeholder="Content" />
                    <button className="text-white text-sm mx-20">Post</button>
                </div>
            </div>
        </div>

    )
}