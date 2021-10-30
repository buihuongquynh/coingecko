import React, {useState} from "react";
import "./App.css";
import { Redirect } from "react-router-dom";
import {useHistory } from 'react-router-dom';
import FacebookLogin from "react-facebook-login";
import { Button, notification, Divider, Space } from 'antd';
function Login() {
  const [login, setLogin] = useState({
    email:"",
    passWord:"",
  })
  const history = useHistory();
  const responseFacebook = (response) => {
    console.log(response);
  };
const handleEmail = (e)=>{
  setLogin({...login, email: e.target.value})
  console.log(e.target.value)
}
const handlePassWord = (e)=>{
  setLogin({...login, passWord: e.target.value})
}
const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
    duration: 2.5,
  })
}
const handleLogin = () =>{
  if(login.email === "user@gmail.com" && login.passWord === "123456"){
    history.push({pathname:'/home'})
    openNotification('success', '正常にログインしました')
  }
  else{
    console.log("loi roi nhe")
    openNotification(
      'error',
      'メールアドレスもしくはパスワードが間違っています',
    )
  }
}
  return (
    <div className="Login">
      <div className="banner">
        <div className="row">
          <div style={{ width: "40%" }} className="col-lg-7">
            <div style={{ width: "100%" }} className="box">
              <h1>Welcome back</h1>
              <FacebookLogin
                appId="637128943945680"
                autoLoad={true}
                fields="name,email,picture"
                onClick={()=>{history.push({pathname:'/home'})}}
                icon="fa-facebook"
                callback={responseFacebook}
              />
              
              <div className="form">
                <p>Email</p>
                <input defaultValue="user@gmail.com" onChange={handleEmail} type="text" placeholder="Enter your email" />
                <p>Password</p>
                <input defaultValue="123456" onChange={handlePassWord} type="password" placeholder="Enter your password" />
                <div onClick = {handleLogin} className="dn">
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
