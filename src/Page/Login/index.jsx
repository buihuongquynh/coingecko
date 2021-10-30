import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
function Login() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="Login">
      <div className="banner">
        <div className="row">
          <div style={{ width: "40%" }} className="col-lg-7">
            <div style={{ width: "100%" }} className="box">
              <h1>Welcome back</h1>
              {/* <div className="face mb-5">
                <a href="a">
                  <i className="fab fa-facebook-square" />
                  <Link to="./home">Sign in with Facebook</Link>
                </a>
              </div> */}
              <FacebookLogin
                appId="637128943945680"
                autoLoad={true}
                fields="name,email,picture"
                // onClick={componentClicked}
                icon="fa-facebook"
                callback={responseFacebook}
              />
              
              <div className="form">
                <p>Email</p>
                <input type="text" placeholder="Enter your email" />
                <p>Password</p>
                <input type="password" placeholder="Enter your password" />
                <div className="dn">
                  <span>Login</span>
                </div>
                <div className="dk">
                  <br />
                  <p className="font-semibold	">
                    Having trouble creating an account?
                  </p>
                  <p>Please call (024) 6680 5588 (office hours).</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="tutorial">
              <div className="tutorial_text">
                <h1>About CoinGecko</h1>
                <p>
                  CoinGecko fornisce un’analisi essenziale del mercato delle
                  criptovalute.
                  <br /> Oltre a monitorare prezzo, volume e capitalizzazione di
                  mercato, monitora anche la crescita <br /> della community, lo
                  sviluppo di codice open-source, gli eventi di rilievo e gli
                  indicatori della blockchain.
                </p>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/eSY0UUs62QU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
