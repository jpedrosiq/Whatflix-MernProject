import React, {useEffect, useState, useRef} from 'react';
import {Typhography, Row, Button, Divider} from 'antd';
import {API_URL, API_KEY, IMAGE_URL } from '../../config';
import MainImage from './sections/main_image';
import GridCard from './sections/gridCard';

const {Title} = Typhography;

function LandingPage(props) {

    const [Movies, SetMovies] = useState([])
    const [CurrentPage, SetCurrentPage] = useState(0)
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint);
    }, []);

    const fetchMovies = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                SetMovies(response.results)
                SetCurrentPage(response).page
            })
    }

    const handleClick = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

    return (
        <div style={{ width:'100%', margin: 0 }}>

            {Movies[0] &&
            <MainImage 
            image={`${IMAGE_URL}/w1280${Movies[0].backdrop_path}`} 
            title={Movies[0].original_title}
             text={Movies[0].overview}/>
            
            }
           
            <div style={{width: '85%', margin:'1rem auto'}}>
                <title level={2}>Movies by latest</title>
                <hr/>

                <Row gutter={[16,16]}>
                    {Movies && Movies.map((movie, index) => {
                        <React.Fragment key={index}>
                            <GridCard 
                            image={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                            MovieId={movie.id}
                            />
                        </React.Fragment>
                    })}
                </Row>

                <br/>
                <div style={{display: 'flex', justifyContent:'center '}}>
                    <button onClick={handleClick}>Load More</button>

                </div>
            </div>

        </div>
    )
}
