export const Input = ({ icon, placeholder, additionalClasses = [] }) => {
  return (
    <div className={`input ${additionalClasses.map((cls) => cls)}`}>
      {icon && icon}
      <input type="search" placeholder={placeholder} />
    </div>
  );
};
