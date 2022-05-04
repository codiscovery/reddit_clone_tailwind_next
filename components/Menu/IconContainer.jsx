function IconContainer({ children, className = "" }) {
  const defaultClasses = ["px-2", "py-4", "flex", "justify-center"];
  const classNames = defaultClasses.concat(className.split(" ")).join(" ");
  return <div className={classNames}>{children}</div>;
}

export default IconContainer;
