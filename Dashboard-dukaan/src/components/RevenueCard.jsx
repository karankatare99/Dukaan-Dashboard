
export const RevenueCard = ({title, amount, orderCount, time}) => {
    return (
        <div>
        {time ? <div className="flex rounded-lg flex-col min-w-[300px] bg-[#146EB4] m-3 hover:bg-[#104c84]">
        <div className="rounded-t-lg rounded-b-none m-[-5px] shadow-sm p-5 h-fit -mt-2">
            <div className="flex items-center text-white gap-3 ">
                <div className="text-sm">
                    {title}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div className="font-medium text-3xl text-white">
                    ₹{amount}
                </div>
                <div>
                    {orderCount ? <div className="flex items-center text-white">
                        <div className="underline font-medium text-sm">{orderCount} Orders</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div> : null}
                </div>
            </div>
        </div>
        {time ? <div className="flex text-sm py-2 text-gray-200 px-5 rounded-lg justify-between bg-[#104c84]">
            <div>
                Next Payment Date:
            </div>
            <div>
                {time}
            </div>
        </div> : null}

        </div> :
        <div className="flex flex-col min-w-[300px] m-3">
        <div className="rounded m-[-5px] shadow-sm p-5 h-fit -mt-2">
            <div className="flex items-center text-gray-960 gap-3 ">
                <div className="text-sm">
                    {title}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between items-center pt-4">
                <div className="font-medium text-3xl">
                    ₹{amount}
                </div>
                <div>
                    {orderCount ? <div className="flex items-center text-blue-960">
                        <div className="underline font-medium text-sm">{orderCount} Orders</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div> : null}
                </div>
            </div>
        </div>
        {time ? <div className="flex text-lg font-medium py-2 text-gray-200 px-5 rounded-lg justify-between bg-[#104c84]">
            <div>
                Next Payment Date:
            </div>
            <div>
                {time}
            </div>
        </div> : null}

        </div>}
        </div>
    )
}