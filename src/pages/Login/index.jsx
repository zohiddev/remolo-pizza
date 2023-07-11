import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginRequest } from '../../redux/actions/authActions'

export const LoginPage = () => {
  const initialFromState = {
    email: '',
    password: ''
  }
  const { loading } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const [formState, setFromState] = useState(initialFromState)

  const onInputChange = (e) => {
    const { value, name } = e.target

    setFromState({ ...formState, [name]: value })
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if (formState.email.trim() === '' || formState.password.trim() === '') {
      return alert('Yaz ahi bir narsa')
    }
    dispatch(loginRequest(formState))

  }

  return (
    <div className="login__page">
      <div className="login-container">
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form>
            <input onChange={onInputChange} id='email' type="text" name='email' placeholder="USERNAME:" />

            <input id='password' onChange={onInputChange} type="password" name="password" placeholder="PASSWORD:" />

            <button className="opacity" disabled={loading} onClick={onSubmit}>{loading ? 'Loading...' : 'SUBMIT'}</button>
          </form>
          <div className="register-forget opacity">
            <Link to='#'>REGISTER</Link>
            <Link to='#'>FORGOT PASSWORD</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
