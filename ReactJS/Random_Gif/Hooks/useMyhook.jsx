import {useState, useEffect} from 'react'
import axios from 'axios'

const API = import.meta.env.VITE_API_KEY;

export default function useMyhook(search)
{
    const randUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API}`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${search}`;
    const [GIF, setGIF] = useState('');
    const [loading, setLoading] = useState(true);

    async function fetchData()
    {
        setLoading(true);
        try {
            const {data} = await axios.get(search ? url : randUrl);
            
            const imageSource = search ? data.data[0] : data.data;
            
            if (imageSource) {
                const image = imageSource.images.downsized.url;
                setGIF(image);
            } else {
                 console.log("No results found");
            }

        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    }, []) // Logic note: If you want Tag to update immediately on mount, this is fine.

    return {GIF, loading, fetchData};
}   