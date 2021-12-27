import { useState } from "react";
import MobileNavLink from "./MobileNavLink";
import NavLink from "./NavLink";

const navLinkData = [
    {
        time: "MONDAY",
        topic: "FILM"
    },
    {
        time: "TUESDAY",
        topic: "WORKSHOPS"
    },
    {
        time: "WEDNESDAY",
        topic: "PRACTICAL"
    },
    {
        time: "THURSDAY",
        topic: "CONFERENCE"
    },
    {
        time: "FRIDAY",
        topic: "MUSIC"
    },
    {
        time: "VARIOUS",
        topic: "FRINGE"
    }
]


function Header() {
    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <>
            <header className="bg-[#191818] px-10 md:pt-8">
                <div className="flex text-white justify-between items-center max-w-7xl mx-auto">
                    <img src={require('./images/logo-knockout@2x.png')} className="w-32 md:w-60"></img>
                    <nav className="ml-32 hidden md:flex md:flex-grow md:flex-wrap">
                        {navLinkData.map((item) => <NavLink time={item.time} topic={item.topic} />)}
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