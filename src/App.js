import {useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  useEffect(()=>{
    axios.get('/api').then(res=>console.log('data: ',res.data))
  }, [])

  return (
    <div className="App">
      <h1>Hello Berhane</h1>
    </div>
  );
}

export default App;
