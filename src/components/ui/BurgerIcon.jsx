import { Icon } from "..";

export const BurgerIcon = ({ onClick }) => {
  return (
    <Icon additionalClasses={["burger-menu"]} onClick={onClick}>
      <span className="line-one line"></span>
      <span className="line-two line"></span>
      <span className="line-three line"></span>
    </Icon>
  );
};
