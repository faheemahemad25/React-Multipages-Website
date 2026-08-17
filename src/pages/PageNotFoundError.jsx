import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';

const PageNotFoundError = () => {
    return (
        // <h1>There is not such page.</h1>
        <Wrapper>
            <div className="container">
                <img src="./images/error.svg" alt="error.svg" />
                <NavLink to="/" className='back-btn'>
                    <Button >Back to Home</Button>
                </NavLink>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
   padding: 9rem 0;
   
   .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50rem;
   }

   img{
     height: 80%;
     width: 100%;
    //  border: 2px solid green;
   }
   
   
   .back-btn{
     padding: 2rem;
   }

`;

export default PageNotFoundError;