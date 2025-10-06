import { TopBar } from "../components/TopBar"
import { FootBar } from "../components/FootBar"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col h-screen bg-[#FBF9F0] overflow-hidden">
            <TopBar />

            <div className="flex-grow overflow-hidden">
                <div className="grid grid-cols-3 h-full">
                    <div className="col-span-2 flex flex-col justify-center px-28">
                        <div>
                            <div className="font-merriweather font-bold text-8xl leading-tight mb-6 text-black">
                                <div>Human</div>
                                <div>stories & ideas</div>
                            </div>
                            <p className="font-inter text-xl mb-8 leading-relaxed">
                                A place to read, write, and deepen your understanding
                            </p>
                            <button onClick={() => {navigate('/blogs')}} className="bg-black text-white px-9 py-2 rounded-full font-inter text-lg font-medium">
                                Start reading
                            </button>
                        </div>
                    </div>
                    <div className="col-span-1 relative overflow-hidden">
                        <div className="relative h-full">
                            <img
                                src="/homepage.webp"
                                alt="Medium homepage illustration"
                                className="w-full h-full -mt-3 object-contain ml-10"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <FootBar />
        </div>
    )
}
