const Badge = ({ label, color = "bg-blue-500", textColor = "text-white" }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-sm ${color} ${textColor}`}
  >
    {label}
  </span>
);

export default Badge;
