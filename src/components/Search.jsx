import React, {useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const submitHandler= (e) => {
        e.preventDefault()
        navigate("/searched/" + input)
    }

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} value={input} type='text'/>
        </div>
    </FormStyle>
  )
}
const FormStyle = styled.form`
    margin: 0rem 20rem;

    div{
        position: relative;
        width: 100%;    
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 14px;
        padding: 1rem 3rem;
        border: none;
        border-radius: 7px;
        outline: none;
        letter-spacing: 0.5px;
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        color: white
    }
    svg{
        position: absolute;
        top: 50%;
        transform: translate(100%, -50%);
        left: 0%;
        color: white;
    }
`
export default Search