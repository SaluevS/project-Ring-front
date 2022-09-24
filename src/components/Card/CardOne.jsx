import React from "react";

const CardOne = ({ item }) => {

  return (
    <div>
     {item.title}
     <br />
     {item.price}<span>$</span>
     <br />
     <img width={'400px'} src={`http://localhost:3400/images/${item.image}`} alt="" />
    </div>
  );
};

export default CardOne;
