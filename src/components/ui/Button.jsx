export const Button = ({ text, icon, additionalClasses = [] }) => {
  return (
    <button className={`button ${additionalClasses.map((cls) => cls)}`}>
      {text}
      {icon && icon}
    </button>
  );
};
