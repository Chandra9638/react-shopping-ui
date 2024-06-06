import React from 'react'

function Header() {
  return (
    <div className='HeaderSection'>
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>
      <div className="center">
        <ul>
         <li>Men</li>
         <li>Women</li>
         <li>Children</li>
         <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type='text' placeholder='Search...'/>
      </div>
      <div className="right">
        <div className="signin">
          Signin/signup
        </div>
        <div className="cart">
         Cart
        </div>
      </div>
      
    </div>
  )
}

export default Header