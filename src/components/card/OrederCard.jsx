import React, { useState } from 'react'
import { Icon } from '../ui/Icon'
import removeIconSvg from "../../assets/images/icons/remove-icon.svg";
import { useDispatch } from 'react-redux';
import OrderSettingsData from '../../data/OrderSettingsData';

export default function OrederCard({setIsChekout}) {




  return (
    <>
    <div className="cart__action-row">
        <div className="text__wrapper">
          <p className="cart__description">Chekout</p>
          <p className="cart__quantity">Confirme su pedido</p>
        </div>
        <Icon clickHandler={() => setIsChekout(false)} >
          <img src={removeIconSvg} alt="delete icon" />
        </Icon>
      </div>

      <OrderSettingsData/>
 
      
    </>
  )
}
