import React from "react";
import Container from "../components/Container/index";
// import Wrapper from "../components/Wrapper/index";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";

function Landing() {
  return (
    <div>
      <Container>
        <div className="row">
          <div className="col sm-4">
            <div>
              <div>
                <img
                  className="Blonde"
                  src="https://s3-alpha-sig.figma.com/img/49bc/1f02/b1d2353a1ca761ccf309bdc6383f107b?Expires=1653868800&Signature=O7xjmNnCRrMg8PluP0QnAAETgrPd4qpf6PBC7uAuYCBaHXVTCmIfi0BGh5biQ6Aj3RpyrelNeqd-ZO3M5f~NWEVlCapgPAB6brS0kKNBO6oXYvaNQQg8wTm56JpbYktChlpdNngym56P4tUsv9BhCq3PtQMwb61JfgSHqc-Nf1YGADnVLGjUlHNSv8kO3lbVjoSFypvRHgpc2Yh1EP2ufBcfJYN~MW9q6fmOF01vHCTUhvwKm03cHm5KLdHO9GXweGVXto3DStjMu4L7Ach6H3Qf9~jLHsRL8tjGud1b7aCVTW2ESOgqTnQ9md-MIscJJBQeuM1SD3FpIhakeE6toA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="Blonde"
                />
              </div>
            </div>
          </div>

          <div className="col sm-8 stuff">
            <div>
              <img
                className="variety buy"
                src="https://s3-alpha-sig.figma.com/img/b572/8f5a/26cf03e54a2712816688b8dfe6d9b903?Expires=1653868800&Signature=J0xwOUhePFKiuIlHDTjxBpjKnfqwInj6i9vYRGz4-tJ97woDAurvfDh18lnjhny8NLEz5h21Qc1KDOxIVuj70BlkdednfZ6YG0voIYQ5STdiVDkCwJ187vixHtAYEEz-aX0eKmL2wVwSIQw~CfDVcGCDeww8pz0vzV5vG4eY8L7R3JdeFsZ9t1ey-hoKFia6AeOwYYqXEOHtQpxzbdITxuYSGSLnf1UUqX7rVkZqS-nd3JwhAYyTFMMWuMxeL-T4LQuEv0dCb0O0sZQ-pxcpgDg3faqkcI4CHE8PshCsnNgRc~zvNtnL92B7RT2pnJUIfHCqKoi7xafDN7dorvBS3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="sunglasses"
              />
              {/* <p> Eye Glasses $99.00 </p> */}
            </div>
            <div>
              <img
                className="variety buy"
                src="https://s3-alpha-sig.figma.com/img/1146/74f7/5d9b6aed4ef53fbefb91ee853483e408?Expires=1653868800&Signature=EoeBHtZa2oLJErPY-NftAKeJpQLu7dZ1zyysOqHPk8DUWaLWnYsYDdJEAKtsEqjrtnD--QThJM2WTkOkfkxd9oP3UlnKc3JJ6z~nCQ8FB3yRoy603oBbcEXAAPcWmt~TaG10gB-yiHBpvLzXD9VpLnLGEdt8vgbQ7xsygS-EdQhxFgZawAEv-oC1DZEdz8Sezn1kGySmya90nFKlNbw3Uk9L0xsr15ntiqDrgfS-Cm4QdwcJ~TvN6LQDsfipc6ykm-i3xg1wUR-FDrHCLukwfp4zOdE0uHf41NmQZ5xuDjH3HbshcmDvnC1cENuBOlMF2UhJ~mMe8kTMNj9yQuWLkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="shoe"
              />
              {/* <p> Girl's Sneaker Shoe $49.00 </p> */}
            </div>

            <div>
              <img
                className="variety stuff buy"
                src="https://s3-alpha-sig.figma.com/img/a57f/ac81/3b1fcc1eac80e0452bed783129d1dd85?Expires=1653868800&Signature=KzwtSFU9BNGQah8dmsH4iD9LpxtFVpEdKO~Tch-9t3yLil2DMSi2X-P7vhxJjQu-9MmwfGfKzbIb8QRGAxX3q7spZd0s7tM6l6KL~bLZnrAbd50ujd-cpJ9bQtcRNSCnIrgqXnUsD0~NGGuTT-KbZct56fCR5-~okvM3rqmyGVaoZPJbu4GXFJQM1JIrCWvE2JzTkDYSLAy-EgVecFXziztnFiXBXYIARKUhbiAA3E9XgTO1czCl7cv9SaOF0qgoFeME2nCigTOeJs9G2MPXiLMG9J42tTUsKPHvdYklNo~bOQmOfX2m8ojLrHD0Caiv6pSHT9dgr15E~uvxXCJE7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="backpack"
              />
              {/* <p> Classic Bag $89.00 </p> */}
            </div>

            <div>
              <img
                className="variety stuff"
                src="https://s3-alpha-sig.figma.com/img/2704/b014/ffd6260fbbc87818fa1cd2a1d93a5e8e?Expires=1653868800&Signature=RhHY5qHFi-qnCTBB~bnic~TDsQE1jYAGlydMglof2Ji4d8nJU3MMwmxAJuIFUkKbRzYIvla8jZTGYODHWV3zan0HfaxCRk8mdpsPqh00wGaPVkRtsRZweC7iqUW1qh2R3pvmt8CSY8tIavGx3oVUV3uhHHKhUQztG4IbB6L81qYB8eEQiPQBACH0AQKS5ly8UhVp4xnq67jMuXL-dvUyyQGAhjWu9ldXFB2TDrdEg-Uafm8sE4VjZgps~HhAJSTArBKh6a4viyWc7X5~vcAgmZuHceWrf~vk57j1j0IjAHuRomk3riXUmWQyHMdCr5yKbDvEXGhSGsDV3waU1zWULQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA "
                alt="watch"
              />
              {/* <p> Wrist Watch $159 </p> */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Landing;
