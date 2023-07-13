import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Aside, Cart } from "./layouts";
import { routes } from "./utils";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "./components";
import { removeAlert } from "./redux/slices/layoutSlice";

export function App() {
  const { layout } = useSelector((state) => state);

  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(removeAlert());
  }, 3000);

  return (
    <>
      <Aside />
      <div id="main-content__row">
        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
      </div>
    </>
  );
}
