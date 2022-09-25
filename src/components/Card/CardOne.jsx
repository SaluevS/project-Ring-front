import React from "react";
import PropTypes from 'prop-types'

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

CardOne.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }).isRequired
}


export default CardOne;
