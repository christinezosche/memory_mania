import React from 'react';

const CardFront = props => {

    return (
      <div className="card-front" style={{backgroundImage: `url(${props.imageUrl})`}}>
      </div>
    )
  }

export default CardFront