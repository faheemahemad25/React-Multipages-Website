import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button'
// import { useGlobalContext } from '../context'

import { useContext} from 'react'    //📗🔖 every time to get context data we have to import these two.
import { AppContext } from '../AppContext'    //📗🔖 every time to get context data we have to import these two.


const HeroSection = (props) => {
    console.log(props);
    // const contextData = useContext(AppContext);
    // console.log("context data", contextData);       // We got {name: 'vinod thapa ji', age: '30'}
    // const { name, age } = useContext(AppContext);
    // const { name, age } = useGlobalContext();
    // const { name, description, image } = useGlobalContext();
    // or 
    // const contextData = useContext(AppContext);
    // console.log("context data", contextData);  
    // or 
    const { name, description, image } = useContext(AppContext);
    //  console.log("context data", name, description, image); 


    return (
        // <h1>Hero Section</h1>
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-text">
                    <p className='hero-top-text'>THIS IS ME</p>
                    {/* <h1 className='hero-heading'>{props.name}</h1> */}
                    <h1 className='hero-heading'>{name}</h1>
                    <p className='hero-para'>
                        {/* I am {name} {age}. {props.description} */}
                        I am {name}. {description}
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact">Hire Me</NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <picture>
                        <img
                            className='hero-img'
                            // src="./images/hero-DevWithLaptop.png"
                            // src={props.image}
                            src={image}
                            alt="hero image"
                        />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
      padding: 9rem 0;
    /* border: 2px solid red; */

   .section-hero-text{
    //  border: 2px solid green;
     display: flex;
     flex-direction: column;
     justify-content: center;
   }

   .btn{
      max-width: 16rem;
   }
  
   .hero-top-text {
     text-transform: uppercase;
     font-weight: 500;
     font-size: 1.5rem;
   }

   .hero-heading{
     text-transform: uppercase;
     font-size: 6.4rem;
   }

   .hero-para{
     margin-top: 1.5rem;
     margin-bottom: 3.4rem;
     max-width: 60rem;
   }

   .section-hero-image{
    //  border: 2px solid green;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   picture{
     text-align: center;
   }

   .hero-img{
     max-width: 80%;
   }



`;

export default HeroSection;