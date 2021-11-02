import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import NavDetail from "./NavDetail";
import { Row, Col, List } from "antd";
import axios from "axios";
import {
  ShareAltOutlined,
  NotificationOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./style.css";
function Detail() {
  const param = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${param.id}`
        );
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        Error(error.toString());
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, []);
  const dataTB = [
    {
      name: "asdsd",
      price: "safsdf",
    },
    {
      name: "asdsd",
      price: "safsdf",
    },
  ];
  const dataNew =[
    {
      img:"https://assets.coingecko.com/article-images/371299.jpg",
      today:"Bitcoin Reserves Across Exchanges Hit Three-Year Low as BTC Trades Between $62,000 and $61,000: Glassnode",
      Title:"U.Today (40 minutes ago)",
      des:"According to recent analytics data, Bitcoin and Ethereum reserves on exchanges keep draining, dropping to a major low (Read More...)"
    },
    {
      img:"https://assets.coingecko.com/article-images/371299.jpg",
      today:"Bitcoin Reserves Across Exchanges Hit Three-Year Low as BTC Trades Between $62,000 and $61,000: Glassnode",
      Title:"U.Today (40 minutes ago)",
      des:"According to recent analytics data, Bitcoin and Ethereum reserves on exchanges keep draining, dropping to a major low (Read More...)"
    },
  ]
  const renderItem = (item) => {
    return (
      <List.Item >
       <div className="itemName ">
       <a>{item.name}</a>
       <a>{item.price}</a>
       </div>
      </List.Item>
    );
  };
  const renderItemNew = (item) => {
    return (
      <List.Item >
        <Row>
          <Col span={5}><img src={item.img} alt="" /></Col>
          <Col span={19}>
            <h1>{item.today}</h1>
            <p>{item.title}</p>
             <p>{item.des}</p>
          </Col>
        </Row>
      </List.Item>
    );
  };
  return (
    <div className="Detail text-left">
      <NavDetail data={data} className="mb-5" />
      <Row className="m-10 mt-10">
        <Col span={16}>
          <span className="bg-gray-500 rank">Rank #{data? data.coingecko_rank: null}</span>
          <div className="flex items-center">
            <img
              style={{ width: "30px", height: "30px" }}
              src={ data? data.image.thumb : null}
            />{" "}
            <div className="flex xlm">
              <span>{data? data.name: null}</span>
              <span className="phantram">0.1%</span>
            </div>{" "}
          </div>
          <ul className="share">
            <li>
              <ShareAltOutlined />
            </li>
            <li>
              <NotificationOutlined />
            </li>
            <li>
              <StarOutlined />
            </li>
          </ul>
          <div className="progress"></div>
          <ul
            style={{ width: "50%", fontWeight: "600" }}
            className="flex justify-between mt-1"
          >
            <li>160,174.213 XLM</li>
            <li>24H Range</li>
            <li>166,679.463 XLM</li>
          </ul>
          <Row>
            <Col span={12}>
              <ul className="flex flex-col mx-2	wid">
                <li className="flex justify-between	">
                  <span className="item">sdfsdf</span>
                  <span className="item">sdfsdf</span>
                </li>
                <li className="flex justify-between">
                  <div className="item">sdfsdf</div>
                  <div className="item">sdfsdf</div>
                </li>
                <li className="flex justify-between">
                  <div className="item">sdfsdf</div>
                  <div className="item">sdfsdf</div>
                </li>
              </ul>
            </Col>
            <Col span={12}>
              <ul className="flex flex-col mx-2	wid">
                <li className="flex justify-between">
                  <div className="item">sdfsdf</div>
                  <div className="item">sdfsdf</div>
                </li>
                <li className="flex justify-between">
                  <div className="item">sdfsdf</div>
                  <div className="item">sdfsdf</div>
                </li>
                <li className="flex justify-between">
                  <div className="item">sdfsdf</div>
                  <div className="item">sdfsdf</div>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <ul className="ml-7 left">
            <li>Buy/sell</li>
            <li>Long/Short</li>
            <li>Earn/Loan</li>
            <li>Mine</li>
          </ul>
          <h1 className="ml-10">Info</h1>
          <ul className="flex flex-col ml-10">
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
            <li style={{ width: "100%" }}>
              <Row>
                <Col span={8}>
                  <span>asdasd</span>
                </Col>
                <Col span={14}>
                  <span className="sp-button">asdasd</span>
                </Col>
              </Row>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col span={17}>
        <List
           style={{marginBottom:"20px" , border:"none"}}
            size="large"
            header={<div>Bitcoin News & Guides</div>}
            bordered
            dataSource={dataNew}
            renderItem={renderItemNew}
          />
        </Col>
        <Col span={7}>
          <List
          style={{marginBottom:"20px", background:"#F3F4F6", border:"none"}}
            size="large"
            header={<div>BTC Price and Market Stats</div>}
            bordered
            dataSource={dataTB}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </div>
  );
}
export default Detail;
