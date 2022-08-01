import { useState } from 'react'
import "../styles/topnav.css"
import Sports from './sports'

function TopNav(props) {

   
   
   
    return(
        <div className='topnav'>
            {props.rightArray.map(rightlist => {
                const toggler =() =>{
                    rightlist.functionstate((prev)=> !prev)
            }
                return(<button className={rightlist.name} onClick={toggler}>{rightlist.name.toUpperCase()}</button>)
            })}
            <div className="leftnav">  
                {props.leftArray.map(leftlist =>{
                    const toggler =() =>{
                        leftlist.functionstate((prev)=> !prev)
                    }
                    return(<button className={leftlist.name} onClick={toggler} >{leftlist.name.toUpperCase()}</button>)
                })}
            </div>
        </div>
    )
}

export default TopNav



