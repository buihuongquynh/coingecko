import React from "react";
import "./App.css";
import {
  Link
  } from 'react-router-dom'
function Login() {
  return (
    <div className="Login">
     <div className="banner">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="box">
              <h1>Đăng nhập để sử dụng</h1>
              <div className="face">
                <a href="a">
                  <i className="fab fa-facebook-square" />
                  <span>Đăng nhập với Facebook</span>
                </a>
              </div>
              <div className="text">
                <p>
                  Khi bạn đăng nhập bằng facebook, mặc định bạn đồng ý với
                  <span>Điều khoản dịch vụ</span> và
                  <span>Chính sách bảo mật</span> của CoinGecko
                </p>
                <hr />
              </div>
              <p>Hoặc sử dụng email</p>
              <div className="form">
                <input
                  type="text"
                  placeholder="Email"
                 
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                
                />
                <div className="dn">
                  <span >Đăng nhập</span>
                </div>
                <p>
                  <a href="a">Quên mật khẩu?</a>
                </p>
                <div className="dk">
                  <Link to="/signup">Đăng ký tài khoản mới</Link>
                  <br />
                  <p>Bạn không đăng nhập được tài khoản?</p>
                  <p>
                    Vui lòng gọi tới số <span>(024) 6680 5588</span>(giờ hành
                    chính) để được hỗ trợ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="tutorial">
              <div className="tutorial_text">
                <h1>Hướng dẫn sử dụng BotWork</h1>
                <p>
                  1. Đăng nhập (Đăng ký tài khoản mới nếu bạn chưa từng sử dụng
                    BotWork tại đây)
                </p>
                <p>Bitcoin price today is 175,977.495 XLM with a  It has a circulating supply of 19 Million BTC coins and a total</p>
                <p> supply of 21 Million. 24-hour trading volume of 145,319,831,050.929 XLM.</p>
                <p> BTC price is up 2.4% in the last 24 hours.</p>
                <p> If you are looking to buy or sell Bitcoin, Binance is currently the most active exchange.</p>
                <iframe
                  src="https://www.youtube.com/embed/REMS55jZFoc"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
