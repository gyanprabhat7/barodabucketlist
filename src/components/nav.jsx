import React from 'react'
import { Navbar } from 'react-navbar-menu'

const Header = () => {
    return (
        <div>
            <Navbar IconColor={'yellow'} MenuNumber={4} Center={true} Position={'bottom'}
                url1={'#home'}icon1={"bx bx-home-alt"} 
                url2={'#aboutme'}icon2={"bx bx-book-alt"} 
                url3={'/contact'}icon3={"bx bx-user"} 
                url4={'#skills'}icon4={"bx bx-pin"} 
                backgroundColor={"#151c28"} degree={`to bottom`} 
                gradcolor1={'#a595e9'} gradcolor2={'#a595e933'}/>
   
        </div>
    )
}

export default Header