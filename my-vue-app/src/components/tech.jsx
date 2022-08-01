import { useState, useEffect} from 'react'
import TopNav from '../components/topNav'
import App from '../App'
import Contact from './contact'
import '../styles/tech.css'



function Tech(props) {
  
  var [isContact, setContact] = useState(false);  
  var [isHome, setHome] = useState(false);
  var [isTech, setTech] = useState(true);

  //Adding Items
  var itemsInfo = props.itemsInfo;
  var [counter, setCounter] = useState(itemsInfo[0]);
  const increment = () =>{
    setCounter(counter=counter+1)
    return(counter)
   }
  const addToCart = (item) => {
    const count = increment()
    itemsInfo[1][itemsInfo[1].length]=item;
    itemsInfo[0]=count
    alert("Your item issuccessfully added to the cart.")
  }
  
  //Change desktop
  if(isHome==true){isTech=false}
  if(isContact==true){isTech=false}

 //togger option 
 const toggleHome = () => {
    setHome(true)
  }
  const toggleTech = () => {
    setTech(true)
  }
  const toggleContact = () => {
    setContact(true)
  }
  
  //Facilities variable
  const technicalFacility = [{free:[
                                    {name:"Mobile Service" , img:"../../mobileService.jpg" , discription:""}]},
                             {rent:[
                                    {name:"Computer Lab" , img:"../../computerLab.jpg" , discription:""}]}] 
     
 
  return (
    isTech ?   
      <div className="Tech">
        <TopNav rightArray={[
                            {name:"tech", functionstate:toggleTech},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <div className="techTour">
              <h1>Techenical Facilities</h1>     
              <div className="free">
                    <p>Free</p><br/>
                    <img src={technicalFacility[0].free[0].img}/><br/>
                    <h3>{technicalFacility[0].free[0].name} <button className="cart"onClick={()=>addToCart(technicalFacility[0].free[0])}>Add to Cart</button></h3>
                    


              </div>
              <div className="rent">
                  <p>On Rent</p><br/>
                  <img src={technicalFacility[1].rent[0].img}/><br/>
                  <h3>{technicalFacility[1].rent[0].name} <button className="cart"onClick={()=>addToCart(technicalFacility[1].rent[0])}>Add to Cart</button></h3>
                  
              </div>
              <div className="techIssue">
                Please <a onClick={toggleContact}>CONTACT US</a> for any Technical issue
              </div>         
        </div>
        
       
        
           
      </div>
       : (isHome ? <App itemsInfo={itemsInfo}/> : (isContact ? <Contact itemsInfo={itemsInfo}/>:null))
  
  


  )   
}

export default Tech
