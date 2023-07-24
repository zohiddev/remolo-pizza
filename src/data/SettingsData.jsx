import React, { useState } from 'react'
import { settings } from './settings';
import { Input } from '../components';
import { setUser } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ClickIcon from '../components/ui/ClickIcon';
import { CheckOutlined   } from '@ant-design/icons';



const initialActiveInput = {
    name: false,
    addres: false,
    phone: false
}

function SettingsData() {
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
    <div className="settings__data">
        {
            settings.map((item) => {
                return (
                    <div className="settings__data__item" key={item.id}>
                        <span className="settings__data__item-title">{item.title}</span>
                        <span className="settings__data__item-desc">{item.description}</span>
                        <div className="c">
                        {
                            activeInput[item.key]
                            ? 
                             <Input value={user[item.key]} placeholder={item.text} onBlur={blurHandler} onChange={(e) => handleChange(e, item.key)}/> 
                            : 
                            
                            <span className="settings__data__item-text" >{user[item.key] ? user[item.key] : item.text}
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

export default SettingsData;