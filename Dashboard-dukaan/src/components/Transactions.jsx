function Processing() {
    return (
        <div>
            <div className="flex items-center gap-1">
                <div className="bg-[#999999] border size-2.5 rounded-full"></div>
                <div className="text-xs">
                    Processing
                </div>
            </div>
        </div>
    )
}

function Successfull() {
    return (
        <div>
            <div className="flex items-center gap-1">
                <div className="bg-green-500 border size-2.5 rounded-full"></div>
                <div className="text-xs">
                    Successfull
                </div>
            </div>
        </div>
    )
}

export const Transactions = () => {
    return (
        <div className="px-5">
            <div className="grid grid-cols-5 p-2 bg-gray-100 text-gray-600 text-xs font-medium">
                <div>Order ID</div>
                <div>Status</div>
                <div>Transaction ID</div>
                <div>Refund Date</div>
                <div>Order Amount</div>
            </div>
            <div className="grid grid-cols-5 text-xs pt-2">
                <div className="flex flex-col font-medium text-[#146EB4] pl-2 gap-3">
                    <div>#281209</div>
                    <div>#281210</div>
                    <div>#281211</div>
                    <div>#281212</div>
                    <div>#281213</div>
                    <div>#281214</div>
                    <div>#281215</div>
                    <div>#281216</div>
                    <div>#281217</div>
                    <div>#281218</div>
                </div>
                <div className="flex flex-col pl-2 gap-3">
                    <Successfull />
                    <Processing />
                    <Successfull />
                    <Successfull />
                    <Processing />
                    <Processing />
                    <Successfull />
                    <Processing />
                    <Processing />
                    <Successfull />
                </div>
                <div className="flex flex-col text-gray-600 pr-6 gap-3">
                    <div>TRX123456</div>
                    <div>TRX789012</div>
                    <div>TRX345678</div>
                    <div>TRX901234</div>
                    <div>TRX567890</div>
                    <div>TRX098765</div>
                    <div>TRX456789</div>
                    <div>TRX987654</div>
                    <div>TRX654321</div>
                    <div>TRX234567</div>
                </div>
                <div className="flex flex-col text-gray-600 gap-3">
                    <div>Today, 8:45 PM</div>
                    <div>Tomorrow, 10:00 AM</div>
                    <div>Yesterday, 3:30 PM</div>
                    <div>Today, 11:20 AM</div>
                    <div>Tomorrow, 9:00 AM</div>
                    <div>Yesterday, 2:00 PM</div>
                    <div>Today, 10:30 AM</div>
                    <div>Tomorrow, 11:30 AM</div>
                    <div>Yesterday, 4:00 PM</div>
                    <div>Today, 9:45 AM</div>
                </div>
                <div className="flex flex-col gap-3">
                    <div>₹1125.00</div>
                    <div>₹950.50</div>
                    <div>₹750.00</div>
                    <div>₹2000.00</div>
                    <div>₹1800.00</div>
                    <div>₹500.00</div>
                    <div>₹3000.00</div>
                    <div>₹1200.00</div>
                    <div>₹900.00</div>
                    <div>₹1500.00</div>
                </div>
            </div>
        </div>
    )
}
