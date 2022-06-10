import React from 'react'
import Category from './components/Category';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom'
import Search from './components/Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork/>
              MyRecipes
          </Logo>
        </Nav>
        <Search/>
        <Category/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  color: grey;
  font-size: 1.5rem;
  font-weight: 400;
`
const Nav = styled.div`
  padding : 4rem 0rem;
  display: flex;
  jsutify-content: center;
  align-items: center;
  
  svg{
    font-size: 2rem;
    color: grey;
  }
`

export default App;
