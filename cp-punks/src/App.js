
import "./App.css";
import { Header } from "./components/Header";
import { Collectioncard } from "./components/Collectioncard";
import { useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([])
 
  
  //API call
  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x593Eaaa9cD42d9b3448d739cAA283CF9E9507439&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNFTs()
   
  }, [])


  return (
    <div className="app">
      <Header />
      <Collectioncard  
      
      />
      <Punklist punkListData = {punkListData} />
    </div>
  );
}

export default App;
