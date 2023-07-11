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
      return alert("Maydonlarni to'ldiring")
    }

    dispatch(loginRequest(formState))
  }

  return (
    <div className='login-page'>
      <div className='login-page__container'>
        <div className='login-page__imageWrapper'>
          <div className='login-page__image'>
            <img src={loginImg} alt='login-img' />
          </div>
        </div>

        <div className='login-page__form'>
          <div className='login-page__formGroup'>
            <label htmlFor='email' className='login-page__label'>
              Email:
            </label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={onInputChange}
              className='login-page__input'
            />
          </div>
          <div className='login-page__formGroup'>
            <label htmlFor='password' className='login-page__label'>
              Password:
            </label>
            <input
              type='password'
              name='password'
              id='password'
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
