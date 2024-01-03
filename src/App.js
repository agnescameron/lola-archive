import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home.js';

const Airtable = require('airtable');

const airtable_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 

function App() {
  const [data, setData] = useState([]);
  const [gridBlocks, setGridBlocks] = useState(9);
  const [loading, setLoading] = useState(true);

  let records = []

const processPage = (partialRecords, fetchNextPage) => {
    // console.log('data length is', records.length, 'partial length is', partialRecords.length)
    loading && setLoading(false) 
    records = [...records, ...partialRecords]
    // console.log('records is now', records)
    setData(records)
    // window.setTimeout(() => fetchNextPage(), 1000)
    fetchNextPage()
  }
  // called when all the records have been retrieved
  const processRecords = (err) => {
    if (err) {
      console.error(err)
      return
    }
    else {
      console.log("done")
        setData(records)
}
  }


  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: airtable_api_key
  });

  const base = Airtable.base(airtable_base);

  useEffect(() => {
      base('Objects').select({
        pageSize: 50,
      }).eachPage(processPage, processRecords)
  }, [])

  return (
    <div className="App">
      <Home data={data} loading={loading} />
    </div>
  );
}

export default App;
