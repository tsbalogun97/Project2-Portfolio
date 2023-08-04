import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import footerimg from "../Pictures/imgf.jpg";

function Footer() {
  let quoteUrl = "https://type.fit/api/quotes";
  const [quote, setQuote] = useState([]);

  const getData = async () => {
    const response = await axios.get(quoteUrl);
    const info = await response.data;
    console.log(info);
    setQuote(info);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      className="footer"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      {/* <h1>Footer</h1> */}
      {quote.map((q, i) => {
        // this is where we would make the key value pair that's going to become our props in order to give it a key like a way to identify it.
        let author = q.author.split(",")
        return (
          <div className="Fwrapper" key={i}>
            <div className="qtxt">{q.text}</div>
            <div className="author">{author[0]}</div>

          </div>
        );
      })}
    </div>
  );
}

export default Footer;
