import React from "react";
import Table from "../../components/table/table";
import { useSelector } from "react-redux";
import { PER_1h, PER_24h, PER_7d } from "../../constants/constant";
import './App.css';
function Home() {
  const dataList = useSelector((state) => state.dataCurrency.data);
  const valCurrency = useSelector((state) => state.valCurrency.data);
  const query = {
    vs_currency: valCurrency,
    price_change_percentage: [PER_1h, PER_24h, PER_7d],
  };
  console.log(dataList)
  return (
    <div className="App">
      <div>
        <Table dataList={dataList} currency={valCurrency} query={query} />
      </div>
    </div>
  );
}
export default Home;
