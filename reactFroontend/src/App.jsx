import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getFetchData() {
    try{const serverData = await fetch('http://localhost:4002/data')
      const res=await serverData.json();
      // console.log(res.msg);
      setData(res.msg);
  }catch(e){
    console.log(e);
  }finally{
    
    setLoading(false);
  }
  }
  return (
    <>
    <h2>Welcome home</h2>
      <div class='photo'>
    {
        data.map((ele)=>(
          <div>
            <img src={ele.image} height = {200} width={200}/>
            <h2>{ele.id}:{ele.title}</h2>
            <h3>{ele.price}</h3>
          </div>
        
         ) )

        }
      </div>
    // JSON.stringify(data)
  <button onClick={getFetchData}>Click #</button>
    </>
  )
}

export default App
