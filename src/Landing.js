import React from "react";
import './L.css';
import logo from './12.jpeg';
import { useHistory } from 'react-router-dom';

function Landing() {
  let history = useHistory();

  return (
    <div className="a">
      <h2 className="hf">The Easiest Way To  </h2>
      <h2 className="hs"> To Track Multiple Currencies</h2>
      <br>
      </br>
      <p>SO ARE YOU CRYPTO LOVER ? WELL I HOPE YOU ARE SO HERE<br></br> WE ARE GIVING YOU THE DETAILS OF EVERY COIN YOU NEED </p>
      <img src={logo} />
      <button className="custom-btn b-1" onClick={() => {
        history.push("/Main");
      }}> <span>Click!</span><span> Continue</span> </button>
    </div>
  )
}
export default Landing;
