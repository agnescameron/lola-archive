import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table.js';
import { ParallaxProvider } from 'react-scroll-parallax';

function Home(props) {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);


  useEffect(() => {
    // getWindowDimensions();
    const { innerWidth: width, innerHeight: height } = window;
    setWidth(width);
    setHeight(height);
    window.scrollTo(width*3, height*4)
  }, [])

  return (
     <ParallaxProvider>
      <div className="grid-container" id="grid-container">
        { props.loading ? <img src="/loading-gif.gif" id="loading"/> : <Table offset={{ left: 3.5*width, top: height*4 }} data={props.data} /> }
      </div>
      </ParallaxProvider>
  );
}

export default Home;
