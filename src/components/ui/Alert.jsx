export const Alert = ({ message, className }) => {
  return (
    <div className={`alert ${className}`}>
      <h5 className="alert-message">{message}</h5>
    </div>
  );
};
