export const IconInnerHtml = ({ children,  additionalClasses = [], clickHandler }) => {
  return (
    <span
      className={`icon ${additionalClasses.map((cls) => cls)}`}
      onClick={clickHandler}
      dangerouslySetInnerHTML={{__html:children}}
    >
    </span>
  );
};
