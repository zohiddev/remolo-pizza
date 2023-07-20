import React, { useState } from 'react'
import loginImg from '../../assets/images/login-image.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '../../redux/actions/authActions'

export const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  }
  const { loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(initialFormState)

  const onInputChange = (e) => {
    const { value, name } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const onSubmit = () => {
    if (formState.email.trim() === '' || formState.password.trim() === '') {
      return alert("Yaz ahi bir narsa")
    }

    dispatch(loginRequest(formState))
  }

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        
        <div className='login-page__form'>
          <div className='login-page__formGroup'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email:'
              onChange={onInputChange}
              className='login-page__input'
            />
          </div>
          <div className='login-page__formGroup'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              onChange={onInputChange}
              className='login-page__input'
            />
          </div>
          <div className='login-page__formGroup'>
            <button
              className='login-page__button'
              disabled={loading}
              onClick={onSubmit}
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
