import React from 'react'
import { Descriptions, Badge } from 'antd';
import "./movieinfo.css";

function MovieInfo(props) {

    const { movie } = props;

    return (
        <div className="movie-detail">
            <div className="movie-title">Movie info</div>
            <Descriptions className="description-content" bordered>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Title: </div> &nbsp; {movie.original_title}</Descriptions.Item>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Release date: </div> &nbsp; {movie.release_date}</Descriptions.Item>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Revenue: </div> &nbsp; ${movie.revenue}</Descriptions.Item>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Runtime: </div> &nbsp; {movie.runtime} min</Descriptions.Item>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Status: </div> &nbsp; {movie.status}</Descriptions.Item>
                <Descriptions.Item className="description-item"> <div className="description-item-title">Popularity: </div> &nbsp; {movie.popularity}</Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default MovieInfo