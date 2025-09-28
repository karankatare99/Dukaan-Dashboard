export const Quote = () => {
    return (
        <div className="flex justify-center bg-slate-200 h-screen">
            <div className="flex flex-col justify-center gap-2">
                <div className="max-w-lg text-xl font-bold">
                    "The customer service I received was
                    exceptional. The support team went above
                    and beyond to address my concerns"           
                </div>

                <div>
                    <div className="max-w-md text-left text-md font-bold">
                        Julies Winfield
                    </div>

                    <div className="max-w-md text-left text-xs text-slate-900 font-thin">
                        CEO | Acme Inc
                    </div>
                </div>
            </div>

        </div>
    )
}