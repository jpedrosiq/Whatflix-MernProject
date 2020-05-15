import React, {useEffect, useState, useRef} from 'react';
import {Typhography, Row } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../Config';
import MainImage from './sections/main_image';
import GridCards from './sections/gridCard';

// const { Title } = Typhography;

function LandingPage(props) {
    const buttonRef = useRef(null);
    const [Movies, SetMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, SetCurrentPage] = useState(0)
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetchMovies(endpoint);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    const fetchMovies = (path) => {
        fetch(path)
            .then(response => response.json())
            .then(response => {
                SetMovies([...Movies, ...response.results])
                setMainMovieImage(MainMovieImage || response.results[0])
                SetCurrentPage(response.page)
            })
    }

    const handleClick = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);
    }

    const loadMoreItems = () => {
        let endpoint = '';
        setLoading(true)
        console.log('CurrentPage', CurrentPage)
        endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovies(endpoint);

    }

    const handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight - 1 && (window.location.href === 'http://localhost:3000/#/browse' || window.location.href === 'https://whatflix-app.herokuapp.com/#/browse')) {
            // loadMoreItems()
            console.log('clicked')
            buttonRef.current.click();

        }
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {MainMovieImage &&
                <MainImage
                    image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
                    title={MainMovieImage.original_title}
                    text={MainMovieImage.overview}
                />

            }

            <div style={{ width: '85%', margin: '1rem auto' }}>

                <h1 level={2} style={{ color:"#86b3d3" }}> MOVIE CATALOG </h1>
                <hr />
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
                </Row>

                {Loading &&
                    <div>Loading...</div>}

                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div>

            </div>
        </div>
    )
}

export default LandingPage;