import React from 'react';
import { Link } from 'react-router-dom';

function Layout(props) {
    return (
        <div className="Layout">
            <ul className="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/contacts/">Contacts</Link>
                </li>
            </ul>

            <div className="content">
                {props.content}
            </div>
        </div>
    )
}

export default Layout;