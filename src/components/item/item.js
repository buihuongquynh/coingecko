// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import * as KEY from '../../constants/constant';
import './item.css'
import {useHistory } from 'react-router-dom';
const Item = (props) => {
  const { item } = props;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: props.itemCurrency,
    minimumFractionDigits: 0
  });

  let percent_1h = parseFloat(item[KEY.PERCENT_1H]).toFixed(2);
  let percent_24h = parseFloat(item[KEY.PERCENT_24H]).toFixed(2);
  let percent_7d = parseFloat(item[KEY.PERCENT_7D]).toFixed(2);
  const history = useHistory();
  const arrItem = (
    <>
      <td className="item star">
        <span>
          <i className="far fa-star"></i>
        </span>{" "}
        <a href="">{item[KEY.MARKET_RANK]}</a>
        
      </td>

      <td className="item logo">
        {" "}
        <div className="item-small">
          {" "}
          <a href=""><img src={item[KEY.IMAGE]} /></a><a href=""><h3>{item["name"]}</h3></a> 
        </div>{" "}
        <h5 className="upcase"><a href="">{item[KEY.SYMBOL]}</a></h5>{" "}
      </td>
      <td className="item">{formatter.format(item[KEY.PRICE])}</td>
      {item[KEY.PERCENT_1H] > 0 ? (
        <td className="item colors.red green-num"><a href="">{percent_1h}%</a></td>
      ) : (
        <td className="item colors.red red-num">
          <a href="">{isNaN(percent_1h) ? `--` : `${percent_1h}%`}</a>
          
        </td>
      )}
      {item[KEY.PERCENT_24H] > 0 ? (
        <td className="item colors.red green-num"><a href="">{percent_24h}%</a></td>
      ) : (
        <td className="item colors.red red-num">
          <a href=""> {isNaN(percent_24h) ? `--` : `${percent_24h}%`}</a>
         
        </td>
      )}
      {item[KEY.PERCENT_7D] > 0 ? (
        <td className="item green-num"><a href="">{percent_7d}%</a></td>
      ) : (
        <td className="item red-num">
          <a href=""> {isNaN(percent_7d) ? `--` : `${percent_7d}%`}</a>
         
        </td>
      )}
      <td className="item"><a href="">{formatter.format(item[KEY.VOLUME])}</a></td>
      <td className="item"><a href="">{formatter.format(item[KEY.MKT_CAP])}</a></td>
    </>
  );
  return <tr className="rowItem" onClick={()=>{history.push({pathname:`/detail/${item.id}`})}} className="list-row-item">{arrItem}</tr>;
};

export default Item;
