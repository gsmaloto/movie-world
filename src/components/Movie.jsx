import React from 'react'
import styled from 'styled-components'

const movie1 = {
    "Title": "Superman II",
    "Year": "1980",
    "Rated": "PG",
    "Released": "19 Jun 1981",
    "Runtime": "127 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Richard Lester, Richard Donner",
    "Writer": "Jerry Siegel, Joe Shuster, Mario Puzo",
    "Actors": "Gene Hackman, Christopher Reeve, Margot Kidder",
    "Plot": "Superman agrees to sacrifice his powers to start a relationship with Lois Lane, unaware that three Kryptonian criminals he inadvertently released are conquering Earth.",
    "Language": "English, French, Russian",
    "Country": "United States, United Kingdom, Canada",
    "Awards": "3 wins & 7 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "82%"
        },
        {
            "Source": "Metacritic",
            "Value": "83/100"
        }
    ],
    "Metascore": "83",
    "imdbRating": "6.8",
    "imdbVotes": "106,634",
    "imdbID": "tt0081573",
    "Type": "movie",
    "DVD": "01 May 2001",
    "BoxOffice": "$108,185,706",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}

const Movie = ({ movieData, closeModal, openMovieModal, modalLoading }) => {
    return (
        <Modal style={{ visibility: openMovieModal ? 'visible' : 'hidden' }}>
            <div className="modal"  >
                <h3 className="close" onClick={closeModal}>X</h3>
                
                <div className="left">
                    <img className='poster' src={movieData.Poster != 'N/A' ? movieData.Poster
                        : "https://s3-ap-southeast-1.amazonaws.com/popcornsg/placeholder-movieimage.png"} alt={movieData.Title} />
                </div>
            
                <div className="right">
                <h2 className='title'>{movieData.Title} ({movieData.Year})</h2>
                <div className='row-info'>
                    <span>Genre:</span>
                    <span className='genre'> {movieData.Genre}</span>
                </div>
                <div className='row-info'>
                    <span>Runtime:</span>
                    <span className='runtime'> {movieData.Runtime}</span>
                </div>
                <div className='row-info'>
                    <span>Date Released:</span>
                    <span className='released'> {movieData.Released}</span>
                </div>
                <div className='row-info'>
                    <span>Rated:</span>
                    <span className='rated'> {movieData.Rated}</span>
                </div>
                <div className='row-info'>
                    <span>Plot:</span>
                    <span className='plot'> {movieData.Plot}</span>
                </div>
                <div className='row-info'>
                    <span>Director:</span>
                    <span className='director'>{movieData.Director}</span>
                </div>
                <div className='row-info'>
                    <span>Writer:</span>
                    <span className='writer'> {movieData.Writer}</span>
                </div>
                <div className='row-info'>
                    <span>Actors: </span>
                    <span className='actors'>{movieData.Actors}</span>
                </div>
                <div className='row-info'>
                    <span>Language:</span>
                    <span className='language'>{movieData.Language}</span>
                </div>
                <div className='row-info'>
                    <span>Awards: </span>
                    <span className='awards'>{movieData.Awards}</span>
                </div>
                <div className='row-info'>
                    <span>Ratings</span>
                    {movieData.Ratings?.map(rating => {
                                            return (
                                                <div key={rating.Source}>
                                                    <span className='rating'>{rating.Source}</span>
                                                    <span>{rating.Value}</span>
                                                </div>
                                            )
                                        })}
                </div>
        
                    
                    <div className="other">
                        <div className="left">
                            <div className='row-info'>
                                <span>Metascore:</span>
                                <span className='metascore'>{movieData.Metascore}</span>
                            </div>
                            <div className='row-info'>
                                <span>Country: </span>
                                <span className='country'>{movieData.Country}</span>
                            </div>
                            <div className='row-info'>
                                <span>imdb Rating: </span>
                                <span className='iRating'>{movieData.imdbRating}</span>
                            </div>
                            <div className='row-info'>
                                <span>imdb Votes: </span>
                                <span className='iVotes'>{movieData.imdbVotes}</span>
                            </div>
                            <div className='row-info'>
                                <span>imdb ID: </span>
                                <span className='iId'>{movieData.imdbID}</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className='row-info'>
                                <span>Type:</span>
                                <span className='type'>{movieData.Type}</span>
                            </div>
                            <div className='row-info'>
                                <span>DVD: </span>
                                <span className='dvd'>{movieData.DVD}</span>
                            </div>
                            <div className='row-info'>
                                <span>Box Office: </span>
                                <span className='box-office'>{movieData.BoxOffice}</span>
                            </div>
                            <div className='row-info'>
                                <span>Production: </span>
                                <span className='production'>{movieData.Production}</span>
                            </div>
                            <div className='row-info'>
                                <span>Website:</span>
                                <span className='website'> {movieData.Website}</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </Modal>
    )
}

export default Movie

const Modal = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
right: 0;
background-color: #0000008d;
display: flex;
align-items: center;
justify-content: center;


.loading {
    display: flex;
    font-size: 4rem;
}
.modal{
    display: flex;
    background-color: black;
    /* height: 550px; */
    width: 80vw;
    position: relative;
    gap: 1rem;
    padding: 2rem 4rem;
border: 4px solid #ffffff2d;

    }
    

    .close {
        position: absolute;
        z-index: 1;
        top: 0;
        right: 20px;
        cursor: pointer;
    }
    .left {
        width: 600px;
        img{
            width: 100%;
            height: 500px;
            object-fit: contain;
            border: 3px solid #ffffffa4;
        }
    }
    .right {
        .title {
            font-size: 2rem;
            margin-top: 0;
            border-bottom: 5px solid #a3a3a3;
        }
        .row-info {
            margin: 3px 0;
            letter-spacing: 1px;
            line-height: 1.5rem;
            span:first-child {
                font-size: 1.1rem;
            }
            span:nth-child(2) {
                color: #b8b8b8;
            }
            &:nth-child(6) {
                color: #e9e9e9;
                border-top: 2px solid #fff;
                border-bottom: 2px solid #ffffff;
                padding: 5px 0;
            }
        }
        }

    .other {
        display: flex;
        gap: 10rem;
        border-top: 2px solid #fff;

        * {
            width: auto;
        }
    }



`