import { createContext, useEffect, useState } from "react";
import dataF from "../assets/data.json"; 

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState(dataF);
    return (
        <DataContext.Provider value={data} >
            {children}
        </DataContext.Provider>
    );
}

export { DataContext, DataProvider }