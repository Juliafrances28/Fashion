import React from "react";
import Container from "../components/Container/index";
import Button2 from "../components/Button2/index";
// import Header2 from "../components/Header2/index";
// import Image from "../components/Header/index";
// import Card from "../components/Card/index";
import "./style.css";

function Bag() {
  return (
    <div>
      <Container>
        <div>
          <div className="row">
            <div className="col">
              <div className="bag">
                <img
                  src="https://s3-alpha-sig.figma.com/img/2704/b014/ffd6260fbbc87818fa1cd2a1d93a5e8e?Expires=1653868800&Signature=RhHY5qHFi-qnCTBB~bnic~TDsQE1jYAGlydMglof2Ji4d8nJU3MMwmxAJuIFUkKbRzYIvla8jZTGYODHWV3zan0HfaxCRk8mdpsPqh00wGaPVkRtsRZweC7iqUW1qh2R3pvmt8CSY8tIavGx3oVUV3uhHHKhUQztG4IbB6L81qYB8eEQiPQBACH0AQKS5ly8UhVp4xnq67jMuXL-dvUyyQGAhjWu9ldXFB2TDrdEg-Uafm8sE4VjZgps~HhAJSTArBKh6a4viyWc7X5~vcAgmZuHceWrf~vk57j1j0IjAHuRomk3riXUmWQyHMdCr5yKbDvEXGhSGsDV3waU1zWULQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA "
                  alt="watch"
                />
                <figcaption>Wrist Watch $159.00</figcaption>
              </div>
            </div>

            <div className="bag">
              <figure>
                <img
                  src="https://s3-alpha-sig.figma.com/img/a57f/ac81/3b1fcc1eac80e0452bed783129d1dd85?Expires=1653868800&Signature=KzwtSFU9BNGQah8dmsH4iD9LpxtFVpEdKO~Tch-9t3yLil2DMSi2X-P7vhxJjQu-9MmwfGfKzbIb8QRGAxX3q7spZd0s7tM6l6KL~bLZnrAbd50ujd-cpJ9bQtcRNSCnIrgqXnUsD0~NGGuTT-KbZct56fCR5-~okvM3rqmyGVaoZPJbu4GXFJQM1JIrCWvE2JzTkDYSLAy-EgVecFXziztnFiXBXYIARKUhbiAA3E9XgTO1czCl7cv9SaOF0qgoFeME2nCigTOeJs9G2MPXiLMG9J42tTUsKPHvdYklNo~bOQmOfX2m8ojLrHD0Caiv6pSHT9dgr15E~uvxXCJE7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="backpack"
                />
                <figcaption> Classic Bag $89.00 </figcaption>
              </figure>
            </div>
          </div>

          {/* <div>
              <p>
                {" "}
                Shopping Bag <p> Bag Summary </p>{" "}
              </p>
            </div> */}

          <div className="row">
            <div className="col purchase">
              {/* order info goes here */}
              <div className="next">
                <ul className="firstL">
                  <li> Subtotal </li>
                  <li> Taxes </li>
                  <li> Shipping </li>
                  <li> Total </li>
                </ul>

                <ul className="secondL">
                  <li> $248.00 </li>
                  <li> $49.60 </li>
                  <li> Free </li>
                  <li> $297.60 </li>
                </ul>
              </div>

              <Button2 className="checkout"> </Button2>
            </div>
            <div className="row">
              <div></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Bag;