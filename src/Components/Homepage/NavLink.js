function NavLink({time, topic}) {
    return (
        <div className="flex-grow w-1/3 pb-8">
            <div className="text-gray-400">{time}</div>
            <div>{topic}</div>
        </div>
    )
}

export default NavLink;