import { useState } from 'react'
import TopNav from './topNav'
import App from '../App'


function News(props) {
  
  var [isHome, setHome] = useState(false);
  var [isNews, setNews] = useState(true);
 
  
  
  if(isHome==true){isNews=false}
  
  
  
  const toggleHome = () => {
    
    setHome(true)
  }
  const toggleNews = () => {
    setNews(true)
  }
  const submitForm = () => {
    const email = document.getElementById("emailId").value
    const name = document.getElementById("nameId").value
    const rollNo = document.getElementById("rollId").value
    alert("Thank, " + name +",you have successfully subscribed for our NewsLetter")
    document.getElementById("emailId").value="";
    document.getElementById("nameId").value="";
    document.getElementById("rollId").value="";

 }
 
  return (
    isNews ?   
      <div className="App">
        <TopNav rightArray={[
                            {name:"news", functionstate:toggleNews},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <h2>Form for Newsletter Subscription</h2>
        <div className="form">
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="nameId"/>
                <br/>
                <label for="email" >Email id:</label>
                <input type="email" name="email" id="emailId"/>
                <br/>
                <label for="query" >Roll No.:</label>
                <input type="text" name="rollNo" id="rollId"/>
                <br/>
                <button onClick={()=>submitForm()}>Submit</button>
            </div>

        </div>
       
        
           
      </div>
       : (isHome ? <App itemsInfo={props.itemsInfo}/> : null)
  
  


  )   
}

export default News
