import InfoTitle from "./InfoTitle"
import InfoFeature from "./InfoFeature";

function InfoBlock({ title, info, features }) {
    return (
        <section>
            {title && info && <InfoTitle title={title} info={info} />}
            {features && features.map((item) => <InfoFeature image={item.img} slogan={item.slogan} subtitle={item.subtitle} content={item.content} />)}
        </section>
    )
}

export default InfoBlock;