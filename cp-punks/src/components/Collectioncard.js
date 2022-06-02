import React from 'react'

import weth from "../assets/weth.png"
export const Collectioncard = ({id, name, traits, image}) => {
  return (
    <div className= "collectionCard">
        <img src= {image}  alt= "" />
        <div className="details"></div>
        <div className="name">
            {name} <div className="id"> .#{id}</div>
            <div className="priceContainer">
                <img src = {weth} className = "wethImage" />
                <div className= "price">{traits[0]?.value}</div>
            </div>
        </div>
    </div>
  )
}

export default Collectioncard