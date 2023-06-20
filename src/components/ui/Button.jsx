export const Button = ({ text, icon, additionalClasses = [], onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${additionalClasses.map((cls) => cls)}`}
    >
      {text}
      {icon && icon}
    </button>
  );
};
