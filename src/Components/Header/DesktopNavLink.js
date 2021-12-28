function DesktopNavLink({time, topic}) {
    return (
        <div className="group flex-grow w-1/3 pb-8 cursor-pointer">
            <div className="text-gray-400 group-hover:text-[#e41f3a]">{time}</div>
            <div className="text-white">{topic}</div>
        </div>
    )
}

export default DesktopNavLink;