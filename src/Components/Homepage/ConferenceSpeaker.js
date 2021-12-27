function ConferenceSpeaker({profileImg, name}) {
    return(
        <div className="flex flex-col justify-center items-center mx-10">
            <img src={require(`${profileImg}`)}></img>
            <p className="text-[#ff9fac]">{name}</p>
        </div>

    )
}

export default ConferenceSpeaker;