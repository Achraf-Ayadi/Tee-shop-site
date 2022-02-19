import React from 'react'
import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  return (
    <>
      <Wrapper>
        <FiMenu className='icon' />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  .icon {
    color: var(--primaryColor);
    font-size: 3rem;
    position: fixed;
    left: 30px;
    top: 30px;
    cursor: pointer;
    animation: bounce 2s ease infinite;
  }
  

  @keyframes bounce{
    0% {
      transform: scale(1);
     
    }

50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
    }
  }
  }
`

export default Navbar
