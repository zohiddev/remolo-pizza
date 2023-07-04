import { useDispatch, useSelector } from 'react-redux'
import { Layout, Cart } from './components'
import { routes, adminRoutes } from './utils/routes'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { setAuth } from './redux/slices/authSlice'

function App() {
  const { pathname } = useLocation()
  const { tokens, isAuth } = useSelector((state) => state.auth)
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const isCart = ['/', '/favourites']

  useEffect(() => {
    if (
      Boolean(tokens.accessToken?.trim().length) &&
      Boolean(tokens.refreshToken?.trim().length)
    ) {
      dispatch(setAuth(true))
      navigator('/products')
    } else {
      dispatch(setAuth(false))
    }
  }, [tokens])

  return (
    <>
      <Layout />
      <div id='main-content__row'>
        <Routes>
          {isAuth
            ? adminRoutes.map(({ id, path, component }) => (
                <Route key={id} path={path} element={component()} />
              ))
            : routes.map(({ id, path, component }) => (
                <Route key={id} path={path} element={component()} />
              ))}
        </Routes>
        {isCart.includes(pathname) ? <Cart /> : null}
      </div>
    </>
  )
}

export default App
