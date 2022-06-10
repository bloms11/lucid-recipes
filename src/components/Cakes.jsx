import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import { Wrapper, Card, Gradient } from './styled/Wrapper.styled';
import { Link } from 'react-router-dom';
const Cakes = () => {
  const [cakes, setCakes] = useState([])

  useEffect(() => {
      getCakes()
  },[]) 

  const getCakes = async () => {
      const check = localStorage.getItem('cakes');

      if (check){
          setCakes(JSON.parse(check))
      }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=cake`);
          const data = await api.json()
          localStorage.setItem("cakes", JSON.stringify(data.recipes))
          setCakes(data.recipes)

      }
  }


  return (
      <div>
        <Wrapper>
            <h3>Our Cake Recipes...</h3>
            <Splide options={{perPage: 3, pagination: false, drag: 'free', gap:"2rem", }}>
                {cakes.map((recipe) => {
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

export default Cakes;