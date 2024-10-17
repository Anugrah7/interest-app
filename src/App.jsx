import { TextField,Button } from '@mui/material';
import Stack from '@mui/material/Stack';

import './App.css'
import { useState } from 'react';

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [invalidPrinciple,setInvalidPrinciple] = useState(false)
  const [invalidRate,setInvalidRate] = useState(false)
  const [invalidYear,setInvalidYear] = useState(false)

 
// validate input
      const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    if(name == 'principle'){
      setPrinciple(value)
      if( !!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name =='rate'){
      setRate(value)
      if( !!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }else if(name =='year'){
      setYear(value)
      if( !!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }

   
   
    //starts with \^ for digit (\d) *(0 times veram athil koodthlm veram) \.?(decimal point 0 alel 1 time veramm) \d+(. kaznj one or more digit veraam)   ends with $/)
    
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log('inside handleCalculate');
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert('Please Fill the form')
    }
  }
  
  const handleReset = ()=>{
    setPrinciple('');
    setRate('');
    setYear('');
    setInterest(0);
    setInvalidPrinciple(false);
    setInvalidRate(false);
    setInvalidYear(false);
  };

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}}className='bg-light rounded p-5'>
       <h1>Simple Interest App</h1>
       <p>Calculate Your Simple Interest Easily</p>
       <div className="bg-warning p-5 rounded text-light text-center">
        <h1>&#8377; {interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
       </div>
       <form action="" className="mt-5">
        {/* {principle} */}
        <div className="mb-3">
        <TextField name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="&#8377; Principle Amount" variant="outlined" value={principle} />
        </div>
        {/* Invalid Principle */}
        {invalidPrinciple &&<div className="mb-3 text-danger fw-bolder">
          Invalid Principle Amount!!!
        </div>}
        {/* Rate */}
        <div className="mb-3">
        <TextField name='rate' value={rate} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate Of Interest (%)" variant="outlined" />
        </div>
        {/* Invalid Rate */}
        {invalidRate && <div className="mb-3 fw-bolder text-danger">
          Invalid Rate !!!
        </div>}
        {/* year */}
        <div className="mb-3">
        <TextField name='year' value={year} onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
        </div>
         {/* Invalid year */}
         {invalidYear && <div className="mb-3 fw-bolder text-danger">
          Invalid Rate !!!
        </div>}
        <Stack direction="row" spacing={2}>
        <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} style={{height:'70px'}} className='w-50 bg-warning text-dark'  variant="contained">CALCULATE</Button>
        <Button  onClick={handleReset} className='w-50 bg-dark text-light' variant="outlined">RESET</Button>
        </Stack>
       </form>
      </div>
    </div>
  )
  }

export default App
