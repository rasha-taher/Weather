import React from 'react';

const MainMore = ({ title, value }) => {
  return (
    <div className="main_more">
      <p className="more_title">{title}</p>
      <p className="more_pressure">{value}</p>
    </div>
  );
}

export default MainMore;
