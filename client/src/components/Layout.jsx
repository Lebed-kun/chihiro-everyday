import React from 'react';

import SearchBar from './SearchBar';

import '../css/Header.scss';
import '../css/Content.scss';

const MENU_ITEMS = [
    {
        href : '/',
        label : 'Главная'
    },
    {
        href : '/about/',
        label : 'Обо мне'
    },
    {
        href : '/contacts/',
        label : 'Контакты'
    }
];

function Layout(props) {
    const pathName = window.location.pathname;
    
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
                            {MENU_ITEMS.map((el, id) => (
                                <li key={id} className={el.href === pathName ? 'active' : ''}>
                                    <a href={el.href}>{el.label}</a>
                                </li>
                            ))}
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