import React from 'react';
import { useSelector } from "react-redux";
import loginImage from '../../assets/images/Login-Image.jpg'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginRequest } from '../../redux/actions/authActions';
import UserIcon from '../../components/ui/UserIcon';
import PasswordIcon from '../../components/ui/PasswordIcon';
import Loader from '../../components/ui/Loader';

export const LoginPage = () => {
    const initialFormState = {
        email: '',
        password: '',

    }

    const { loading } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [formState, setFormState] = useState(initialFormState);

    const onInputChange = ({ target }) => {
        const { value, name } = target
        setFormState({ ...formState, [name]: value })
    }

    const onSubmit = () => {
        if (formState.email.trim() === '' || formState.password.trim() === '') {
            return alert('Maydonlarni toldiring')
        }
        dispatch(loginRequest(formState))

    }

    return (
        <div className='login-page'>
            <div className="login-page__container">
                <div className="login-page__form">
                    <h1>Log In</h1>
                    <div className="login-page__formGroup">
                        <UserIcon />
                        <input placeholder='Your Login' type="email" name='email' id='email' className='login-page__input' onChange={onInputChange} />
                    </div>
                    <div className="login-page__formGroup">
                        <PasswordIcon />
                        <input placeholder='Password' type="password" name='password' id='password' className='login-page__input' onChange={onInputChange} />
                    </div>
                    <div className="login-page__formGroupBtn">
                        <button onClick={onSubmit} disabled={loading} className='login-page__btn'>
                            {loading ? <Loader /> : 'Login'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

