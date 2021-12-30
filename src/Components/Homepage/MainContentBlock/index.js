import MainContentTitle from "./MainContentTitle";
import ConferenceSpeaker from "./ConferenceSpeaker";

function MainContentBlock({ title, info, date, conferenceSpeakers }) {
    return (
        <>
            <div className="z-10 sticky top-0 bg-cover lg:bg-contain h-[30px] bg-repeat bg-[url('https://2012.buildconf.com/images/pattern@2x.png')]"></div>
            <section className="bg-[#e41f3a] relative bottom-[30px]">
                <MainContentTitle title={title} info={info} date={date} />
                <div className="flex flex-wrap justify-center max-w-7xl mx-auto">
                    {conferenceSpeakers.map((item) => <ConferenceSpeaker profileImg={item.profileImg} name={item.name} />)}
                </div>
                <img src={require('./images/conf_bg.png')} className="w-full"></img>
            </section>
        </>
    )
}

export default MainContentBlock;