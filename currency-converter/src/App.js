import {  useState} from 'react';
import Axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { format } from "date-fns";

function App() {

  const [source, setSource] = useState ("usd");
  const [destination, setDestination] = useState ("");
  const [currOptions, setCurrOptions] = useState ("");
  const [input, setInput] = useState("");
  const [total, setTotal] =useState("");
  var rate = currOptions[destination]
  

  //fetch all currencies
  useEffect(() => {
    Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${source}.json`)
      .then((response) => setCurrOptions(response.data[source])
      )}, [source]); 
    // console.log(currOptions[destination])

  //map the object into an array of values/indexes to display in the selection list
  const options = Object.keys(currOptions).map((value, index)=>
      <option key={index}>
        {value} {/* value is each of the names of the currencies available */}
      </option>
  );

  const handleSourceChange = (e) => {
    setSource(e.target.value)
  }
  const handleDestChange = (e) => {
    setDestination(e.target.value)
  }

  //fxn to convert
  function convert(){
    setTotal(input * rate)
    console.log(total); 
  }
 


  return (
   <div className='App'>
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <div className='Container bg-sky-100 border-4 rounded-md p-6'>
        <div className='Heading '>
          <h1 className='font-mono text-7xl p-3 m-2'>Currency Unit Converter</h1>
        </div>

        <div className='Body'>
            <div className='Options'>
              {/* below div needs to be centered */}
              <div className='Dropdown pl-6'> 
                <h4>From:</h4>
                <select className='drop outline outline-2 rounded p-2' 
                  onChange={handleSourceChange}
                >
                  {options}
                </select>
              </div>
              
              <div className='Dropdown'>
                <h4>To:</h4>
                <select className='drop outline outline-2 rounded p-2'
                onChange={handleDestChange}
                >
                  {options}
                </select>
              </div>
            </div>
          
            <div className='Fields' id='fields'>
              <div className='Sourcefield'>
                <h3>Amount:</h3>
                <input type='text' className='TextBox outline outline-2 rounded px-4  '
                      placeholder='Amount to convert'
                      onChange={(e)=> setInput(e.target.value)}
                      />
              </div>

              <div className='Destinationfield'>
                <h3>Conversion rate: </h3>
                <p> {rate} </p>
              </div>
            
              <div className='Destinationfield'>
                <h3>Converted Amount: </h3>
                <p> {total} </p>
              </div>
              <button className='Button p-2 mt-4 rounded bg-orange-200 hover:bg-orange-400 outline outline-2 outline-orange-300'
                onClick={convert}
              > Convert</button>

            </div>
        </div>
      </div>
   </div>
  );
  }

export default App;
