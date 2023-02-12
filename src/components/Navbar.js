import React from 'react';
import "./NavbarStyles.css"
function Navbar() {
    return(
    <nav>
        <a href='index.html'></a>
        <div>
            <ul id='navbar'> 
                <li><a className='active' href='index.html'>Home</a></li>
                <li><a href='index.html'>Shop</a></li>
                <li><a href='index.html'>Blog</a></li>
                <li><a href='index.html'>About</a></li>
            </ul>
        </div>
    </nav>
    );
    
    }



export default Navbar;