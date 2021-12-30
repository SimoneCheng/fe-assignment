function FooterLink({slogan, title, linkImg}) {
    return(
        <div className="group flex flex-col items-center m-10 cursor-pointer">
            <h4 className="text-[#666666] mb-3">{slogan}</h4>
            <h3 className="text-[#bbbbbb] mb-3 text-xl group-hover:text-white">{title}</h3>
            <img src={require(`${linkImg}`)} className="w-10"></img>
        </div>
    )
}

export default FooterLink;