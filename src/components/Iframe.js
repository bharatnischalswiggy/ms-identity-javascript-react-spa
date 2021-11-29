import React from 'react'

const Iframe = () => {
    const token = localStorage.getItem('token');
    return (
        <iframe src={`http://localhost:8088/superset/welcome#${token}`} height="500" width="100%" title="Iframe Example" />
    )
}

export default Iframe; 
