import React, { Fragment } from 'react'
const Sushi = ({state, sushi, eaten, id, name, img_url, price, created_at }) => {
  
  
  
  return ( 
    <div className="sushi">
      <div className="plate" onClick={(e) => eaten(sushi)}>
        {
          
          state.map(each => each.id).includes(id) ? null : <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi