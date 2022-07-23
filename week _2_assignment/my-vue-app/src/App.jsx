import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spp from './review'

function App() {
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [content, setContent] = useState("Reviews")
  // var x = 0
  const alertfunc = () => {
    
    const name = prompt("What is your name?")
    
    
    if (name==null || name ==""){
      alert(`Invalid Name, Please Try Again`)
    }
    else{
      const email = prompt("IITB Email id :")
      if (email.slice(-11)==="@iitb.ac.in"){
        const rollNo = prompt("Roll Numberv :")
        alert(`Thanks, ${name}` + `, Successfully Saved`)
      }
      else{
        alert(`Invalid Email ID, Please Try Again`)
      }
    }
  }

    const setReview = (event) =>{
      setClicked(true);
      // if setContent("Set Reviews")
       
    }
    // cond ? x : y
  
  return (
    
    <div className="App" Id="1">
      <div class="topnav">
        <div className = "features">
          <a className="active" href="#music">MUSIC</a>
          <a href="#sports">SPORTS</a>
          <a href="#tech">TECH.</a>
          <a href="#contactUs">CONTACT US</a>
        </div>
        <div classNmae="reviews">
        <a className="review" onClick={setReview}>Reviews</a>
          <button className="newspaper"  onClick={alertfunc} >
            Newsletter
          </button>
        </div>
      </div>
      {clicked ? <Spp/> : null}
    </div>
  )
}

export default App
