import { context, allData } from "../../data/context";

import Header from "../Header";
import MainContentBlock from "./MainContentBlock";
import InfoBlock from "./InfoBlock";
import Sponsors from "./Sponsors";
import Footer from "../Footer";

const {
    mainContentData,
    workshopData,
    festivalData,
    fringeData,
    popUpData
} = allData;

function Homepage() {
    return (
        <context.Provider value={allData}>
            <Header />
            <MainContentBlock title={mainContentData.title} info={mainContentData.info} date={mainContentData.date} conferenceSpeakers={mainContentData.conferenceSpeakers} />
            <InfoBlock title={workshopData.title} info={workshopData.info} features={workshopData.features} />
            <InfoBlock title={festivalData.title} info={festivalData.info} features={festivalData.features} />
            <InfoBlock title={fringeData.title} info={fringeData.info} features={fringeData.features} />
            <InfoBlock features={popUpData.features} />
            <Sponsors />
            <Footer />
        </context.Provider>
    )
}

export default Homepage;