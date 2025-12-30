import {useContext} from 'react';
import {userContext} from './aniruddha';


export default function ChildA(){
    const {name, setname} = useContext(userContext);

    function demo()
    {
        setname("shivpratap")
    }

    return (
        <div>
            Iside the child C block
            <br></br>
            <button onClick={demo}> Click me</button>
        </div>
    )
}