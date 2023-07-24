export const Icon = ({ children,  additionalClasses = [], clickHandler }) => {
  return (
    <span
      className={`icon ${additionalClasses.map((cls) => cls)}`}
      onClick={clickHandler}
    >
      { children}
    </span>
  );
};
