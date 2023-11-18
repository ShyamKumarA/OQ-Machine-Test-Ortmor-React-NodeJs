import React from 'react'

function Card({id,desc,image}) {
  return (
    <div className='card_container'>
        <div className='card_icon'>
            <img src={image} alt='card_logo'></img>
        </div>
        <div className='card_text'>
            <h3>{desc}</h3>
        </div>
        <div className='card_btn'>
        <button type="button" style={{padding: "10px 27px" , border: "none" , backgroundColor: "#00AFB9" , color : "white", borderRadius: "20px"}}>Read More</button>
        </div>
    </div>
  )
}

export default Card