import { useState, useEffect } from "react";
import styled from "styled-components";

import MovieCard from './components/MovieCard'
import Form from './components/Form'
import Movie from "./components/Movie";
import Loading from "./components/Loading";

const API_URL = 'https://moovieworld.netlify.app/http://www.omdbapi.com/?apikey=65c4e5d0'
// https://moovieworld.netlify.app/

//  https://cors-everywhere.herokuapp.com/http://myapi.com/v1/users


function App() {

  const [search, setSearch] = useState('');
const [movies, setMovies] = useState({});
const [movieData, setMovieData] = useState({});
const [loading, setLoading] = useState(true);
const [openMovieModal, setOpenMovieModal] = useState(false);
const [modalLoading, setModalLoading] = useState(false);
// 
  const fetchMovies = async(info) => {
    setLoading(true)
    const response = await fetch(`${API_URL}&${info}`)
    const data = await response.json()
    setLoading(false)

  setMovies(data.Search)
  console.log(data.Search)
}

const handleOpenMovie = async(id) => {
 setOpenMovieModal(true)
 setModalLoading(true)
  
 const response = await fetch(`${API_URL}&i=${id}`)
 
 const data = await response.json()
 setMovieData(data)
 setModalLoading(false)


}
const closeModal = () => {
  setOpenMovieModal(false)
  setMovieData({})
  console.log(modalLoading)
}



useEffect(() => {
  fetchMovies('s=superman')
}, [])



  return (
    <Container >
      <Form 
        search={search}
        setSearch={setSearch}
        fetchMovies={fetchMovies}
        loading={loading}
      />
     
     

      <CardList
      >
      {
        loading ? <Loading />:
        movies ? 
        movies.map(movie => (
          <MovieCard 
          key={movie.imdbID}
        handleOpenMovie={handleOpenMovie}

            movie={movie}/>
          )
        ) :
        <div>
          <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>No movie found</h1>
        </div>
        
      }
      </CardList>
      {modalLoading ? <Loading /> :
      <Movie closeModal={closeModal} openMovieModal={openMovieModal} movieData={movieData}/>}
      
    </Container>
  );
}

export default App;

const Container = styled.div`
background-color: #1E1E1E;
color: white;
padding-bottom: 3rem`


const CardList = styled.div`
margin: 3rem auto;
max-width: 1500px;
min-height: 70vh;

display: flex;
flex-wrap: wrap;
gap: 2rem;
justify-content: center;

.loading {
  background-color: red;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  position: absolute;
  top: 0;
}

`
