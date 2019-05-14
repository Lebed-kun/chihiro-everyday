import React from 'react';

function Layout(props) {
    return (
        <div className="Layout">
            <header>
                {props.searchBar}
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