import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import LineChart from './components/LineChart';

function App() {

  //state for store chart data
  const [state,setState] = useState(null);

  //method for generate raw data to chart data
  const generateModel = (responseData)=>{
    let labels=[];
    let data=[];
    responseData.map((record)=>{
      const date = new Date(record.timeStamp*1000).toLocaleString('en-Us',{timeZone:'Asia/Colombo'});
      labels.push(date);
      data.push(record.price);
    });
    return {
      labels:labels,
      datasets:[{
        label:'BTC Price Changes',
        data:data,
        fill:false,
        borderWidth:1,
        borderColor:'rgb(75,192,192)',
        tension:0.1
      }]
    };
  }

  //request to backend for fetch coin data
  useEffect(()=>{
    axios.get('https://localhost:5001/api/CoinData')
      .then((res)=>{
        setState(generateModel(res.data));
      }).catch((err)=>{
        console.log(err);
      });
  },[]);

  return (
    <div className="App">
      {state&&<LineChart chartData={state} textTitle="Changes over time" />}
    </div>
  );
}

export default App;
