import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
var itemsInfo=[]
itemsInfo[0]=0;
var itemsList=[]
itemsInfo[1]=itemsList
export default itemsInfo

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App itemsInfo={itemsInfo}/>
  </React.StrictMode>
)
