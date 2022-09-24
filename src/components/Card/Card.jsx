import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../features/cardSlice";
import CardOne from "./CardOne";


const Card = () => {
      
      const cards = useSelector((state)=> state.cardSlice.cards)
    
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(fetchCard())
      }, [dispatch]);
      

  return (
    <div>
    {cards.map((item,index) => {
    return(
      <CardOne item={item} key={index}/>) 
     })}
    </div>  

  );
};

export default Card;

