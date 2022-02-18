import React from 'react'
import styled from 'styled-components'
import { IoMdCafe } from 'react-icons/io'
import { FaBomb } from 'react-icons/fa'
import { GiFamilyHouse, GiNightSleep } from 'react-icons/gi'

function SkillsHome() {
  return (
    <Wrapper>
      <article className='skill'>
        <IoMdCafe className='skill-icon' />
        <h3 className='skill-title'>made in US</h3>
        <p className='skill-info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </article>
      <article className='skill'>
        <FaBomb className='skill-icon' />
        <h3 className='skill-title'>Energy</h3>
        <p className='skill-info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </article>
      <article className='skill'>
        <GiFamilyHouse className='skill-icon' />
        <h3 className='skill-title'>family recipe</h3>
        <p className='skill-info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </article>
      <article className='skill'>
        <GiNightSleep className='skill-icon' />
        <h3 className='skill-title'>relaxation</h3>
        <p className='skill-info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--mainGrey);
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1200px) {
    ${'' /* display: grid; */}
    grid-template-columns: repeat(2, 1fr);
  }
  .skill {
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--mainTransition);
  }
  .skill-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
    margin-bottom: 1.5rem;
    transition: var(--mainTransition);
  }
  .skill-info {
    padding: 0 1rem;
  }

  .skill:hover {
    border-bottom: 1px solid var(--primaryColor);
    background-color: var(--mainWhite);

    .skill-icon {
      transform: translateY(-5px);
    }
  }
  .skill-title {
    color:var(--mainDark);
    font-size: 0.9rem;
    margin-bottom: 1rem;
    ${'' /* font-weight: bold; */}
    letter-spacing: 0.2rem;
    text-transform: Capitalize;
    transition: var(--mainTransition);
  }
`

export default SkillsHome
