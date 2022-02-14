import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import mainbcg from '../images/main-bcg.jpeg'
function Hero() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <div className='banner'>
          <h2 className='banner-subtitle'>over one Hundert flavors of</h2>
          <h1 className='banner-title'>
            specially <br /> crafted tea
          </h1>

          <button className='banner-btn'>explore</button>
        </div>
      </Wrapper>
      <div className='color-line'></div>
    </>
  )
}

const Wrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${mainbcg}) center/cover no-repeat fixed;
  min-height: 100vh;
  position: relative;

  .banner {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    letter-spacing: var(--letterSpacing);
    transform: translate(-50%, -50%);
  }
  .banner-subtitle {
    color: var(--primaryColor);
    font-family: var(--slantedText);
    font-size: 2rem;
    animation: slideFromRight 5s ease-in-out 1;
  }

  .banner-title {
    margin-top: 2.5 rem;
    line-height: 1.3;
    text-transform: uppercase;
    color: var(--mainWhite);
    font-size: 3.2rem;
    animation: slideFromLeft 5s ease-in-out 1;
  }
  .banner-btn {
    font-size: 1.5rem;
    padding: 1.2rem 1.5rem;
    text-transform: uppercase;
    color: var(--mainWhite);
    background: var(--primaryColor);
    outline: 0.2rem solid var(--primaryColor);
    outline-offset: 4px;
    cursor: pointer;
    margin: 2rem;

    border: none;
    animation: show 5s ease-in-out 1;
    ${'' /* font-weight: bold; */}
  }
  .banner-btn:hover {
    opacity: 0.7;
    background-color: var(--mainWhite);
    color: var(--primaryColor);
  }

  .color-line {
    height: 5px;
    background: red;
  }

  ${'' /* animation   */}
  @keyframes slideFromRight {
    0% {
      transform: translateX(1000px);
    }
    50% {
      transform: translateX(-200px);
    }
    75% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-1000px);
    }
    50% {
      transform: translateX(200px);
    }
    75% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes show {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export default Hero
