/* INCLUDES
1. form with action="/logs"and method="POST"
2. input type text for a title
3. input type textarea for an entry
4. input type checkbox for shipIsBroken
5. input type submit */

import React from 'react';

function New() {
    return (
        <div>
            <title>New View</title>
            <body style={{backgroundColor: 'gray', textAlign: 'center'}}>
                <h1>New Log</h1>
            <form action="/logs" method="POST">
                <input type="text" name="title" placeholder="Title" />
                <br/>
                <textarea name="entry" placeholder="Entry" />
                <br/>
                <input type="checkbox" name="shipIsBroken" />
                <br/>
                <input type="submit" value="Submit" />
            </form>
            <br /><br />
            <img src="https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/img/ISS-2011.png" />
            </body>
        </div>
    )
}

//image source: https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/

export default New;