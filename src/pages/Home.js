import React from "react";
import Hero from "../components/Hero/index";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="">
          <h1> Stylish Deals </h1>
          <h2> The home for the best deals </h2>
        </Hero>
      </div>
    );
  }
}

export default Home;
