
import "./App.css";
import { Header } from "./components/Header";
import { Collectioncard } from "./components/Collectioncard";

function App() {
  return (
    <div className="app">
      <Header />
      <Collectioncard  
      id ={0}  
      name= {'Bandana Punk'} 
      traits={[{'value': 7}]}  
      image = "https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg"
      />
    </div>
  );
}

export default App;
