import React from 'react'

export default function Box({item}) {
  return (
    <div className='Box'>
        <img src={item.img} alt="" />
        <div className="boxInfo">
            <div className="boxInfoText">
                <p>{item.name}</p>
                <span>${item.price}</span>
            </div>
            <button className="boxInfoButton">+</button>
        </div>
    </div>
  )
}
