import { Layout, Cart } from './components'
import { routes, adminRoutes } from './utils/routes'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useIsAuth from './hooks/useIsAuth';



function App() {

  const { pathname } = useLocation()

  const isCart = ['/', '/favourites']

  const { isAuth: auth } = useSelector((state) => state.auth)
  const isAuth = useIsAuth()

  return (
    <>
      <Layout />
      <div id='main-content__row'>

        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}

          {auth
            ? adminRoutes.map(({ id, path, component }) => (
              <Route key={id} path={path} element={component} />
            ))
            : null}

        </Routes>

        {isCart.includes(pathname) ? <Cart /> : null}
      </div>
    </>
  )
}

export default App
