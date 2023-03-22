import React from 'react';
import logsArray from '../models/logsArray';

function Index() {
    // console.log(props.logs);
    return (
        <div>
            <title>Index View</title>
            <body style={{backgroundColor: "gray", textAlign: 'center', fontSize: '25pt'}}>
                <h1>Index</h1>
                <ul style={{listStyle: 'none'}}>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    {logsArray.map((logs, index) => 
                        <li key={index}>
                            <a href={`/logs/${logs._id}`}><strong>{logs.title}<br />{logs.entry}</strong></a>
                        </li>
                    )}
                </ul>

                <a href="/logs/new">Add...</a>

                <br/><br/><br/>

                <form action="/logs/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/logs/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </body>
        </div>
    )
}

export default Index;