import React from "react";
import data from "../../data.json";
import ShowCard from "./ShowCard";
import Landing from "./Landing";
import Calendar from "./Calendar";
import Header from "./Header";
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";

const Search = props => {
  // const date1 = document.getElementById("date1").value;
  //  const date2 = document.getElementById("date2").value;
  // console.log(date1, date2);
  if (false) {
    //! date1 || !date2
    return <Landing />;
  }
  return (
    <div className="search">
      <Header />
      <div>
        {data.cars.map(cars => (
          <ShowCard id={props.detailsPage} key={cars.ID} {...cars} />
        ))}
      </div>
    </div>
  );
};

export default Search;
