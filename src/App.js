import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import axios from "axios";
import { useState, useEffect } from "react";
import PunkList from "./components/PunkList";
import Hero from "./components/Hero";

function App() {
  const [punkListData, setpunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      //TODO Hide API credentials
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xbFc999E6aBbaD9e4d43285bdf04e83A4B2e68DDa&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setpunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      <Hero/>
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
