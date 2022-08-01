import { useState } from 'react'
import TopNav from '../components/topNav'
import App from '../App'


function Cart(props) {
  var itemsInfo = props.itemsInfo
  var [isHome, setHome] = useState(false);
  var [isCart, setCart] = useState(true);
  var [itemCounter,setItemCounter] = useState(itemsInfo[0])
  const[items,setItems] = useState(itemsInfo[1])
  const incrementer = () => {
    setItemCounter(itemCounter= itemCounter+1)
    itemsInfo[0]=itemCounter
  }
  
  if(isHome==true){isCart=false}
  
  
  
  const toggleHome = () => {
    
    setHome(true)
  }
  const toggleCart = () => {
    setCart(true)
  }
  const removeAllItems=()=>{
    setItemCounter(0)
    itemsInfo[0]=0;
    itemsInfo[1].length=0
  }
 
 
  return (
    isCart ?   
      <div className="Cart">
        <TopNav rightArray={[
                            {name:"cart", functionstate:toggleCart},
                            
                            ]} 
                leftArray={[{name:"go to home", functionstate:toggleHome},
                           
                            ]} />
        <h1>Your's Store</h1>
       
       
      
       <ol className="listOfItems">
            {itemsInfo[1].map((item, index)=>(
                <div className="cartElement">
                    <li><h3>{item.name}</h3>
                    
                    <img src={item.img}/>
                    </li>
                </div>
            ))}
        </ol> 

        {itemsInfo[0]==0 ? <h3>NO ITEMS</h3> : <button onClick={removeAllItems}>Remove All Items From The Cart</button>}
      </div>
       : (isHome ? <App itemsInfo={itemsInfo}/> : null)
  
       


  )   
}

export default Cart
