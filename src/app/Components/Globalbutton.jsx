import React from 'react';

const GlobalButton = ({ bgColor, textColor, text }) => {
  return (
    <div className={`flex justify-center items-center p-4 rounded  cursor-pointer `}>
      <div className={`py-4 px-6 rounded text-${textColor} bg-${bgColor}`}>
        <p className="text-md md:text-lg font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default GlobalButton;
