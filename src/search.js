import React from 'react';

const Search = () => {
  return (
    <div>
      <header>
        <form method="post" className="searching_form">
          <img src="./weather-icons/clear.svg" className="logo_svg" />
          <input
            type="text"
            className="searching_box"
            placeholder="Type a city here..."
          />
          <button className="submit_btn">Search</button>
        </form>
      </header>
      <hr className="line" />
    </div>
  );
}
export default Search;

