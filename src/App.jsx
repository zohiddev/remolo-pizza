import { Layout, Cart } from './components'
import { routes } from './utils/routes'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()
  const isCart = ['/', '/favourites']

  return (
    <>
      <Layout />
      <div id='main-content__row'>
        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component()} />
          ))}
        </Routes>
        {isCart.includes(pathname) ? <Cart /> : null}
      </div>
    </>
  )
}

export default App
