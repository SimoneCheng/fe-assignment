import dotLine from './images/nuts_white_red.gif'

function InfoTitle({title, info}) {
    return (
        <div>
            <h2 className="text-4xl text-center">{title}</h2>
            <img src={dotLine} className="mx-auto my-5"></img>
            <p className="max-w-xl mx-auto mb-5 text-gray-400">{info}</p>
        </div>
    )
}

export default InfoTitle;