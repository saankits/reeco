
import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
// import OrderId from './components/OrderId';
import { useEffect } from 'react';
import data from "./CartData.json"
import { useDispatch } from 'react-redux';
import {storeData} from "./redux/mySlice"

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(storeData(data))
  },[dispatch])

  return (
    <div className="App">
      <Navbar />
      {/* <OrderId /> */}
      <Body />
    </div>
  );
}

export default App;
