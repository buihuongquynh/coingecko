import React, { useState } from "react";
import "./style.css";
import { Row, Col,Button } from "antd";
const Footer = () => {
  return (
    <div className="footer p-10 text-gray-200 text-left bg-gray-900">
      <Row>
        <Col span={8}>
          <img className="t" src="https://static.coingecko.com/s/coingecko-logo-white-3f2aeb48e13428b7199395259dbb96280bf47ea05b2940ef7d3e87c61e4d8408.png" />
          <p>
            CoinGecko fornisce un’analisi essenziale del mercato delle
            criptovalute. Oltre a monitorare prezzo, volume e capitalizzazione
            di mercato, monitora anche la crescita della community, lo sviluppo
            di codice open-source, gli eventi di rilievo e gli indicatori della
            blockchain.
          </p>
        </Col>
        <Col span={8}>
        <Row>
          <Col span={8}>
            <ul className="text-left">
              <li>About CoinGecko</li>
              <li>Chi siamo</li>
              <li>Metodologia</li>
              <li>Opportunità professionali</li>
              <li>Guida del brand</li>
              <li>Modulo di richiesta</li>
              <li>Pubblicità</li>
              <li>Domande frequenti</li>
            </ul>
          </Col>
          <Col span={8}>
            <ul>
              <li>For Developers</li>
              <li>Developer API</li>
              <li>Widgets</li>
              <li>Donazioni</li>
              <li>Bitcoin</li>
              <li>Ethereum</li>
            </ul>
          </Col>
          <Col span={8}>
            <ul>
              <li>Community</li>
              <li>Twitter</li>
              <li>Telegram Chat</li>
              <li>Telegram News</li>
              <li>Instagram</li>
              <li>Reddit</li>
              <li>Discord</li>
              <li>Facebook</li>
              <li>Youtube</li>
            </ul>
          </Col>
          </Row>
        </Col>
        <Col span={8}>
          <p>Ti interessano aggiornamenti sulle criptovalute?</p>
          <p>Iscriviti alla nostra newsletter gratuita e riceverai ultime notizie, aggiornamenti e relazioni sulle criptovalute.</p>
          <div className="flex items-center btn">
          <input type="text" placeholder="Enter you email" />
          <Button style={{marginLeft:"10px" ,width:'20%', backgroundColor:"#4E682A", border: "none"}} type="primary">Iscriviti</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
