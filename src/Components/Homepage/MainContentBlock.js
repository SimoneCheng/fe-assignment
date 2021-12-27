import InfoTitle from "./InfoTitle";
import ConferenceSpeaker from "./ConferenceSpeaker";

function MainContentBlock({ title, info, date, conferenceSpeakers }) {
    return (
        <section className="bg-[#e41f3a]">
            <InfoTitle title={title} info={info} date={date} />
            <div className="flex flex-wrap justify-center">
                {conferenceSpeakers.map((item) => <ConferenceSpeaker profileImg={item.profileImg} name={item.name} />)}
            </div>
        </section>
    )

}

export default MainContentBlock;