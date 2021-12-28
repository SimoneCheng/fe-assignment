function ConferenceSpeaker({profileImg, name}) {
    return(
        <div className="group flex flex-col justify-center items-center mx-10 mb-10 cursor-pointer transition-all hover:translate-y-[-0.5rem]">
            <img src={require(`${profileImg}`)}></img>
            <p className="text-[#ff9fac] group-hover:text-white">{name}</p>
        </div>

    )
}

export default ConferenceSpeaker;