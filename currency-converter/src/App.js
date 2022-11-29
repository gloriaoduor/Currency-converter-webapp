import { useState} from 'react';
// import Axios from 'axios';
import './App.css';
import ReactDropdown from 'react-dropdown';

function App() {

  //  // Initializing all the state variables 
  //  const [info, setInfo] = useState([]);
  //  const [input, setInput] = useState(0);
   const [sourceCurrency, setSourceCurrency] = useState("");
   const [destinationCurrency, setdestinationCurrency] = useState("");
   const [options] = useState([]);
  //  const [output, setOutput] = useState(0);

  //  // Calling the api to fetch source currency
  // useEffect(()=> {
  //   Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${sourceCurrency}.json`)
  //     .then((res) => { 
  //       setInfo(res.data[sourceCurrency]);
  //       console.log(res.data)
  //     })
     
  // }, [sourceCurrency]);





  return (
   <div className='App pt-32'>
    <div className='Container bg-sky-100 border-4 rounded-md p-6'>
    <div className='Heading '>
      <h1 className='font-mono text-7xl p-3 m-2'>Currency Unit Converter</h1>
    </div>

    <div className='Body'>
      <div className='Main'>
      <div className='Options grid grid-cols-2 gap-4'>

        <div  className='Dropdown outline outline-2 rounded '>
          <h4>From:</h4>
          <ReactDropdown options={options}
                        onChange = { (e) => setSourceCurrency(e.value)}
                        value={sourceCurrency}  />
        </div>

        <div className='Dropdown outline outline-2 rounded'>
          <h4>To:</h4>
          <ReactDropdown options={options}
                        onChange = {(e) => {setdestinationCurrency(e.value)}}
                        value={destinationCurrency}/>
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
