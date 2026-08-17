import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from "react-icons/cg";



const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  console.log(isOpenMenu);


  return (
    <Nav>
      <div className={isOpenMenu ? "menuIcon active" : "menuIcon "}>
        {/* Desktop Navbar  */}
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/" onClick={() => setIsOpenMenu(false)} >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about" onClick={() => setIsOpenMenu(false)} >
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/services" onClick={() => setIsOpenMenu(false)} >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact" onClick={() => setIsOpenMenu(false)} >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar icon */}
        <div className="mobile-navbar-btns-container">
          <CgMenu
            name="menu-icon"
            className='menu-icon mobile-nav-icon'
            onClick={() => setIsOpenMenu(true)}
          />
          <CgCloseR
            name="close-icon"
            className='close-icon mobile-nav-icon'
            onClick={() => setIsOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  )
}


const Nav = styled.nav`

  /* border: 3px solid purple; */


  .navbar-list {
       display: flex;
       gap: 4.8rem;
       /* border: 4px solid blue; */
        
       li{                                            //📗🔖L4: nesting feature humhe milta h styled component mei ye hum css mei nhi kr sakte
          list-style: none;
          font-size: 1.8rem;
          
          .navbar-link{
            &:hover,
            &:active {
               color: ${({ theme }) => theme.colors.helper};
            }
            text-decoration: none; 
            color: ${({ theme }) => theme.colors.text};  
  
            &:link,
            &:visited {
               text-transform: uppercase;
               transition:  0.3s linear;
               
            }
          }
            
          .active{
              color: ${({ theme }) => theme.colors.helper};
          }
       }
  };


  .menu-icon {
    display: none;
  }

  .close-icon {
    display: none;
  }

  /* =================================================================
               Responsive Navbar
  ====================================================================*/
   
  @media (max-width:768px) {

    // hide the original navbar list
    .navbar-list{
      position: fixed;
      top: 0;
      left: 0;
      background-color: #ffffffcc;

      width: 100vw;
      height: 100vh;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
    
      transform: translateX(100%);

      /* transition-property: transform; // or all;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;
      transition-delay: 0s;   */
    }


    .mobile-navbar-btns-container{
      /* border: 2px solid orange; */
     
        .mobile-nav-icon{
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
  
        .menu-icon {
          display: inline-block;
        }

        .close-icon {
          display: none;
        }
    }
    

   
    .active .navbar-list {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
      z-index: 999;
    }

     .active .close-icon {
      display: inline-block;
    }

    .active .menu-icon {
      display: none;
    }

    .active .close-icon{
      position: absolute;
      top: 5%;
      right: 10%;
      z-index: 999;
    }

  
  }
`;

export default Navbar;