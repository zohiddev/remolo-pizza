export const Button = ({ clickHandler, text, icon, additionalClasses = [] }) => {
  return (
    <button className={`button ${additionalClasses.map((cls) => cls)}`} onClick={clickHandler}>
      {text}
      {icon && icon}
    </button>
  );
};
