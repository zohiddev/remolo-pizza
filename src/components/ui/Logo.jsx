import logoSvg from "/src/assets/images/logo.svg";
import logoTextSvg from "/src/assets/images/logo-text.svg";

export const Logo = ({ additionalClasses = [] }) => {
  return (
    <a href="/" className={`img ${additionalClasses.map((cls) => cls)}`}>
      <img className="logo" src={logoSvg} alt="logo" />
      <img className="logo-text" src={logoTextSvg} alt="logo-text" />
    </a>
  );
};
