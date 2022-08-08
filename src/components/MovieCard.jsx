import React from 'react'
import styled from 'styled-components'

const MovieCard = ({ movie, handleOpenMovie }) => {



  return (
    <Card onClick={() => handleOpenMovie(movie.imdbID)}>
      <div className="image">
        <img className='poster' src={movie.Poster != 'N/A' ? movie.Poster
          : "https://s3-ap-southeast-1.amazonaws.com/popcornsg/placeholder-movieimage.png"} alt={movie.Title} />
        <h3 className='year'>{movie.Year}</h3>
        <p className='type' style={{ backgroundColor: movie.Type == 'movie' ? 'green' : 'red' }}>
          {movie.Type}</p>
      </div>

      <h2 className='title'>{movie.Title}</h2>

    </Card>
  )
}

export default MovieCard


const Card = styled.div`
  width: 200px;
  
  background: #000000;
  color: white;
  position: relative;
  overflow: hidden;
  border-radius: 1.4rem;
  border: 3px solid #ffffff30;
  padding-bottom: 1rem;
  transition: all ease-in 200ms;

  &:hover{
    box-shadow: 0 20px 15px #000;
    border: 3px solid #ffffff70;
    transform: translateY(-20px) scale(1.1);
    }
    .image {
      position: relative;
       .poster {
    width: 100%;
    height: 250px;
    object-fit: cover;

    &:hover{
      transform: scale(1.1);
    }
  }

  .type {
    padding: 0 1rem;
    padding-bottom: 2rem;
    position: absolute;
    bottom: 0px;
    right: 0px;
    text-transform: capitalize;
    padding: 4px 6px;
    transform: scale(.8);
  }
  .year {
    position: absolute;
    top: -10px;
    right: 5px;
    font-size: .8rem;
    padding: 0px 10px;
    border-radius: 5px;
    border: 3px solid green;
    background-color: #00000063;
  }
    }
 

  .title {
    font-size: 1rem;
    padding: .5rem 1rem;
    border-top: 3px solid #ffffff30;

  }





`