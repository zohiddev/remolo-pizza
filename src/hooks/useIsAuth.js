import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../redux/slices/authSlice'

function useIsAuth() {
  const { tokens, isAuth } = useSelector((state) => state.auth)
  const navigator = useNavigate()
  const dispatch = useDispatch()

  return useMemo(() => {
    if (
      Boolean(tokens.accessToken?.trim().length) &&
      Boolean(tokens.refreshToken?.trim().length)
    ) {
      dispatch(setAuth(true))
      navigator('/products')
    } else {
      dispatch(setAuth(false))
    }

    return isAuth
  }, [tokens])
}

export default useIsAuth
