import React from 'react';

function Paginator(props) {
    return (
        <ul>
            {
                props.prevUrl ? 
                    <li key="page_prev">
                        <a href={props.prevUrl}>
                            <i className="fas fa-chevron-left"></i>
                        </a>
                    </li> : 
                    null
            }

            {
                props.nextUrl ?
                    <li key="page_next">
                        <a href={props.nextUrl}>
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li> :
                    null
            }
        </ul>
    );
}

export default Paginator;