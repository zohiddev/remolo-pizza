export const Icon = ({ children, additionalClasses = [], onClick }) => {
  return (
    <span
      className={`icon ${additionalClasses.map((cls) => cls)}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
