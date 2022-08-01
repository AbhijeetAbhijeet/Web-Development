import { useState } from 'react'
import TopNav from '../components/topNav'
import App from '../App'


function Review(props) {
  
  var [isHome, setHome] = useState(false);
  var [isReview, setReview] = useState(true);
 
  
  
  if(isHome==true){isReview=false}
  
  
  
  const toggleHome = () => {
    
    setHome(true)
  }
  const toggleReview = () => {
    setReview(true)
  }
  
 
  return (
    isReview ?   
      <div className="App">
        <TopNav rightArray={[
                            {name:"review", functionstate:toggleReview},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <h1>this is review file</h1>
       
        
           
      </div>
       : (isHome ? <App itemsInfo={props.itemsInfo}/> : null)
  
  


  )   
}

export default Review
