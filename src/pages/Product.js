import React from "react";
import Container from "../components/Container/index";
import Button from "../components/Button/index";
// import Header from "../components/Header/index";

import "./style.css";

function Product() {
  return (
    <div>
      <Container className="Con">
        <div className="row">
          <div className="col-sm-2 mini">
            <div>
              <img
                className="skirt red"
                src=" https://s3-alpha-sig.figma.com/img/a50d/f95f/b742740c2cf63e21c4ce789b94a54928?Expires=1653868800&Signature=KajCF4pvcO2LsIOs9EK2zAWluH1T~hBVjc7uL0vftUyJ-U1p8A2DvC1Dp6c6mmNXJlTZ8hEkgPpcNGyUpRLIwJCFM74XIvTcfeKCd2W8XD74Y3FKkzquNRmH3X91Pnej93RiW2Emb3Xxq05~CxSqi0lhQVqcRWKxVoAXFVWIOAMIu16OGRxTuxxC08QfXLrkPgK1PZxyu7q5YGWANN9qSiIgqQ1lZZTNpUoDfvb07YbYL5XA5MNbLc9vUoHprTpbGz29o5l~eton-OQdE0x9uacqsCA68vaBfkk-XcQx0LBaLGeAUv2o~JscLndJVb8IDa-1s-OMf9wCCfeu0QsRsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="skirt"
              />
            </div>

            <div>
              <img
                className="skirt"
                src="https://s3-alpha-sig.figma.com/img/aa93/ba0d/a4e28ddafc2c7c84816eedd4b2582465?Expires=1653868800&Signature=BNph8W3IparOQ605taeiK5V2MhQ65h2IyH0eop48~2BPmbeUWRkJfubkEnQv-UwPMrand4EkeVH15-UpB5gENy~R7aINtuIYIruxSOo6TYNjjYR3VJnusCBgxNUe1sT6mfjS4pINieDjqi0YDXLsN1efI5~jb-9cx~4-uXimpELkE4Sr1bZ562dO3hJfPZvfD0RtWXn8xpnntFm-q1japc29IXoaaeJxK2vj2QfbkgmcNkBMHiSjPcntOosep3sgjjoBJ0D4hqmrBb1IyxIuEpxn~hiHeoC9cZtUBCdt~tw0VVZjbmUGbM8O0NOrmk4I-iuh8xHpInnlR-NT5cg~Ig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="skirt"
              />
            </div>

            <div>
              <img
                className="skirt"
                src="https://s3-alpha-sig.figma.com/img/5ffe/39a9/65f7337ad8e295e223dd9c9fbffc5468?Expires=1653868800&Signature=g3uvo92KNUxoMZdp0yTk~Qq8nUQU~8hFkLGwTDIA48-zLJHF8AZDVW4wdVvdV6FfwHoQrwjFEPEWel4crEEH-BAXMZ7AaX8kE66kSZt-Se4xiSsolAUZ33e6smQrgpUJd86gncUUHwN0-PnegykB9ytbVQo7zySg-arJ~eB-FAcr-z-C~3Mpc3UNMWyu-4VUCRVvZdrIdtkpdp22DqK4VnM9NFbe6QZggN78DKWi85816nD3nl5YXfsmLdiced11t85K6fzg4oR3ioXCF6MOPkO4z~dlzmuBvdgNi-Uw9lKxp2tzEdsGyUcjTgRgdDL13OBgQdV8El9FRmNL94ZqAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="skirt"
              />
            </div>
          </div>

          <div className="col-sm-5">
            <div>
              <img
                className="fun red"
                src="https://s3-alpha-sig.figma.com/img/62e4/1fb8/87a545984a0cd8d8989976f418ffc4fd?Expires=1653868800&Signature=aNO217~r0Bpl4Yt6YOpg0sfFi-ikBNXI2C-f6R0jpVYaVVlX89wTUdv30WhYAHfM2IZ5m~K4xfT4GNB7vsA0fVA26UiWn6J3ESGakmsYMUYOXrjhTtB223HpTx7-8N8Z4krW5R0yEbchBxV4K0rKODuVSTnZ45-Gvh9oyKZcidKlBMtvPLjaUM6sjxvod-fExW0I5CO-R-CusBSxYHhu6HJRtUqsqMVX-uW-KQhLivxzlAeTkBr~W3ezadCOcf2bWXeEJYF5UZuL2MRf6tgz2fHVI2H5yhVjrTWEHiFTolQ676uXLjJVzS654GaSbeLNCxV3t4M2Yti1QEh4j8JmyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA "
                alt="skirt"
              />
            </div>{" "}
          </div>

          <div className="col-sm-5 info">
            <div>
              <p className="item"> The Sideswept Dhot+ Bottom Line Gray</p>

              <p> $219.00 </p>
              <p className="Bold"> Description </p>
              <p>
                Inspired by the multifold drapes of the Indian dhoti, this is
                and edgier version designed for modern asymmetry. Worn with
                character, the expressive side slinging pocket and versatile
                wrap fit are easily styled for a beach day out or evening
                tipples.
              </p>
              <p className="Bold"> Quanity </p>
              <Button> </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
