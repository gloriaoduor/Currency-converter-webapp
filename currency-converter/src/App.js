import {  useState} from 'react';
import Axios from 'axios';
import './App.css';
import ReactDropdown from 'react-dropdown';
import { useEffect } from 'react';
import { format } from "date-fns";

function App() {

  const [source, setSource] = useState ("usd");
  const [currOptions, setCurrOptions] = useState (" ");
  // const [data, setData] = useState ("");

   // Calling the api to fetch all currencies
  useEffect(() => {
    Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`)
      .then((res) => 
        {setCurrOptions(res.data);}
      )}, [source]); 

  console.log((currOptions))
  // useEffect(() => {
  //   setCurrOptions(Object.keys(currOptions));
  //       // convert();
  //     }, [currOptions])





  return (
   <div className='App pt-32'>
     <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
    <div className='Container bg-sky-100 border-4 rounded-md p-6'>
    <div className='Heading '>
      <h1 className='font-mono text-7xl p-3 m-2'>Currency Unit Converter</h1>
    </div>

    <div className='Body'>
      <div className='Main'>
      <div className='Options grid grid-cols-2 gap-4'>
      <h4>From:</h4>
        <div  className='Dropdown outline outline-2 rounded p-2'>
          
          <ReactDropdown className='drop'
            options={Object.values(currOptions)}
                        // onChange = { (e) => setSource(e.value)}
                        // value={source} 
                         />
        </div>
        <h4>To:</h4>
        <div className='Dropdown outline outline-2 rounded p-2'>
          
          <ReactDropdown className='drop'
           options={Object.values(currOptions)}
                        // onChange = {(e) => {setdestinationCurrency(e.value)}}
                        // value={destinationCurrency}
                        />
        </div>
      </div>
      
      <div className='Fields' id='fields'>
        <div className='Sourcefield'>
          <h3>Amount:</h3>
          <input type='text' className='TextBox outline outline-2 rounded px-4  '
                placeholder='Amount to convert'/>
        </div>
        
        <div className='Destinationfield'>
          <h3>Converted Amount: </h3>
          <p> xxxxx </p>
        </div>
        <button className='Button p-2 mt-4 rounded bg-orange-200 hover:bg-orange-400 outline outline-2 outline-orange-300'> Convert</button>

      </div>
      </div>

    </div>
    </div>
   </div>
  );
  }

export default App;
