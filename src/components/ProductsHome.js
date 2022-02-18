import React from 'react'
import styled from 'styled-components'
import img1 from '../images/product-1.jpeg'
import img2 from '../images/product-2.jpeg'
import img3 from '../images/product-3.jpeg'

function ProductsHome() {
  return (
    <Wrapper>
      <div className='section-center container '>
        <div className='products-info'>
          <h2 className='subtitle'>check out</h2>
          <h1 className='title'>our products</h1>
          <p className='text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In velit
            aspernatur sint molestias consequatur pariatur voluptatibus,
            perferendis odit magni saepe?
          </p>
          <button className='btn'>inventory</button>
        </div>
        <div className='products'>
          <article className='product'>
            <div className='img-container'>
              <img src={img1} alt='product1' />
            </div>
            <h3 className='product-name'>ginger peach tea</h3>
            <h4 className='product-price'>$6.99</h4>
          </article>
          <article className='product'>
            <div className='img-container'>
              <img src={img2} alt='product2' />
            </div>
            <h3 className='product-name'>fruits sangria</h3>
            <h4 className='product-price'>$6.99</h4>
          </article>
          <article className='product'>
            <div className='img-container'>
              <img src={img3} alt='product3' />
            </div>
            <h3 className='product-name'>white tea</h3>
            <h4 className='product-price'>$6.99</h4>
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  
  .container {
    padding-top: 6rem ;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1.5fr 3fr;
  }
  .title {
    color: var(--mainDark);
    text-transform: Capitalize;
    margin-bottom: 2rem;
  }

  .text{
    max-width: 26rem;
    margin-bottom: 1.25rem;
  }

 
  }
  .products {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    height: 17rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .product-name{
color:var(--mainDark);
text-transform: Capitalize;
letter-spacing: 0.2rem;
  }
  .product-price{
color:var(--primaryColor);
  }
`
export default ProductsHome
