import React from "react";
import Container from "../components/Container/index";
import Button from "../components/Button/index";
import Header from "../components/Header/index";
import Image from "../components/Header/index";
// import Card from "../components/Card/index";
import "./style.css";

function Fashion() {
  return (
    <div>
      <Container>
        {/* use image picker in the first row  */}
        {/* big image goes in the second row */}

        <div className="row">
          <div>
            <img src="../images/Clothes/skirt.jpg" alt="skirt" />
          </div>
        </div>

        {/* The third row includes Header, Price, Description, Quanity, Add to Bag and Button */}
        <div className="row">
          <Header> </Header>
          <div>
            <p> $219.00 </p>
            <p className="Bold"> Description </p>
            <p>
              Inspired by the multifold drapes of the Indian dhoti, this is an
              edgier version designed for modern asymmetry. Worn with character,
              the expressive side slinging pocket and versatile wrap fit are
              easily styled for a beach day out or evening tipples.
            </p>
            <p className="Bold"> Quanity </p>
          </div>
        </div>
        <Button> </Button>
      </Container>
    </div>
  );
}

export default Fashion;
