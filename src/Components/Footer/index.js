import { useContext } from "react";
import { context } from "../../data/context";
import FooterLink from "./FooterLink";

function Footer() {
    const { footerLinkData } = useContext(context);

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