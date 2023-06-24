import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table.js';
import useInfiniteScroll from 'react-infinite-scroll-hook';
const Airtable = require('airtable');

const airtable_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 

function App() {
  const [data, setData] = useState([]);
  const [gridBlocks, setGridBlocks] = useState(9);
  const [loading, setLoading] = useState(false);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

  Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: airtable_api_key
  });

  const base = Airtable.base(airtable_base);

  const fetchArchive = async () => {
    console.log('fetching', airtable_api_key)
    try {
      const response = await fetch( "https://api.airtable.com/v0/appuNtEsIgAYPiHf8/Objects", {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': "Bearer " + airtable_api_key,
            'Content-Type': 'application/json'
        }
    });
      const json = await response.json();
      console.log(json.records)
      return setData(json.records);
    }
    catch(e) {
      console.log('error!', e);
    }
    finally {
     return  setLoading(false);
    }
    
  }

  useEffect(() => {
    const { height, width } = getWindowDimensions();
    window.scrollTo({
      top: 6000-height/2,
      left: 10000-width/2,
    });
      base('Objects').select().all().then(records => {
          console.log(records);
          setData(records);
      })
      .then(setLoading(false))
      .catch(err => {
          console.error(err);
      });

  }, [])

  return (
    <div className="App">
      <div className="grid-container">
        { [...Array(gridBlocks)].map((e, i) => {
          return <Table key={i} data={data} index={i}/>
        })}
      </div>
    </div>
  );
}

export default App;
