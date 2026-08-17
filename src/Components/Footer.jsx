import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    // <h1>Footer</h1>
    <Wrapper>
      {/*  ---- footer CTA popup section ----  */}
      <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get stated ?</h3>
            <h3>Talk to us Today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/*  ---- footer main section ----  */}
      <footer>
        <div className="container grid grid-four-column">
          {/* 1st column */}
          <div className="footer-about">
            {/* <h3>Thapa Technical</h3> */}
            <h3>Bheem Ahemad Malik</h3>
            <p>We Build Apps That Don’t Break When You Grow.</p>
          </div>
          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important update</h3>
            <form action="">
              <input
                type="text"
                placeholder="Email"
                required
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-icons">
              <div>
                <Link to="https://discord.com/channels/@me" target="_blank" >
                  <FaDiscord className="icons" />
                </Link>
              </div>
              <div>
                <Link to="https://www.instagram.com/" target="_blank">
                  <FaInstagram className="icons" />
                </Link>
              </div>
              <div>
                <Link to="https://www.youtube.com/" target="_blank">
                  <FaYoutube className="icons" />
                </Link>
              </div>
            </div>
          </div>
          {/* 4th column */}
          <div className='footer-contact'>
            <h3>Call Us</h3>
            <h3>+91 9897316045</h3>
          </div>
        </div>

        {/*  ---- Bottom footer section ----  */}
        <section className='footer-bottom-section'>
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Bheem Ahemad Malik. All right Reserved
            </p>
            <div>
              <p>PRIVICY POLICY</p>
              <p>TERM & CONDITIONS</p>
            </div>
          </div>
        </section>
      </footer>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  /* border: 2px solid green; */
 
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    /* border: 2px solid yellowgreen; */

      .grid div:last-child {  //✅🔖 Select the last <div> where many div inside an element having the class .grid
        align-self: center;
        justify-self: end;
      }
   }

  /* .grid div{
     border: 2px solid yellowgreen;
  }  */

   footer{
     padding: 14rem 0 0 0;
     background-color: ${({ theme }) => theme.colors.footer_bg}; 
     
     
 
      h3{
       color: ${({ theme }) => theme.colors.hr};
       margin-bottom: 2.4rem;
      }
 
      p{
       color: ${({ theme }) => theme.colors.white};
      }
      
      .footer-social-icons{
        display: flex;
        gap: 2rem;

        div{
         padding: 1rem;
         border-radius: 50%;
         border: 2px solid ${({ theme }) => theme.colors.white};

         .icons{
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
         }
        }
      }

      .footer-bottom-section {
         padding: 9rem;

          hr {
           margin-bottom: 2rem;
           color: ${({ theme }) => theme.colors.hr};
           height: 0.1px;
          }
      }
   }

    /* =================================================================
                  Responsive Navbar
   ====================================================================*/

    @media (max-width: 768px) {

      .contact-short{
          max-width: 80vw;
          padding: 2.5rem 0rem;
          display: flex;
          justify-content: center;

          .contact-short-btn{
           text-align: center;
           justify-self: flex-start;
            
          }
      };

      footer{
        .footer-bottom-section {
         padding: 0rem;  
        }
      }; 

    };

`;

export default Footer