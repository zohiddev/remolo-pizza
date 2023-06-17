import { Icon } from "./Icon";

export const BurgerIcon = ({ clickHandler }) => {
  return (
    <Icon additionalClasses={["burger-menu"]} clickHandler={clickHandler}>
      <span className="line-one line"></span>
      <span className="line-two line"></span>
      <span className="line-three line"></span>
    </Icon>
  );
};
