import React from 'react'

import SchoolContextProvider from "./stores/SchoolContextProvider.jsx";
import {SchoolList} from "./components/SchoolList.jsx";

export const SchoolApp = (props) => {
    return (
        <SchoolContextProvider>
            <SchoolList {...props} />
        </SchoolContextProvider>
    );
}
