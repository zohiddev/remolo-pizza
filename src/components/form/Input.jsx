export const Input = ({
  icon,
  placeholder,
  additionalClasses = [],
  onChange,
}) => {
  return (
    <div className={`input ${additionalClasses.map((cls) => cls)}`}>
      {icon && icon}
      <input type="search" placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
