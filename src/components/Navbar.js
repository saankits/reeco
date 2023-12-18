import React, { useState } from 'react'

function Navbar() {
  const [cl, setCl] = useState("bars")
  const [ddclass, setDdclass] = useState("ul")
  const handleMenuIcon = () => {
    setCl(cl==="bars"?"xmark" : "bars")
    setDdclass(ddclass==="ul"?"bi" : "ul")
  }
  return (
    <div>
      <nav className='navbar-r'>
        <div className="lef">
        <h1>Reeco</h1>
        <ul className={`${ddclass}`}>
            <li>
                Store
            </li>
            <li>
                Orders
            </li>
            <li>
                Analytics
            </li>
            <li className='none'>
                Your Cart <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li className='none'>
                Hello, James
            </li>
        </ul>
        </div>
        
        <div className="righ">
            <span id="cart"><i className="fa-solid fa-cart-shopping"></i></span>
            <span id="acc">Hello,James</span>
            <span className='menuicon'><i className={`fa-solid fa-${cl}`} onClick={handleMenuIcon}></i></span>
            {/* <span className='xicon'><i className="fa-solid fa-xmark"></i></span> */}
        </div>
      </nav>
      {/* <OrderId /> */}
      <div className='main-container'>
      <div className="t1">Orders &gt; Order 32457ABC</div>
      <div className="t2">
        <h2>Order 32457ABC</h2>
        <span className="rt">
            <button className='b1'>Back</button>
            <button className='b2'>Aprove Order</button>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Navbar
