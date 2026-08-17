import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>feel free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113244.79454256334!2d82.60009409726563!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0xf2123bd299ec4501!2sIT%20Company%20India!5e1!3m2!1sen!2sin!4v1786959874591!5m2!1sen!2sin" 
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>

      
      <div className="container">
        <div className="contact-form">
          <form 
            action="https://formspree.io/f/xkodjzql" 
            method='POST' 
            className='contact-inputs'
          >
            <input
              type="text"
              name='Name'
              placeholder='name'
              // autoComplete='off' 
              required 
            />
            <input
              type="email"
              name='Email'
              placeholder='Email'
              // autoComplete='off'
              required
            />
            <textarea
              name="Message"
              cols="30"
              rows="6"
              autoComplete='off'
              required
            >
            </textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* border: 2px solid pink; */
  padding: 9rem 0 ;

  .container {
    margin-top: 6rem;
    text-align: center;
    // border: 2px solid red;
  }

  .contact-form{
    max-width: 50rem; //500px
    margin: auto;
    // border: 2px solid blue;
  }

  .contact-inputs{
     display: flex;
     flex-direction: column;
     gap: 3rem;  

     input[type="submit"]{
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover{
       background-color: ${({theme})=> theme.colors.white};
       border: 1px solid ${({theme})=> theme.colors.btn};
       color: ${({theme})=> theme.colors.btn};
       transform: scale(0.9);
      
      }
     }
  }



`;

export default Contact