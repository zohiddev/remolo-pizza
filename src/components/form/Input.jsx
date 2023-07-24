export const Input = ({ icon, placeholder, type = 'text', value, onChange = () => {}, onBlur = () => {}, additionalClasses = [] }) => {
  return (
    <div className={`input ${additionalClasses.map((cls) => cls)}`}>
      {icon && icon}
      <input type={type} value={value} placeholder={placeholder} onBlur={onBlur} onChange={onChange }   />
    </div>
  );
};
