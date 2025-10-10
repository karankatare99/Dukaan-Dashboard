
export const Overveiw = () => {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="font-medium">
                Overveiw
            </div>
            <div>
                <button className="border rounded px-2 py-1">
                    <div className="flex gap-2 text-gray-600 items-center">
                    <div className="text-sm">
                        This Month
                    </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}