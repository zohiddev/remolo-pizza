import { useSelector } from "react-redux";
import { Layout, Cart } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { routes, adminRoutes } from "./utils/routes";
import useIsAuth from "./hooks/uselsAuth";
import { CartMobile } from "./components/cart/CartMobile";





function App() {

  // const [categories, setCategories] = useState([]);
  const {pathname } = useLocation();
  const {isAuth: auth} = useSelector((state) => state.auth)
  // const routesList = isAuth ? adminRoutes : routes
  const isCart = ['/', '/favourite']
  const isAuth = useIsAuth()

  return (
    <>
      <Layout />
      <div id="main-content__row">
        {/* <CartMobile/> */}
        <Routes>
          {
          routes.map(({id, path, component}) => (
          <Route key={id} path={path} element={component} />
          ))}
            {auth ? adminRoutes.map(({id, path, component}) => (
              <Route key={id} path={path} element={component} />
              )) 
            : null}
          
        </Routes> 


        {
          isCart.includes(pathname) ? <Cart /> : null
        }  
        
      </div>
        <CartMobile/>
        
    </>
  );
}

export default App;
