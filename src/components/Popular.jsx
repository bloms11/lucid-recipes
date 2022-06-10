import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Wrapper, Card, Gradient } from './styled/Wrapper.styled';

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    },[])

    const getPopular = async () => {
        const check = localStorage.getItem('popular');

        if (check){
            setPopular(JSON.parse(check))
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)

        }
    }

  return (
      <div>
        <Wrapper>
            <h3>Popular Picks...</h3>
            <Splide options={{perPage: 4, pagination: false, drag: 'free', gap:"2rem", }}>
                {popular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title}/>
                                    <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Wrapper> 
    </div>
  )
}



export default Popular; 