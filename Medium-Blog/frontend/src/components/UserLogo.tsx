

export const UserLogo = ({author} : {author : string}) => {
    return (
        <div className="relative inline-flex items-center justify-center size-9 overflow-hidden bg-black rounded-full">
            <span className="text-xs text-white">
                {author.split(" ")[0][0]}
            </span>
        </div>
    )
}