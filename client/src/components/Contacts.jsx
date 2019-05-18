import React from 'react';

import Layout from './Layout';

const data = [
    {
        icon : (<i className="fab fa-telegram" style={{fontSize : '12rem'}}
        title="Telegram"></i>),
        link : 'http://t.me/FelixArgyle11',
        color : '#007bff'
    },
    {
        icon : (<i className="far fa-envelope" style={{fontSize : '12rem'}}
        title="Email"></i>),
        link : 'mailto:lebed-kun@mail.ru',
        color : 'rgb(255, 57, 57)'
    }
];

function Contacts() {
    return (
        <Layout content={(
            <ul className="Contacts container">
                <div className="row">
                    <h1 className="col-md-12" 
                    style={{
                        textAlign : 'center',
                        marginTop : '2rem'
                    }}>
                        Контакты
                    </h1>
                </div>
                
                <div className="row">
                {
                    data.map((contact, id) => (
                        <li key={`contact_${id}`} className="col-md">
                            <a href={contact.link} style={{
                                color : contact.color
                            }}>
                                {contact.icon}
                            </a>
                        </li>
                    ))
                }
                </div>
            </ul>
        )} 
        footer={(
            <div>
                (C) Chihiro Byte 2019
            </div>
        )} />
    )
}

export default Contacts;