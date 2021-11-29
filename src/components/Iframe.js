import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Iframe = () => {
    const [content, setContent] = useState('<div>Loading....</div>');
    const token = localStorage.getItem('token');

    useEffect(() => {
        // axios({
        //     url: 'https://www.google.com',
        //     method: 'get',
        //     headers: {

        //     }
        // })
        // .then(res => {
        //     console.log(res.data);
        // })
        fetch(`https://localhost:8088/superset/welcome#${token}`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'X-custom-token': token,
                'Cache-Control': 'no-cache',
                'Content-Type': 'text/html',
            }
        })
        .then(response => response.text())
        .then(html => {
            console.log("🚀 ~ file: Iframe.js ~ line 18 ~ useEffect ~ html", html)
            setContent(html);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <iframe srcDoc={content} height="500" width="100%" title="Iframe Example" />
    )
}

export default Iframe; 
