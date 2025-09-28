import type { ChangeEvent } from "react"

interface BoxInput {
    label?: string,
    placeholder?: string,
    type?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const InputBox = ({label, placeholder, type, onChange} : BoxInput) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-xs font-medium">{label}</div>
            <input type={type || 'text'} onChange={onChange} className="text-sm text-slate-500 p-2 border rounded focus:outline-none w-full" placeholder={placeholder} />
        </div>
    )
}