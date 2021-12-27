function FooterLink({slogan, title, linkImg}) {
    return(
        <div className="flex flex-col items-center m-10">
            <h4 className="text-gray-400 mb-3">{slogan}</h4>
            <h3 className="text-slate-200 mb-3">{title}</h3>
            <img src={require(`${linkImg}`)} className="w-10"></img>
        </div>
    )
}

export default FooterLink;