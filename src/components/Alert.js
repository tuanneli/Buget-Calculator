import React from 'react';

const Alert = ({text}) => {
  return (
    <div className={`absolute left-1/2 -translate-x-1/2 text-red-600 mt-1`}>
      {text}
    </div>
  );
};

export default Alert;

