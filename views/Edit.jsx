/* INCLUDES
1. form with action="/logs"and method="POST"
2. input type text for a title
3. input type textarea for an entry
4. input type checkbox for shipIsBroken
5. input type submit */

import React from 'react';

function Edit() {
    return (
        <div>
            <title>Edit View</title>
            <body>
                <h1>Edit Logs</h1>
            {/* <form action={`/logs/${props.log.id}`} method="POST"> */}
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                <input type="text" name="title" placeholder="Title" />
                <textarea name="entry" placeholder="Entry" />
                <input type="checkbox" name="shipIsBroken" />
                <input type="submit" value="Submit" />
                {/* SUBMIT BUTTON */}
            </form>
            <br /><br />
            <img src="https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/img/ISS-2011.png" />
            </body>
        </div>
    )
}

export default Edit;

//image source: https://www.washingtonpost.com/wp-srv/special/national/nasa-iss/