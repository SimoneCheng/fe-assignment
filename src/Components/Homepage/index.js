import InfoBlock from "./InfoBlock";

const infoBlockData = [
    {
        title: "Workshop",
        info: "Disconnect and make something with your own hands. In this year’s workshops, you’ll learn a traditional craft from accomplished masters from around the world, then leave at the end of the day with what you’ve made."
    },
    {
        title: "Festival",
        info: "We’re just getting started. Build isn’t just a conference—it’s a week long festival of events. Here’s a taste of the rest of the week, with more to come."
    },
    {
        title: "Fringe",
        info: "Our fringe events are spread throughout the week, filling the evenings with even more incredible things to do. Here’s a few to get you started."
    }
]

function Homepage() {
    return (
        <>
        {infoBlockData.map((item) => <InfoBlock title={item.title} info={item.info} />)}
        </>
    )
}

export default Homepage;