import React from 'react';

const CardFront = props => {

    return (
      <div className="card-front" style={{backgroundImage: `url(${props.imageUrl})`}}>
      {/* <div className="card-front" style={{backgroundColor: "#bad48c"}}> */}
      </div>
    )
  }

export default CardFront