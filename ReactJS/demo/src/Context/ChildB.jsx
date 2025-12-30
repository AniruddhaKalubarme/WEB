import ChildC from "./ChildC"
import {themeContext} from "./aniruddha"
import {useContext} from "react";

export default function ChildB(){

    const { theme, settheme } = useContext(themeContext);

    function demo()
    {
        settheme(theme == "light" ? "dark" : "light");
    }

    return (
        <div>
        THeme:{theme}
        <br></br>
        <button onClick = {demo}>
            change theme
        </button>
        <ChildC></ChildC>
        </div>
    )
}