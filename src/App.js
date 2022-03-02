import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [data, setData] = useState({})
  useEffect(()=>{
    axios.get('/api').then(res=>{
      console.log('data: ',res.data)
      setData(res.data)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello Berhane</h1>
      <p>an awsome work</p>
      <h2>{data.mesg}</h2>

    </div>
  );
}

export default App;
