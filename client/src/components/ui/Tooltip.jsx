const Tooltip = ({ text, children }) => (
  <div className="relative group inline-block cursor-pointer">
    {children}
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs rounded py-1 px-2 pointer-events-none z-50">
      {text}
    </div>
  </div>
);

export default Tooltip;
