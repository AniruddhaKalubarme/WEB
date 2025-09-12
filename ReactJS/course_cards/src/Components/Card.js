import React from 'react';
import {useState} from 'react';
import { toast } from 'react-toastify';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import './Card.css'

const Card = ({ course }) => {

    const [liked, setLiked] = useState(false);


    function likeHandler() {
        if (liked) {
            toast.info("Removed from Liked ❤️"); 
        } else {
            toast.success("Added yo Liked ❤️"); 
        }
        setLiked(!liked);
    }

    return (
        <div className="card">
            <div className="card-img">
                <div className="cardIMG">
                    <img src={course?.image?.url} alt={course?.title} width="200"/>
                </div>

                <div className="like">
                    <button className="btn" onClick={likeHandler}>
                        {
                            liked ? <FcLike fontSize="1.75rem"></FcLike> : <FcLikePlaceholder fontSize="1.75rem"/>
                        }
                    </button>
                </div>
            </div>
            
            <div className="details">
                <p className="Title"> <strong>{course?.title}</strong></p>
                <p>{course?.description}</p>
            </div>
        </div>
    );
};

export default Card;