import React from 'react'
import styled from 'styled-components'
import { BsTwitter, BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <Wrapper>
      <div className='icons'>
        <span className='icon'>
          <BsTwitter />
        </span>
        <span className='icon'>
          <BsFacebook />
        </span>
        <span className='icon'>
          <AiFillInstagram />
        </span>
      </div>
      <h4 class='footer-text'>
        ©<span> 2022 </span>
        <span class='company'>tea station </span>
        all rights reserved
      </h4>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--mainDark);
  text-align: center;
  padding: 3rem;
  color: var(--mainWhite);
  letter-spacing: 0.3rem;
  .company {
    color: var(--primaryColor);
  }
  .icons {
    padding: 1rem;
  }
  .icon {
    padding: 1rem;
    font-size: 1.5rem;
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`
export default Footer
