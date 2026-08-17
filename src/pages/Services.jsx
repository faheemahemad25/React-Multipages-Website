import React from 'react'
// import { useGlobalContext } from '../Context';
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

import { useContext} from 'react'    //📗🔖 every time to get context data we have to import these two.
import { AppContext } from '../AppContext'    //📗🔖 every time to get context data we have to import these two.


const Services = () => {

  // const { services, loading, error } = useGlobalContext();
  // console.log(services);
  // console.log("error", error);

   //  OR 
    const { services, loading, error } = useContext(AppContext)



  return (
    // <h1>Services</h1>
    <Wrapper>
      <h2 className='common-heading'>Our Services</h2>
      {error ? (
        <h2>Error: {error}</h2>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='container grid grid-three-column'>
          {
            services.map((service) => {
              const { id, title, image, description } = service;

              return (
                <div key={id} className='card'>
                  <figure>
                    <img src={image} alt={title} />
                  </figure>
                  <div className='card-data'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <NavLink to="/services" >
                      <Button className="btn">Read More</Button>
                    </NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      )}

    </Wrapper>
  )
}

const Wrapper = styled.section`
  //  border: 2px solid green;  
   padding: 9rem 0;
   background-color: rgb(170 170 170 / 5%);
   

   .common-heading{
    //  border: 2px solid blue; 
   }
 
  // .container{                              // it still used from GlobalStyle.jsx
  //   border: 2px solid orange; 
  //   max-width: 120rem; // 1200px      
  //   margin: auto;
  // }
  
  .card{
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data{
      padding: 1rem 2rem;
      //  border: 2px solid red; 
    }
  }


  figure{
    width: auto;
    display: flex;
    justify-content: center;
    align-content: centere;
    position: relative;
    overflow: hidden;
    transition: all 0.5s liner;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;

      transition-property: all;
      transition-duration: 0.2s;
      transition-timing-function: linear;
    }
    
    &:hover::after{
     width: 100%;
    }

  
    img{
     max-width: 100%;
     margin-top: 1.5rem;
     height: 20rem;

     transition-property: all;
     transition-duration: 0.2s;
     transition-timing-function: linear;
    }

    &:hover img{
     transform: scale(1.2)
      // transform: translateY(-5rem)
    }
  }

  .btn{
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 94 243);
      display: flex;
      justify-content: center;
      align-content: centere;
      color: rgb(98 84 243);
      font-size: 1.4rem;

      &:hover{
       background-color:rgb(98 94 243);
       color: #fff;
      }
    }

 

  `;

export default Services;

