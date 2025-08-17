export const Badge = ({
  children,
  status = "active", // can be 'active', 'pending', 'archived'
  roundedFull,
  roundedLg,
  roundedNone,
  roundedSm,
  roundedMd,
}) => {
  // Define colors for each status
  const statusStyles = {
    active: {
      bg: "bg-green-100",
      text: "text-green-700",
    },
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
    },
    archived: {
      bg: "bg-gray-100",
      text: "text-gray-700",
    },
  };

  const { bg, text } = statusStyles[status] || statusStyles["active"];

  const roundedClass =
    (roundedFull && "rounded-full") ||
    (roundedLg && "rounded-lg") ||
    (roundedNone && "rounded-none") ||
    (roundedSm && "rounded-sm") ||
    (roundedMd && "rounded-md") ||
    "rounded";

  return (
    <span
      className={`inline-block py-1 px-2.5 text-xs font-medium ${bg} ${text} ${roundedClass}`}
    >
      {children}
    </span>
  );
};
