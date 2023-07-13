export const ContentList = ({ array, className, Node = {} }) => {
  const { Tag, nodeClassName, onClick } = Node;
  return (
    <div className={className}>
      {array.map((item, index) => (
        <Tag key={index} className={nodeClassName} onClick={onClick}>
          {item}
        </Tag>
      ))}
    </div>
  );
};
