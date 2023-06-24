export const Button = ({onClick, text, icon, additionalClasses = [] }) => {
  return (
    <button className={`button ${additionalClasses.map((cls) => cls)}`} onClick={onClick}>
      {text}
      {icon && icon}
    </button>
  );
};
