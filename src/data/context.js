import { createContext } from 'react';

import { navLinkData } from "./navLink";
import { footerLinkData } from "./footerLink";
import { festivalData } from "./festival";
import { fringeData } from './fringe';
import { mainContentData } from './mainContent';
import { popUpData } from './popUp';
import { sponsorsData } from './sponsors';
import { workshopData } from './workshop';

export const allData = {
    navLinkData,
    footerLinkData,
    festivalData,
    fringeData,
    mainContentData,
    popUpData,
    sponsorsData,
    workshopData
}

export const context = createContext();