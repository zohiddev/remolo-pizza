import React, { useState } from 'react'
import { settings } from './settings';
import { Input } from '../components';
import { setUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ClickIcon from '../components/ui/ClickIcon';
import { CheckOutlined   } from '@ant-design/icons';
import UserChekIcon from '../components/ui/UserChekIcon';


const initialActiveInput = {
    name: false,
    addres: false,
    phone: false
}

function OrderSettingsData() {
    const [activeInput, setActiveInput] = useState(initialActiveInput);
    const {user} = useSelector(state => state)
    const dispatch = useDispatch();

    const changeActive = (key) => {
        setActiveInput({
            ...activeInput,
            [key]: !activeInput[key]
        })
    }
    const blurHandler = () => {
        setActiveInput(initialActiveInput)
    } 

    const handleChange = (e, key) => {
        dispatch(setUser({key, value: e.target.value}))  
    }
  return (
    <div className="order-card">
        {
            settings.map((item) => {
                return (
                    <div className="order-card__description" key={item.id}>
                        <span className="order-card__title">{item.title}</span>
                        
                        <div className="order-card__input">
                        {
                            activeInput[item.key]
                            ? 
                             <Input value={user[item.key]} placeholder={item.text} onBlur={blurHandler} onChange={(e) => handleChange(e, item.key)}/> 
                            : 
                            
                            <span className="order-card__text" >{user[item.key] ? user[item.key] : item.text}
                            </span>
                            
                        }
                        
                        
                        <button className='user__btn' onClick={() => changeActive(item.key)}>
                               {
                                activeInput[item.key] ? <CheckOutlined />: <ClickIcon/>
                               } 
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default OrderSettingsData;