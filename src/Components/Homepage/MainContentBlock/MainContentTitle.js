import dotLine from './images/nuts_red.gif'

function MainContentTitle({title, info, date}) {
    return (
        <div className="pt-14 pb-10">
            <h2 className="text-4xl text-center text-white">{title}</h2>
            <img src={dotLine} className="mx-auto my-5"></img>
            {date && <p className="text-center pb-3 text-white">{date}</p>}
            <p className="max-w-xl mx-auto mb-5 text-[#ff9fac]">{info}</p>
            <div className="bg-[#191818] text-white cursor-pointer hover:bg-gray-600 w-max mx-auto py-2 px-10 rounded text-base">SOLD OUT</div>
        </div>
    )
}

export default MainContentTitle;