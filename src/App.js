import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import VideCon from './components/VideCon';

const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&publishedAfter=2020-09-10T00:00:00Z&q=search&maxResults=15&type=video&hl=en_US&q=javascript -basics &order=date&relevanceLanguage=en`;


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data)
    })

  }, []);
  return (
    <div className="App">
      <VideCon data={data} />
    </div>
  );
}

export default App;
