import { useState } from 'react'
import TopNav from '../components/topNav'
import App from '../App'
import '../styles/review.css'


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
      <div className="Review">
        <TopNav rightArray={[
                            {name:"review", functionstate:toggleReview},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <div className="Spp1" Id="2">
            
            <h1>Review Cards</h1>
            <div className="reviewBox">
                <img src="../../OIP.jpg" />
                <h2>ABHIJEET
                    <p>Web Developer</p>
                </h2>
                
                <ol>
                    <li >The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown (L).</li>
                    <p></p>
                    <li>They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there.</li>
                </ol>
            </div>
        </div>
       </div>
       : (isHome ? <App itemsInfo={props.itemsInfo}/> : null)
  
  


  )   
}

export default Review
