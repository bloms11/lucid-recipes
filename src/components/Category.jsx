import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiMeat, GiChopsticks, GiTacos} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Category = () => {
  return (
    <List>
         <SLink to={'/cuisine/Italian'}>
             <FaPizzaSlice/>
             <h4>Italian</h4>
         </SLink>
         <SLink to={'/cuisine/American'}>
             <FaHamburger/>
             <h4>American</h4>
         </SLink>
         <SLink to={'/cuisine/Spanish'}>
             <GiMeat/>
             <h4>Spanish</h4>
         </SLink>
         <SLink to={'/cuisine/Japanese'}>
             <GiChopsticks/>
             <h4>Japanese</h4>
         </SLink>
         <SLink to={'/cuisine/Mexican'}>
             <GiTacos/>
             <h4>Mexican</h4>
         </SLink>

    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

    a{
        text-decoration: none
    }
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
        color: white;
        font-size: 0.8rem;
        letter-spacing: 0.5px;
        font-family: 'Montserrat', sans-serif;
        margin-top: 5%
    }
    svg{
        color: white;
        font-size: 1.5rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);

        svg{
            color: white;
        }
    }
`
export default Category