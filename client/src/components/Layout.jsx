import React from 'react';

import SearchBar from './SearchBar';

import '../css/Header.css';
import '../css/Content.css';

function Layout(props) {
    return (
        <div className="Layout">
            <header className="container-fluid"
            style={{background : 'black'}}>
                <div className="row">
                    <div className="col-md">
                        <SearchBar baseUrl="/?q=" />
                    </div>

                    <div className="col-md-8">
                        <ul className="navigation" style={{
                            display : 'flex',
                            justifyContent : 'flex-end'
                        }}>
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <a href="/contacts/">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div className="content container">
                {props.content}
            </div>

            <footer className="container">
                {props.footer}
            </footer>
        </div>
    )
}

export default Layout;