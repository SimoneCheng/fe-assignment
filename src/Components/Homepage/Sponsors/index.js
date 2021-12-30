import { useContext } from "react";
import { context } from "../../../data/context";

function Sponsors() {
    const { sponsorsData } = useContext(context);

    return(
        <section className="text-center pb-14">
            <p className="pt-14 pb-8 text-gray-400">THANKS TO OUR SPONSORS</p>
            <div className="flex flex-wrap justify-center">
                {sponsorsData.map((item) => <img src={require(`${item.image}`)} className="w-40 m-5 cursor-pointer transition-all hover:opacity-25"></img>)}
            </div>
        </section>
    )
}

export default Sponsors;