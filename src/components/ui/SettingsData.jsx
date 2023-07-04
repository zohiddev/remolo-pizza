import React, { useState } from 'react'
import { settings } from '../../data/settingsData'
import { Input } from '../form/Input'
import { useDispatch, useSelector } from 'react-redux'
import {  setUser } from '../../redux/slices/userSlice'

const intialActiveInput = {
  name: false,
  address: false,
  phone: false,
}

function SettingsData() {
  const [activeInput, setActiveInput] = useState(intialActiveInput)
  const { user } = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(user)

  const changeActive = (key) => {
    setActiveInput({
      ...activeInput,
      [key]: !activeInput[key],
    })
  }

  const blurHandler = () => {
    setActiveInput(intialActiveInput)
  }

  const handleChange = (e, key) => {
    dispatch(setUser({ key, value: e.target.value }))
  }

  return (
    <div className='settings__data'>
      {settings.map((item) => {
        return (
          <div className='settings__data__item' key={item.id}>
            <span className='settings__data__item-title'>{item.title}</span>
            <span className='settings__data__item-desc'>
              {item.description}
            </span>
            {activeInput[item.key] ? (
              <Input
                value={user[item.key]}
                placeholder={item.text}
                onBlur={blurHandler}
                onChange={(e) => handleChange(e, item.key)}
              />
            ) : (
              <span
                className='settings__data__item-text'
                onDoubleClick={() => changeActive(item.key)}
              >
                {user[item.key] ? user[item.key] : item.text}
              </span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default SettingsData
