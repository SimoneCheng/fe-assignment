function MobileNavLink({ time, topic }) {
    return (
        <div className="text-white bg-black">
            <div>{time}</div>
            <div>{topic}</div>
        </div>
    )
}

export default MobileNavLink;