import { Button } from "./Button";

export const Quantity = ({ quantity, increase, decrease }) => {
  return (
    <div className="quantity__wrapper">
      <Button 
        text={"-"}
        additionalClasses={["decrease default"]}
        clickHandler={decrease}
      />
      <div className="quantity">
        <span className="quantity__text">{quantity}</span>
      </div>
      <Button
        text={"+"}
        additionalClasses={["increase default"]}
        clickHandler={increase}
      />
    </div>
  );
};