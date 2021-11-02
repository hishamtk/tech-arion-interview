import React, { useState } from 'react'

function Counter() {

    const [count,setCount] = useState(0)

    const handleIncrement = ()=>{
        let currCount = count;
        setCount(currCount + 3)
    }

    const handleDecrement = () =>{
        let currCount = count;
        setCount(currCount - 3)
    }

    const resetCount = () =>{
        setCount(0)
    }


    return (
        <div className="background">
            <div className="container">
          
           


            <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>COUNTER</span>
               
              </div>
              
            </div>
            <div className="screen-body-item">
            <div className="counter">
            <button className="app-form-button" onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button className="app-form-button" onClick={handleIncrement}>+</button>
            </div>

            <button className="app-form-button"  onClick={resetCount}>RESET</button>
            </div>
            
          </div>
        </div>


            
        </div>
        </div>
    )
}

export default Counter
