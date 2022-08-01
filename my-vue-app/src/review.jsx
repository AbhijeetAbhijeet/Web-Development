import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './review.css'
import App from './App'

function Spp() { 

    const [clicked, setClicked] = useState(false)
    const setReviewBack = (event) =>{
        setClicked(true);
        document.getElementById(2).appendChild(img)
        // if setContent("Set Reviews")
         
      }
  return (
    
    <div className="Spp1" Id="2">
        <img className="cross" src="src/cross.webp" height='30px' onClick={setReviewBack}></img>
        <h1>Review Cards</h1>
        <div className="reviewBox">
            <img src="src/OIP.jpg" ></img>
            <h2>ABHIJEET
                <p>Web Developer</p>
            </h2>
            
            <ol>
            <li >The rooms were clean, very comfortable, and the staff was amazing. They went over and beyond to help make our stay enjoyable. I highly recommend this hotel for anyone visiting downtown (L).</li>
            <p></p>
            <li>They were extremely accommodating and allowed us to check in early at like 10am. We got to hotel super early and I didn’t wanna wait. So this was a big plus. The sevice was exceptional as well. Would definitely send a friend there.</li>
            </ol>
        </div>
    {/* {clicked ? <App/> : null} */}
     
    </div>
  )
}

export default Spp
