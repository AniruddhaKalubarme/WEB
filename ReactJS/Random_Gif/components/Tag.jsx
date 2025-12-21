import {useState} from 'react'
import useMyhook from '../Hooks/useMyhook'


export default function Tag()
{
    const [search, setSearch] = useState("Shiavaji Maharaj")
    const {GIF, loading, fetchData} = useMyhook(search);

    function GIFHandler()
    {
        fetchData();
    }

    function searchHandler(e)
    {
        setSearch(e.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center pt-4 bg-white/30 w-1/2 place-self-center pb-4 border-1 border-green-200 rounded-lg">
            <div className="h-80 w-80 flex justify-center items-center overflow-hidden">
                {loading ? <div className="loader"></div> : <img src={GIF}></img>}
            </div>
            <input type="text" onChange={searchHandler} className="py-1 mt-2 px-1 w-1/2 outline-blue-500 text-white font-semibold rounded-xl border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
            <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition mt-2 w-fit" onClick={GIFHandler}>Generate</button>
        </div>
    )
}