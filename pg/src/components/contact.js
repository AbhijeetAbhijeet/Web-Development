import { useState } from 'react'
import TopNav from './topNav'
import App from '../App'
import '../styles/contact.css'


function Contact(props) {
  
  var [isHome, setHome] = useState(false);
  var [isContact, setContact] = useState(true);
 
  
  
  if(isHome==true){isContact=false}
  
  
  
  const toggleHome = () => {
    
    setHome(true)
  }
  const toggleContact = () => {
    setContact(true)
  }
  
 const submitForm = () => {
    const email = document.getElementById("emailId").value
    const name = document.getElementById("nameId").value
    const query = document.getElementById("queryId").value
    alert("Thank, " + name)
    document.getElementById("emailId").value="";
    document.getElementById("nameId").value="";
    document.getElementById("queryId").value="";

 }
  return (
    isContact ?   
      <div className="App">
        <TopNav rightArray={[
                            {name:"contact us", functionstate:toggleContact},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <h1>Welcome</h1>
        <h4>You can contact us for any kind of issues(like Technical issue,room maintenance) or any othe kind of help</h4>
        <h4>Please fill this form, for contact us</h4>
        <div className="form">
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" id="nameId"/>
                <br/>
                <label for="email" >Email id:</label>
                <input type="email" name="email" id="emailId"/>
                <br/>
                <label for="query" >Query:</label>
                <input type="text" name="query" id="queryId"/>
                <br/>
                <button onClick={()=>submitForm()}>Submit</button>
            </div>

        </div>
       
        
           
      </div>
       : (isHome ? <App itemsInfo={props.itemsInfo}/> : null)
  
  


  )   
}

export default Contact
