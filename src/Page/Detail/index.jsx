import React,{useEffect} from "react";
import './style.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Detail() {
  const param = useParams();
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${param.id}`);
       console.log(res.data)
        
      } catch (error) {
        Error(error.toString())
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, []);
  return (
    <div className="Detail">
     
    </div>
  );
}
export default Detail;
