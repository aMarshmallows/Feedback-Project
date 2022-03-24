import React from 'react'


function Header(props) {

  return (
    <div>
        <div className="container">
            <h1>{props.text}</h1>
        </div>
        
    </div>
  )
}

export default Header