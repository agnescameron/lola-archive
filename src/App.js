import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table.js';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { ParallaxProvider } from 'react-scroll-parallax';


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

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
} 

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
    console.log(loading)
    const { height, width } = getWindowDimensions();
      base('Objects').select({
        pageSize: 50,
      }).eachPage(processPage, processRecords)
     window.scrollTo(width, height/2)
  }, [])

  return (
    <div className="App">
     <ParallaxProvider>
      <div className="grid-container" id="grid-container">
        { loading ? <img src="/loading-gif.gif" id="loading"/> : <Table offset={{ left: 3*window.innerWidth/2, top: window.innerHeight/2 }} data={data} /> }
      </div>
      </ParallaxProvider>
    </div>
  );
}

export default App;
