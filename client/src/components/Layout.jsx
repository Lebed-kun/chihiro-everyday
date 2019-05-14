import React from 'react';

import SearchBar from './SearchBar';

function Layout(props) {
    return (
        <div className="Layout">
            <header>
                <SearchBar baseUrl="/?q=" />

                <ul className="navigation">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/contacts/">Contacts</a>
                    </li>
                </ul>
            </header>

            <div className="content">
                {props.content}
            </div>

            <footer>
                {props.footer}
            </footer>
        </div>
    )
}

export default Layout;