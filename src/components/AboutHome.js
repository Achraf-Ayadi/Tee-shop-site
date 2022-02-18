import React from 'react'
import styled from 'styled-components'
import AboutImg from '../images/about-bcg.jpeg'
function AboutHome() {
  return (
    <Wrapper className='section-center'>
      <div className='img-container'>
        <img src={AboutImg} alt='about us' className='about-img' />
      </div>
      <div className='infos'>
        <h2 className='subtitle'>about our</h2>
        <h1 className='title'> Tea Station</h1>
        <p className='text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          iste!
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          accusamus?
        </p>
        <button className='btn'>learn more</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 95vw;

  .infos {
    padding: 2rem 0;
  }
  .about-img {
    width: 100%;
    transition: var(--mainTransition);
  }
  .img-container {
    margin-right: 1rem;
    margin-top: 2rem;
    max-width: 500px;
    border: 10px solid var(--primaryColor);
    background: var(--primaryColor);
    overflow: hidden;
  }
  .title {
    color: var(--mainDark);
    text-transform: Capitalize;
  }
  .text {
    margin: 1rem 0;
    max-width: 26rem;
  }
  .about-img:hover {
    opacity: 0.5;
    transform: scale(1.2);
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);

    margin-left: 2rem;
  }
`

export default AboutHome
