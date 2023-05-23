import "./App.css";
import {Routes, Route} from 'react-router-dom'
import { AllCountires } from "./components/AllCountries/AllCountires";
import { CountryInfo } from "./components/CountryInfo/CountryInfo";
function App() {
  return (
    
    <>
     <div className="header">
        <div className="container">
        <h5>Find Information for Your Home Country Using Terence's APP ! </h5>
        </div>
      </div>
    <div className="container">
      <Routes>
        <Route path="/" element={<AllCountires />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
        </Routes>
     
    </div>
    </>
  );
}

export default App;
