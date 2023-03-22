import React from 'react';
import logsArray from '../models/logsArray';

function Index(props) {
    console.log(props.logs);
    return (
        <div>
            <title>Index View</title>
            <body style={{backgroundColor: "gray", textAlign: 'center', fontSize: '25pt'}}>
                <h1>Log Entries</h1>
                <ul style={{listStyle: 'none', textAlign: 'left', border: '5px solid black', padding: '20px'}}>
                    {props.logs.map((logs, index) => 
                        <li key={index}>
                            <a href={`/logs/${logs._id}`}><strong>{logs.title}<br />{logs.entry}</strong></a>
                            <br />
                            <label style={{fontSize: '15pt'}}><input type="checkbox" name="shipIsBroken"/>
                            Ship is Broken?
                            </label>
                        </li>
                    )}
                </ul>

                <a href="/logs/new">Add...</a>

                <br/><br />

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