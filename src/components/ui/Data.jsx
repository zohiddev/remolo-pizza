import { Link, useLocation } from "react-router-dom";
import { Button } from "./Button";
import parse from "html-react-parser";

export const Data = ({ children, className, onClick }) => {
  const { icon, name, url } = children;

  const location = useLocation();

  const content = (
    <>
      <span className={`${className}__icon`}>{parse(icon)}</span>
      <span className={`${className}__name`}>{name}</span>
    </>
  );

  return (
    <>
      {url ? (
        <Link
          to={url}
          className={
            url === location.pathname ? `${className} active` : className
          }
          onClick={onClick}
        >
          {content}
        </Link>
      ) : (
        <Button className={className} onClick={onClick}>
          {content}
        </Button>
      )}
    </>
  );
};
