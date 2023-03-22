import React from 'react';

function Show(props) {
    return (
        <div>
            <title>Show View</title>
            <body style={{backgroundColor: 'gray'}}>
                <h1>Entry Details</h1>
                <h2>Title: <br /> {props.log.title}</h2>
                <h2>Entry: <br />{props.log.entry}</h2>
                <br />
                <p>{props.log.date}</p>

                <strong><a href="/logs">Back</a></strong>
            </body>
        </div>
    )
}

export default Show;