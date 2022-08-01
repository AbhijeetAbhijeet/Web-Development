import { useState } from 'react'
import './App.css'
import Review from './components/review'
import TopNav from './components/topNav'
import Sports from './components/sports'
import Contact from './components/contact'
import Tech from './components/tech'
import News from './components/news'
import Cart from './components/cart'

function App(props) {
  
  var [isHome, setHome] = useState(true);
  var [isSport, setSport] = useState(false);
  var [isContact, setContact] = useState(false);
  var [isTech, setTech] = useState(false);
  var [isNewsletter, setNewsletter] = useState(false);
  var [isReview, setReview] = useState(false);
  var [isCart, setCart] = useState(false);
  
  
  
  if(isSport==true){isHome=false}
  if(isTech==true){isHome=false}
  if(isReview==true){isHome=false}
  if(isNewsletter==true){isHome=false}
  if(isContact==true){isHome=false}
  if(isCart==true){isHome=false}
  
  
  const toggleHome = () => {
    
    setHome(true)
  }
  const toggleSport = () => {
    setSport(true)
  }
  const toggleTech = () => {
    setTech(true)
  }
  const toggleReview = () => {
    setReview(true)
  }
  const toggleContact = () => {
    setContact(true)
  }
  const togglenews = () => {
    setNewsletter(true)
  }
  const toggleCart = () => {
    setCart(true)
  }
 
  return (
    isHome ?   
      <div className="App">
        <TopNav rightArray={[{name:"home", functionstate:toggleHome},
                            {name:"tech.", functionstate:toggleTech},
                            {name:"sport", functionstate:toggleSport},
                            {name:"contac us", functionstate:toggleContact},
                            
                            ]} 
                leftArray={[{name:"cart", functionstate:toggleCart},
                            {name:"review", functionstate:toggleReview},
                            {name:"newsletter", functionstate:togglenews}
                            ]} />
       
        <h1>this is home</h1>
        
           
      </div>
       : (isSport ? <Sports itemsInfo={props.itemsInfo}/> :(isReview ? <Review itemsInfo={props.itemsInfo}/> : (isContact ? <Contact itemsInfo={props.itemsInfo}/> : (isTech ? <Tech itemsInfo={props.itemsInfo}/> : (isNewsletter ? <News itemsInfo={props.itemsInfo}/>: (isCart ? <Cart itemsInfo={props.itemsInfo}/> : null ))))))
  
  


   
  )
}

export default App
