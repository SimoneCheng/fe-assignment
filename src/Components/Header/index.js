import { useState, useContext } from "react";
import { context } from "../../data/context";
import MobileNavLink from "./MobileNavLink";
import DesktopNavLink from "./DesktopNavLink";

function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const { navLinkData } = useContext(context);

    return (
        <>
            <header className="bg-[#191818] px-10 md:pt-8">
                <div className="flex text-white justify-between items-center max-w-7xl mx-auto">
                    <img src={require('./images/logo-knockout@2x.png')} className="w-32 md:w-60"></img>
                    <nav className="lg:ml-32 hidden md:flex md:flex-grow md:flex-wrap">
                        {navLinkData.map((item) => <DesktopNavLink time={item.time} topic={item.topic} />)}
                    </nav>
                    <div className="text-2xl cursor-pointer md:hidden" onClick={() => setIsDisplayed(!isDisplayed)}>☰</div>
                </div>
            </header>
            {isDisplayed &&
                <nav className="pl-5 bg-[#191818]">
                    {navLinkData.map((item) => <MobileNavLink time={item.time} topic={item.topic} />)}
                </nav>}
        </>
    )
}

export default Header;