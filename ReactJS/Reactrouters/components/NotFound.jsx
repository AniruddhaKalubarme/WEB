import {useNavigate} from 'react-router-dom'

export default function NotFound()
{
    const navi = useNavigate();
    function home()
    {
        navi("/");
    }

    return(
        <div>
            <div>Page is not exist</div>
            <button onClick={home}>home</button>
        </div>
    )
}