function MobileNavLink({ time, topic }) {
    return (
        <div className="text-white text-sm bg-[#191818] md:hidden pb-3 pt-1 border-t border-solid border-t-[#272727]">
            <div className="text-gray-400">{time}</div>
            <div>{topic}</div>
        </div>
    )
}

export default MobileNavLink;