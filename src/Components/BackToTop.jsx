import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    // function 1 
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }


    // function 2
    const listenToScroll = () => {
        // alert("you scrolled")
        console.log("⬇️⬆️ webpage got scrolled");

        let heightToHidden = 1200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("how much down am i", winScroll);

        if (winScroll > heightToHidden) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);

        return () => { 
            window.removeEventListener("scroll", listenToScroll)
        }
    }, []);

    return (
        <>
            {/*  <h1>BackToTop</h1> */}
            <Wrapper>
                {isVisible && (
                    <div className='top-btn' onClick={backToTop}>
                        {/* Back To Top */}
                        <FaArrowUp className="icon" />
                    </div>
                )}
            </Wrapper>
        </>
    )
};

const Wrapper = styled.section`
 
  .top-btn{
     width: 6rem;
     height: 6rem;
     font-size: 2.4rem;
     color: #fff;
     background-color: ${({ theme }) => theme.colors.btn};
     border-radius: 50%;
     box-shadow: ${({ theme }) => theme.colors.shadow};
     position: fixed;
     bottom: 5rem; 
     right: 5rem;
     z-index: 999;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     //  border: 2px solid red;
     
       
      .icon{
          animation-name: BackToTopIcon;
          animation-duration: 1.2s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: alternate-reverse;
  
          // animation: BackToTop 1.2s linear infinite alternate-reverse;  
       };


       @keyframes BackToTopIcon {
         0% {
           transform: translateY(-0.5rem); // - minus means upward
         }
         100% {
           transform: translateY(1rem)
         }
       };
    }

    /* =================================================================
               Responsive 
    ====================================================================*/


@media (max-width: 768px) {
  
  .top-btn{ /* without it in mobile not showing icon */
     left: 80%;
     right: 0%;
  }
}

`;

export default BackToTop;