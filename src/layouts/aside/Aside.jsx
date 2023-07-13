import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Logo, Data, ContentList, Loading } from "../../components";
import { toggleAside } from "../../redux/slices/layoutSlice";
import { getPages } from "../../redux/actions";
import { adminPages } from "../../data/pages";

export const Aside = () => {
  const layout = useSelector((state) => state.layout);
  const pages = useSelector((state) => state.pages);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPages());
  }, []);

  return (
    <div className={`aside ${layout.asideIsOpen ? "open" : ""}`}>
      {pages.isLoading ? <Loading /> : null}
      <div className="aside__header">
        <Logo />
        <Icon className="icon__burger" onClick={() => dispatch(toggleAside())}>
          <span className="line line-one"></span>
          <span className="line line-two"></span>
          <span className="line line-three"></span>
        </Icon>
      </div>
      {pages.items ? (
        <ContentList
          array={
            auth.isAuthenticated ? [...pages.items, ...adminPages] : pages.items
          }
          className="pages__list"
          Node={{
            Tag: Data,
            nodeClassName: "page",
          }}
        />
      ) : null}
    </div>
  );
};
