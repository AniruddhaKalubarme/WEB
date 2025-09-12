import {useState} from 'react';

function Card({id, image, info, price, name, removeTour})
{
    const [ReadMore, setReadMode] = useState(false);

    function ReadModeHandler()
    {
        setReadMode(!ReadMore);
    }

    // Show full info if ReadMore is true, else show first 200 chars
    const description = ReadMore ? info : `${info.substring(0, 200)}...`;

    return(
        <div className="card flex flex-col items-center p-4 m-4 border-2 border-gray-300 rounded-lg shadow-lg w-[370px]">
            <img src={image} className="image" width="250px"></img>
            <div className = "card-info flex flex-col gap-3 text-xl">
                <div className="tour-details mt-4">
                    <h4 className="tour-name font-bold text-2xl mb-2">{name}</h4>
                    <h4 className="tour-price text-green-400 font-bold">${price}</h4>
                </div>
                <div className="description text-justify mb-4 text-[16px]">
                    {description}
                    <span className="Read" onClick={ReadModeHandler} style={{color: "blue", cursor: "pointer", marginLeft: "8px"}}>
                        {ReadMore ? 'Show Less' : 'Read More'}
                    </span>    
                </div>
            </div>

            <button onClick={() => removeTour(id)} className="px-20 py-2 border-2 border-black rounded-lg bg-blue-200"> Not Interested </button>
        </div>
    )
}

export default Card;