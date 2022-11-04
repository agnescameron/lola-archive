import { useState } from 'react';
import './App.css';

import useInfiniteScroll from 'react-infinite-scroll-hook';

function App() {
  const [data, setData] = useState([]);

  const [since, setSince] = useState(0);
  const [limit, setLimit] = useState(10);

  const [loading, setLoading] = useState(false);

  const [hasNextPage, setHasNextPage] = useState(true);

  const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  const fetchmore = async (since) => {
    
    setLoading(true)
    setSince(since + limit);
    try {
      const response = await fetch( "https://api.airtable.com/v0/appuNtEsIgAYPiHf8/Text?view=Grid%20view", {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': "Bearer keyG3kULvc1nh0AtL",
            'Content-Type': 'application/json'
        }
    });
      const json = await response.json();
      const records = shuffleArray(json.records);
      return setData((data) => [...data, ...records]);
    }
    catch(e) {
      console.log(e);
      return setHasNextPage(false);
    }
    finally {
     return  setLoading(false);
    }
    
  }

  const [sentryRef] = useInfiniteScroll({
    loading, 
    hasNextPage: hasNextPage ,
    delayInMs:1000,
    onLoadMore: () => {
      fetchmore(since);
    }
  })

  return (
    <div className="App">
      <div className='main'>
        {
          (loading || hasNextPage) && 
          <div className="loader" ref={sentryRef}>
          <h1>...</h1>
        </div>
        }
      {data && data.reverse().map((item, index) => {
          return (
            <div key={index} className='item'>
              <p>{item && item.fields.Name }</p>
            </div>
          )
      })}

      </div>
     
      <h2>List of github users</h2>

     
    </div>
  );
}

export default App;
