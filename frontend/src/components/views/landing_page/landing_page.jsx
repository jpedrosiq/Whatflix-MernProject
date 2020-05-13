import React, {useEffect, useState, useRef} from 'react';
import {Typhography, Row, Button, Divider} from 'antd';
import {API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';

const {Title} = Typhography;

function LandingPage(props) {
    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(response => {

        })
    });

    return (
        <div style={{ width:'100%', margin: 0 }}>
            <div style={{background:
                    `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),
            url('${props.image}'), #1c1c1c`,
                height: '500px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'}}>

            </div>
            <div style={{position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                <title style={{color: 'white'}} level={2}>Title</title>
                <p style={{color: 'white', fontSize= '1rem'}}>text</p>

            </div>

        </div>
    )
}
