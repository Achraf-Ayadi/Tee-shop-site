import React from 'react'
import styled from 'styled-components'
import { IoMdCafe } from 'react-icons/io'
import { GiFamilyHouse } from 'react-icons/gi'
import { FaMortarPestle } from 'react-icons/fa'

import img1 from '../images/product-1.jpeg'
import img2 from '../images/product-2.jpeg'
import img3 from '../images/product-3.jpeg'

function Services() {
  return (
    <Wrapper className='section-center'>
      <div className='title'>
        <h2 className='subtitle'>Explore</h2>
        <h1 className='title'>our services</h1>
      </div>
      <div className='services'>
        <article className='service'>
          <div className='img-container'>
            <img src={img1} alt='service1' />
            <span className='icon'>
              <FaMortarPestle className='i' />
            </span>
          </div>
          <h3 className='name'>home delivry</h3>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            sit.
          </p>
          <button className='btn'>read more</button>
        </article>
        <article className='service'>
          <div className='img-container'>
            <img src={img2} alt='service2' />
            <span className='icon'>
              <GiFamilyHouse className='i' />
            </span>
          </div>
          <h3 className='name'>Custom Recipes</h3>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            sit.
          </p>
          <button className='btn'>read more</button>
        </article>
        <article className='service'>
          <div className='img-container'>
            <img src={img3} alt='service3' />
            <span className='icon'>
              <IoMdCafe className='i' />
            </span>
          </div>
          <h3 className='name'>Tea Aging</h3>
          <p className='text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
            sit.
          </p>
          <button className='btn'>read more</button>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  .title {
    color: var(--mainDark);
    text-transform: Capitalize;
    margin-bottom: 2rem;
  }

  .services {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .service {
    background: var(--clr-grey-10);
    padding-bottom: 3rem;
    border-radius: 10px;
    cursor: pointer;
        box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
      transition: var(--mainTransition);

        
  }
  img {
    height: 17rem;
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
  }
  .img-container{
      position: relative;
  }
  .icon {
    position: absolute;  
    bottom: 0; 
    left:50%;
    font-size: 3rem;
    color: var(--primaryColor);
    background: var(--clr-primary-light);
    padding: 0.5rem;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: 0.375rem solid var(--clr-grey-10);
   font-size:2rem;

}
.i{
    text-align: center;
    width: 1.25em;
   

    }
  }
  .name {
      margin-top: 3rem;
    color: var(--mainDark);
    text-transform: Capitalize;
    letter-spacing: 0.5rem;
    padding: 1rem;
  }
  .text {
    max-width: 26rem;
    margin-bottom: 1.25rem;
  }

  .btn {
    border-radius: 10px;
    padding: 10px;
  }

  .service:hover {
   transform: scale(1.03);
   box-shadow: 0 5px 15px rgb(0 0 0 / 10%);


  }

  }
`

export default Services
