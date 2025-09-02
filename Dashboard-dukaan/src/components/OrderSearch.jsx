export const OrderSearch = () => {
    return (
        <div>

            <div className="flex items-center gap-2 p-2 rounded border border-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 text-gray-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input className="focus:outline-none text-xs w-64 caret-gray-900" type="text" placeholder="Order ID or transactions ID"/>
            </div>

            <div>
                <div className="flex">
                    <button>
                        <div>
                            Sort
                        </div>
                        <img src="./public/image.png" alt="" />
                    </button>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}