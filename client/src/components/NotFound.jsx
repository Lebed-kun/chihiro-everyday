import React from 'react';

import Layout from './Layout';

function NotFoundPage() {
    return (
        <Layout content={(
            <div>
                <h1>
                    404 Страница не найдена&nbsp;
                    <i className="far fa-frown"></i>
                </h1>
            </div>
        )} />
    )
}

export default NotFoundPage;