import React from "react";
import Container from "../components/Container/index";
import Button2 from "../components/Button2/index";
import Button3 from "../components/Button3/index";

// import Button4 from "../components/Button4/index";
// import circle from "../circle.svg";
import "./style.css";

function Bag() {
  return (
    <div>
      <Container>
        <div>
          <div className="row">
            <div className="col-sm-4">
              <div>
                <p className="shop"> Shopping Bag </p>
              </div>
              <div>
                <figure>
                  <img
                    className="watch"
                    src="https://s3-alpha-sig.figma.com/img/2704/b014/ffd6260fbbc87818fa1cd2a1d93a5e8e?Expires=1653868800&Signature=RhHY5qHFi-qnCTBB~bnic~TDsQE1jYAGlydMglof2Ji4d8nJU3MMwmxAJuIFUkKbRzYIvla8jZTGYODHWV3zan0HfaxCRk8mdpsPqh00wGaPVkRtsRZweC7iqUW1qh2R3pvmt8CSY8tIavGx3oVUV3uhHHKhUQztG4IbB6L81qYB8eEQiPQBACH0AQKS5ly8UhVp4xnq67jMuXL-dvUyyQGAhjWu9ldXFB2TDrdEg-Uafm8sE4VjZgps~HhAJSTArBKh6a4viyWc7X5~vcAgmZuHceWrf~vk57j1j0IjAHuRomk3riXUmWQyHMdCr5yKbDvEXGhSGsDV3waU1zWULQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA "
                    alt="watch"
                  />
                  <figcaption>Wrist Watch $159.00</figcaption>
                </figure>
              </div>
            </div>

            <div className="col-sm-4 ">
              <div>
                <figure>
                  <img
                    className="bag"
                    src="https://s3-alpha-sig.figma.com/img/a57f/ac81/3b1fcc1eac80e0452bed783129d1dd85?Expires=1653868800&Signature=KzwtSFU9BNGQah8dmsH4iD9LpxtFVpEdKO~Tch-9t3yLil2DMSi2X-P7vhxJjQu-9MmwfGfKzbIb8QRGAxX3q7spZd0s7tM6l6KL~bLZnrAbd50ujd-cpJ9bQtcRNSCnIrgqXnUsD0~NGGuTT-KbZct56fCR5-~okvM3rqmyGVaoZPJbu4GXFJQM1JIrCWvE2JzTkDYSLAy-EgVecFXziztnFiXBXYIARKUhbiAA3E9XgTO1czCl7cv9SaOF0qgoFeME2nCigTOeJs9G2MPXiLMG9J42tTUsKPHvdYklNo~bOQmOfX2m8ojLrHD0Caiv6pSHT9dgr15E~uvxXCJE7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="backpack"
                  />
                  <figcaption className="classic">
                    {" "}
                    Classic Bag $89.00{" "}
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="col-sm-4">
              {/* order info goes here */}
              <Button3> </Button3>
              <div>
                <p className="order"> Order Summary </p>
              </div>

              <div className="next">
                <ul className="firstL">
                  <li className="margin"> Subtotal </li>
                  <li className="top"> Taxes </li>
                  <li className="top"> Shipping </li>
                  <li className="top"> Total </li>
                </ul>

                <ul className="secondL">
                  <li className="margin"> $248.00 </li>
                  <li className="top"> $49.60 </li>
                  <li className="top"> Free </li>
                  <li className="top"> $297.60 </li>
                </ul>
              </div>

              <Button2> </Button2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Bag;
