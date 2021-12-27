import InfoTitle from "./InfoTitle"
import InfoFeature from "./InfoFeature";

function InfoBlock({ title, info, features }) {
    return (
        <section>
            {title && info && <InfoTitle title={title} info={info} />}
            <div className="flex flex-wrap">
                {features && features.map((item) => <InfoFeature image={item.img} slogan={item.slogan} subtitle={item.subtitle} content={item.content} />)}
            </div>
            <div className="h-5 mt-28 bg-[url('https://2012.buildconf.com/images/section_divider.png')]"></div>
        </section>
    )
}

export default InfoBlock;