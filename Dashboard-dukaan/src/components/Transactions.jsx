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

const rows = [
    {
        orderId: "#281209",
        status: <Successfull />,
        transactionId: "TRX123456",
        refundDate: "Today, 8:45 PM",
        orderAmount: "₹1125.00"
    },
    {
        orderId: "#281210",
        status: <Processing />,
        transactionId: "TRX789012",
        refundDate: "Tomorrow, 10:00 AM",
        orderAmount: "₹950.50"
    },
    {
        orderId: "#281211",
        status: <Successfull />,
        transactionId: "TRX345678",
        refundDate: "Yesterday, 3:30 PM",
        orderAmount: "₹750.00"
    },
    {
        orderId: "#281212",
        status: <Successfull />,
        transactionId: "TRX901234",
        refundDate: "Today, 11:20 AM",
        orderAmount: "₹2000.00"
    },
    {
        orderId: "#281213",
        status: <Processing />,
        transactionId: "TRX567890",
        refundDate: "Tomorrow, 9:00 AM",
        orderAmount: "₹1800.00"
    },
    {
        orderId: "#281214",
        status: <Processing />,
        transactionId: "TRX098765",
        refundDate: "Yesterday, 2:00 PM",
        orderAmount: "₹500.00"
    },
    {
        orderId: "#281215",
        status: <Successfull />,
        transactionId: "TRX456789",
        refundDate: "Today, 10:30 AM",
        orderAmount: "₹3000.00"
    },
    {
        orderId: "#281216",
        status: <Processing />,
        transactionId: "TRX987654",
        refundDate: "Tomorrow, 11:30 AM",
        orderAmount: "₹1200.00"
    },
    {
        orderId: "#281217",
        status: <Processing />,
        transactionId: "TRX654321",
        refundDate: "Yesterday, 4:00 PM",
        orderAmount: "₹900.00"
    },
    {
        orderId: "#281218",
        status: <Successfull />,
        transactionId: "TRX234567",
        refundDate: "Today, 9:45 AM",
        orderAmount: "₹1500.00"
    }
];

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
            {rows.map((row, idx) => (
                <div
                    key={idx}
                    className={'grid grid-cols-5 text-xs py-2 items-center'}
                >
                    <div className="font-medium text-[#146EB4] pl-2">{row.orderId}</div>
                    <div className="pl-2">{row.status}</div>
                    <div className="text-gray-600 pr-6">{row.transactionId}</div>
                    <div className="text-gray-600">{row.refundDate}</div>
                    <div>{row.orderAmount}</div>
                </div>
            ))}
        </div>
    );
}
