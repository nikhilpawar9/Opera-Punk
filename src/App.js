import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import PunkList from "./components/PunkList";
import Hero from "./components/Hero";
const REACT_APP_WALLET_ADDRS = process.env.REACT_APP_WALLET_ADDRS;


function App() {
  const [punkListData, setpunkListData] = useState([]);
  const [selectedPunk, setselectedPunk] = useState(0);


  useEffect(() => {
    const getMyNfts = async () => {
      //TODO Hide API credentials
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=${REACT_APP_WALLET_ADDRS}&order_direction=asc`
      );
      console.log(openseaData.data.assets,"in APP.JS");
      setpunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Hero punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setselectedPunk={setselectedPunk} />
        </>
      ) }
      
    </div>
  );
}

export default App;
