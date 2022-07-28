import React from 'react';

import { Link } from 'react-router-dom';
    /* jshint ignore:start */

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to ="/nasa-apod">Return to Home</Link>
            </ul>
        </div>
    );
}
    /* jshint ignore:end */
