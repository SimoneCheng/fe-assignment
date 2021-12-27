import InfoTitle from "./InfoTitle"
import InfoFeature from "./InfoFeature";

function InfoBlock({ title, info, features }) {
    return (
        <section className="py-14">
            {title && info && <InfoTitle title={title} info={info} />}
            <div className="flex flex-wrap">
                {features && features.map((item) => <InfoFeature image={item.img} slogan={item.slogan} subtitle={item.subtitle} content={item.content} />)}
            </div>
        </section>
    )
}

export default InfoBlock;