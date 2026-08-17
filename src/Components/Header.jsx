import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

import styled from 'styled-components'

const Header = () => {
  return (
     <MainHeader>
        <NavLink to="/">
            <img src="./images/ahemad-logo.png" alt="logo" className='logo' />
        </NavLink>
        <Navbar/>
     </MainHeader>
  )
}

const MainHeader = styled.header`
   background-color: ${({theme})=> theme.colors.bg};
   height: 7rem;
   padding: 0 4.8rem;

   display: flex;
   justify-content: space-between;
   align-items: center;
   /* border: 2px solid red; */

   .logo{
     max-width: 30%;
     height: auto;
     /* border: 2px solid red; */
   }
`;

export default Header 
