import React from "react";

const Drawer = ({ isOpen, onClose, position = "right", children }) => {
  if (!isOpen) return null;

  const positionClasses = {
    right: "right-0 top-0 h-full w-80",
    top: "top-0 left-0 w-full h-64",
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Close Button (outside drawer) */}
      <button
        onClick={onClose}
        className="absolute top-4 left-4 z-50 text-white text-xl font-bold bg-red-500 px-2 py-1 rounded hover:bg-red-600"
      >
        ✕
      </button>

      {/* Drawer Panel */}
      <div
        className={`fixed bg-white shadow-lg p-6 transition-transform duration-300 ${
          position === "right"
            ? "transform translate-x-0 right-0"
            : "transform translate-y-0 top-0"
        } ${positionClasses[position]}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
