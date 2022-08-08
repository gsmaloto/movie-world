import React from 'react'
import styled from 'styled-components'

const Form = (props) => {

  return (

   
    <Container>
      <div className="wrapper">
        <nav>
      <h1 onClick={()=> props.fetchMovies('s=superman')}>Movie World</h1>
        <div>
        <input 
        type="search" 
        placeholder="Search Movie"
        value={props.search}
        onChange={(e)=> {
          props.setSearch(e.target.value)
        }}
      />
      <button
        disabled = {props.loading ? true : false}
        onClick={()=>{props.fetchMovies(`s=${props.search}`)
        
        }}
      >Search</button>
        </div>
      </nav>
      </div>
      
        
        
    </Container>
  )
}

export default Form


const Container = styled.div`
  background-color: black;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  
nav {
  /* background-color: red; */
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    cursor: pointer;
    font-size: 2.5rem;
  }
  div{
    max-width: 550px;
    display: flex;
    padding: .6rem 1.5rem;

    input {
      background-color: #1E1E1E;
      color: white;
      border: 2px solid #ffffff65;
      font-size: 1.4rem;
      padding: 4px 7px;
      margin-right: 7px;
    }
    button {
      background-color: #008000;
      font-size: 1.4rem;
      color: white;
      padding: 8px 12px;
      cursor: pointer;
    }
}

  
  }
`