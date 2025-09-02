function SideIcon ({img, name}) {
    return (
        <div className="flex items-center text-gray-300 hover:bg-[#FFFFFF]/10 p-2 rounded">
            <img src={img} className="w-[15px] h-[15px]"/>
            <div className="text-xs font-medium pl-2">{name}</div>
        </div>
    )
}

export const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between bg-[#1E2640]">
            <div className="flex gap-8 items-center">
                <div className="flex gap-3 p-3">
                    <div>
                        <img src="./public/nishyan.svg" className="size-8 rounded"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[12px] font-medium text-white">Nishyan</div> 
                        <a href="https://dashboard-clone-dukaan.vercel.app/#" className="text-[11px] text-gray-400 underline">Visit Store</a>
                    </div>
                </div>
                <div className="text-white font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col">
                <SideIcon img={'./public/home.png'} name={'Home'}/>
                <SideIcon img={'./public/orders.png'} name={'Orders'}/>
                <SideIcon img={'./public/products.png'} name={'Products'}/>
                <SideIcon img={'./public/delivery.png'} name={'Delivery'}/>
                <SideIcon img={'./public/marketing.png'} name={'Marketing'}/>
                <SideIcon img={'./public/payouts.png'} name={'Payouts'}/>
                <SideIcon img={'./public/discounts.png'} name={'Discounts'}/>
                <SideIcon img={'./public/audience.png'} name={'Audience'}/>
                <SideIcon img={'./public/appearence.png'} name={'Appearence'}/>
                <SideIcon img={'./public/plugins.png'} name={'Plugins'}/>
            </div>

            <div className="bg-[#FFFFFF]/10 p-2 rounded">
                <div className="flex gap-3 items-center">
                    <div className="bg-[#FFFFFF]/15 px-[5px] py-[5px] rounded">
                        <img src="./public/wallet.svg" className="size-5" />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-gray-300 text-xs">
                            Available Credits
                        </div>
                        <div className="text-sm text-white font-medium">
                            224.10
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}