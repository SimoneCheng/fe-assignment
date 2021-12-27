function NavLink({time, topic}) {
    return (
        <div className="flex-grow w-1/3">
            <div>{time}</div>
            <div>{topic}</div>
        </div>
    )
}

export default NavLink;