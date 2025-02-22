import React from "react";

const CommonBtn = ({ children }) => {
  return (
    <button
      type="submit"
      className="w-full text-white py-3 bg-red-400 hover:bg-red-100 rounded-lg transition-colors"
    >
      {children}
    </button>
  );
};

export default CommonBtn;
