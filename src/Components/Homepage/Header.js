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
            <header className="flex bg-black text-white justify-between items-center">
                <img src={require('./images/logo-knockout@2x.png')} className="w-48"></img>
                <nav className="hidden md:flex md:flex-grow md:flex-wrap">
                    {navLinkData.map((item) => <NavLink time={item.time} topic={item.topic} />)}
                </nav>
                <div className="text-4xl mr-5 cursor-pointer md:hidden" onClick={() => setIsDisplayed(!isDisplayed)}>☰</div>

            </header>
            {isDisplayed &&
                <nav>
                    {navLinkData.map((item) => <MobileNavLink time={item.time} topic={item.topic} />)}
                </nav>}
        </>
    )
}

export default Header;