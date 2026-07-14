import React from "react";


function Header({ setPage }) {
  return (
    <header style={{ background: '#333', top:'0',position:'fixed',width:'100%',color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}}> 
            <h2 style={{margin:0 }}> Tracker</h2>
            <nav>
                <button onClick={() => setPage('home')} style={btnStyle}> Home</button>
                <button onClick={() => setPage('about')} style={btnStyle}>About</button>
                <button onClick={() => setPage('profile')} style={btnStyle}>Profile</button>
            </nav>

    </header>

  )
  

}
const btnStyle = {
        background: '#555',
        color: '#fff',
        padding: '8px 15px',
        borderRadius: '5px',
        curor:'pointer',
        border:'none',
        marginLeft:'10px'
        
     
  }

export default Header;