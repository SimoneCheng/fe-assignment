import Header from "../Header";
import MainContentBlock from "./MainContentBlock";
import InfoBlock from "./InfoBlock";
import Sponsors from "./Sponsors";
import Footer from "../Footer";

const mainContentData = {
    title: "Get Ready to Build",
    date: "NOVEMBER 12-16, 2012 IN BELFAST, NORTHERN IRELAND",
    info: "Build is a festival for people who design for the web. For one week in November, a community of smart, talented people come together to share ideas, tell stories, get their hands dirty, and drink a few beers."
}

const workshopData = {
    title: "Workshop",
    info: "Disconnect and make something with your own hands. In this year’s workshops, you’ll learn a traditional craft from accomplished masters from around the world, then leave at the end of the day with what you’ve made.",
    features: [
        {
            img: "./images/bestmadeco.png",
            slogan: "BEST MADE COMPANY",
            subtitle: "Axe Restoration",
            content: "Join Best Made Co. for a two-day workshop on axe restoration, maintenance and use. We’ll end with a communal campfire and more axe and timber lore."
        },
        {
            img: "./images/leathercraft.png",
            slogan: "BILLYKIRK",
            subtitle: "Leather Craft",
            content: "Brothers Kirk and Chris Bray will spend the day teaching you the ins and outs of working with leather as you cut, press, stitch, dye and brand your own wallet."
        },
        {
            img: "./images/chocolate.png",
            slogan: "TAZA CHOCOLATE",
            subtitle: "Chocolatiering",
            content: "Founder Alex Whitmore will teach the intricacies of bean selection, the perfect roast, grind and temper—even designing and wrapping the perfect chocolate to take home."
        },
        {
            img: "./images/coffee.png",
            slogan: "BLUE BOTTLE COFFEE",
            subtitle: "Coffee Roasting",
            content: "James Freeman will join us for a full-day workshop on what makes a great cup of coffee. You’ll leave with the knowhow of the perfect cup of coffee."
        }
    ]
}

const festivalData = {
    title: "Festival",
    info: "We’re just getting started. Build isn’t just a conference—it’s a week long festival of events. Here’s a taste of the rest of the week, with more to come.",
    features: [
        {
            img: "./images/film_black.png",
            slogan: "",
            subtitle: "Film",
            content: "We’ll be screening excellent design-related films and documentaries, and keep the beer, popcorn, and pizza flowing as you curl up in the dark and enjoy some quality cinema with your fellow designers."
        },
        {
            img: "./images/practical.png",
            slogan: "",
            subtitle: "Practical",
            content: "Work, rest, or play. We’ll also host a Pecha Kucha at our mini-theatre, where you’ll also be able to show your work and discuss ideas with other attendees, or just crack open a beer and play some Mario Kart. Full line-up to be announced."
        },
        {
            img: "./images/music.png",
            slogan: "",
            subtitle: "Music",
            content: "It wouldn’t be a proper festival without quality live music. For the first time at Build, join us for a night of performances from some of the best bands around. We’re still confirming our lineup, so check back soon for full details."
        }
    ]
}

const fringeData = {
    title: "Fringe",
    info: "Our fringe events are spread throughout the week, filling the evenings with even more incredible things to do. Here’s a few to get you started.",
    features: [
        {
            img: "./images/kickstarter.png",
            slogan: "AN EVENING WITH",
            subtitle: "Kickstarter",
            content: "In this lecture, Charles Adler, co-founder of Kickstarter, will tell us all about Kickstarter’s past, present, and future."
        },
        {
            img: "./images/draplin.png",
            slogan: "AN EVENING WITH",
            subtitle: "Aaron Draplin",
            content: "In this evening lecture, Aaron Draplin, founder of Draplin Design Co, will share stories and lessons from his decade-long career."
        },
        {
            img: "./images/beer.png",
            slogan: "2ND ANNUAL",
            subtitle: "Craft Beer Festival",
            content: "Join us for an evening of local craft beers, featuring the best local micro­breweries and our very own extra-special Build beer."
        },
        {
            img: "./images/exam.png",
            slogan: "THE STANDARDISTAS’",
            subtitle: "Open Book Exam",
            content: "Requiring you to avail of the web’s wealth of knowledge to answer the quiz’s formidable questions, a uniquely difficult challenge."
        }
    ]
}

const popUpData = {
    features: [
        {
            slogan: "POP-UP SHOP",
            subtitle: "Draft Supply Co.",
            content: "New to Build in 2012 is the Draft Supply Co. pop-up shop, stocking quality goods for the discerning digital craftsman. Low on stationary, need a gift, or feel like picking up some Build swag? We’re open for business."
        },
        {
            slogan: "POP-UP CAFE",
            subtitle: "The Black Box",
            content: "We’ll be establishing a base of operations at The Black Box on Hill Street, right at the epicentre of the Build festivities. Our pop-up cafe will serve a full menu all day, offer free wifi, and will be staffed by Build volunteers who’ll be constantly on hand to answer any questions."
        }
    ]
}

function Homepage() {
    return (
        <>
            <Header />
            <MainContentBlock title={mainContentData.title} info={mainContentData.info} date={mainContentData.date} />
            <InfoBlock title={workshopData.title} info={workshopData.info} features={workshopData.features} />
            <InfoBlock title={festivalData.title} info={festivalData.info} features={festivalData.features} />
            <InfoBlock title={fringeData.title} info={fringeData.info} features={fringeData.features} />
            <InfoBlock features={popUpData.features} />
            <Sponsors />
            <Footer />
        </>

    )
}

export default Homepage;