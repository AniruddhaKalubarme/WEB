import ChildA from "./ChildA"
import {createContext, useState} from 'react'

export const userContext = createContext();
export const themeContext = createContext();

export default function Shiv()
{
    const [name, setname] = useState("ANiruddha");
    const [theme, settheme] = useState("light");

    return (

        <themeContext.Provider value={{theme, settheme}}>

            <userContext.Provider value={{name, setname}}>
                <ChildA/>
                <div>
                    name:{name}
                </div>
            </userContext.Provider>

        </themeContext.Provider>

    )
}