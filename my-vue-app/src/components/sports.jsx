import { useState } from 'react'
import TopNav from '../components/topNav'
import App from '../App'


function Sports(props) {
  
  var [isHome, setHome] = useState(false);
  var [isSport, setSport] = useState(true);
 
  //Adding Items to cart
  var itemsInfo = props.itemsInfo;
  var [counter, setCounter] = useState(itemsInfo[0]);
  const increment = () =>{
    setCounter(counter=counter+1)
    return(counter)
   }
  const addToCart = (item) => {
    const count = increment()
    itemsInfo[1][itemsInfo[1].length]=item;
    itemsInfo[0]=count;
  }
  
  //changeDesktop
  if(isHome==true){isSport=false}
  
  //toggler function
  const toggleHome = () => {
    setHome(true)
  }
  const toggleSport = () => {
    setSport(true)
  }
  
  //various Sports 
 const sportfacility = [{indoor:[{name:"Swimming", img:"../../swimming.jpg" , disc:""},
                                {name:"Pool", img:"../../pool.jpg", disc:""}]},
                                {esport:[{name:"Esport", img:"../../public/esport.jpg", disc:""}]}]

    return (
    isSport ?   
      <div className="App">
        <TopNav rightArray={[
                            {name:"sport", functionstate:toggleSport},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <h1>Amazing Games</h1>
        <div className="sport">
            <div className="indoorgames">
                <h3>{sportfacility[0].indoor[0].name} <button className="cart" onClick={()=>addToCart(sportfacility[0].indoor[0])}>Add to Cart</button></h3><br/>
                <img src={sportfacility[0].indoor[0].img}/>
                <h3>{sportfacility[0].indoor[1].name} <button className="cart" onClick={()=>addToCart(sportfacility[0].indoor[1])}>Add to Cart</button></h3><br/>
                <img src={sportfacility[0].indoor[1].img}/>
            </div>
            <div className="esport">
                <h3>{sportfacility[1].esport[0].name} <button className="cart" onClick={()=>addToCart(sportfacility[1].esport[0])}>Add to Cart</button></h3><br/>
                <img src={sportfacility[1].esport[0].img}/>
                
            </div>

        </div>
       
        
           
      </div>
       : (isHome ? <App itemsInfo={itemsInfo}/> : null)
  
  


  )   
}

export default Sports
