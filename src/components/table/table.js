import React, { useEffect } from "react";
import Item from "../item/item";
import { useDispatch } from "react-redux";
import { Actions } from "../../state/actions";
import "./style.css"
const Table = (props) => {
  const { dataList } = props;
  let listData = null;
  const dispatch = useDispatch();
  if (dataList) {
    listData = dataList.map((item, index) => (
      <Item itemCurrency={props.currency} key={index} item={item} />
    ));
  }
  useEffect(() => {
    try {
      dispatch({ type: Actions.GET_DATA, payload: props.query });
    } catch (error) {}
  }, [props.currency]);
  return (
    <div>
      {dataList ? (
        <>
          <div style={{fontWeight:"600"}} className="flex">
            <ul style={{width:"45%"}}>
              <li style ={{width:"15%"}}>#</li>
              <li>Coin</li>
            </ul>
            <ul style={{width:"55%"}}>
              <li style={{marginRight:"64px"}}>Price</li>
              <li  style={{marginRight:"85px"}}>1h</li>
              <li  style={{marginRight:"95px"}}>2h</li>
              <li  style={{marginRight:"110px"}}>7d</li>
              <li  style={{marginRight:"110px"}}>24h Volume</li>
              <li>Mkt Cap</li>
            </ul>
          </div>
          <table>{listData}</table>
        </>
      ) : null}
    </div>
  );
};
export default Table;
