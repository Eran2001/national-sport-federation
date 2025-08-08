const Card = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
    {children}
  </div>
);

export default Card;
