
export const Header = () => {
    return (
        <div className="flex justify-between items-center py-2 px-4 shadow">
            <div className="flex gap-3">
                <div className="font-medium">
                    Payouts
                </div>
                <div className="flex text-gray-500 gap-1 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    <div className="text-xs">How it works</div>
                </div>
            </div>

            <div className="flex items-center gap-2 p-3 rounded bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input className="focus:outline-none text-xs w-64 bg-gray-100 caret-gray-900" type="text" placeholder="Search features, tutorials and etc."/>
            </div>

            <div className="flex gap-2">
                <div>
                    <button className="flex gap-2 items-center w-8 text-sm bg-gray-200 p-2 rounded-full transition">
                        <img src="./speaker.png"/>
                    </button>
                </div>
                <div>
                    <button className="flex gap-2 items-center w-8 h-8 text-sm bg-gray-200 p-2 rounded-full transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="" radius='100%' viewBox="0 0 24 24" stroke-width="none" stroke="currentColor" class="size-6">
                        <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
} 