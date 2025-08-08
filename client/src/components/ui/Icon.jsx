import { Icon as IconifyIcon } from "@iconify/react";

const Icon = ({
  icon,
  text,
  position = "right",
  size = 24,
  className = "",
  textClass = "",
}) => {
  const isTextLeft = position === "left";

  return (
    <div className={`inline-flex items-center ${className}`}>
      {isTextLeft && text && (
        <span className={`mr-2 ${textClass}`}>{text}</span>
      )}
      <IconifyIcon icon={icon} width={size} height={size} />
      {!isTextLeft && text && (
        <span className={`ml-2 ${textClass}`}>{text}</span>
      )}
    </div>
  );
};

export default Icon;
