import MainContentTitle from "./MainContentTitle";
import ConferenceSpeaker from "./ConferenceSpeaker";
import { useRef, useEffect } from "react";

const conferenceSpeakerData = [
    {
        profileImg: "./images/robin.png",
        name: "Robin Sloan"
    },
    {
        profileImg: "./images/kirby.png",
        name: "Kirby Ferguson"
    },
    {
        profileImg: "./images/rob.png",
        name: "Rob Giampietro"
    },
    {
        profileImg: "./images/mandy.png",
        name: "Mandy Brown"
    },
    {
        profileImg: "./images/jeff.png",
        name: "Jeff Veen"
    },
    {
        profileImg: "./images/tiffani.png",
        name: "Tiffani Jones Brown"
    },
    {
        profileImg: "./images/ethan.png",
        name: "Ethan Marcotte"
    }
]

function MainContentBlock({ title, info, date }) {
    return (
        <>
            <div className="sticky top-0 bg-[#e41f3a] bg-cover lg:bg-contain h-[30px] bg-repeat bg-[url('https://2012.buildconf.com/images/pattern@2x.png')]"></div>
            <section className="bg-[#e41f3a]">
                <MainContentTitle title={title} info={info} date={date} />
                <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
                    {conferenceSpeakerData.map((item) => <ConferenceSpeaker profileImg={item.profileImg} name={item.name} />)}
                </div>
                <img src={require('./images/conf_bg.png')} className="w-full"></img>
            </section>
        </>
    )
}

export default MainContentBlock;