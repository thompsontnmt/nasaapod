import React from 'react';
import { Link } from 'react-router-dom';




export default function Home() {
    return (
         /* jshint ignore:start */
         <div className="home">
            <Link className="home-link" to='/nasaphoto'>View NASA's Photo of the Day!</Link>
        </div>

         /* jshint ignore:end */

    );
}