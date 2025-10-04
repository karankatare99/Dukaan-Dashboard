import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { ContentInput } from "../components/ContentInput";
import { TitleInput } from "../components/TitleInput";


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")
    
    return (
        <div>
            <AppBar />
            <div className="flex flex-col mx-52 mt-10 border rounded p-6 gap-4">
                <TitleInput />
                <ContentInput />
                <button className="text-white mx-64">Post</button> 
            </div>
        </div>

    )
}