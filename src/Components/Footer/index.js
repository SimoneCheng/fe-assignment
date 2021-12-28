import FooterLink from "./FooterLink";

const footerLinkData = [
    {
        slogan: "SWAG OUT",
        title: "Draft Supply Co.",
        linkImg: "./images/draft.jpg"
    },
    {
        slogan: "WHAT’S NEW?",
        title: "Read Our Blog",
        linkImg: "./images/tumblr.jpg"
    },
    {
        slogan: "GET THE LATEST",
        title: "Follow on Twitter",
        linkImg: "./images/twitter.jpg"
    },
    {
        slogan: "KEEP IN TOUCH",
        title: "Like on Facebook",
        linkImg: "./images/facebook.jpg"
    },
]

function Footer() {
    return (
        <section className="bg-[#191818] flex flex-col items-center">
            <div className="flex flex-wrap justify-center">
                {footerLinkData.map((item) => <FooterLink slogan={item.slogan} title={item.title} linkImg={item.linkImg} />)}
            </div>
            <div className="text-gray-400 pb-10">© 2012 ANDY MCMILLAN / DESIGN BY KYLE MEYER / DEVELOPMENT BY RIOT / ICONS BY TIM BOELAARS / REFUND POLICY</div>
        </section>
    )

}

export default Footer;