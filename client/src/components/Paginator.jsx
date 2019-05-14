import React from 'react';

function Paginator(props) {
    return (
        <ul>
            {
                props.prevPage ? 
                    <li key="page_prev">
                        <a href={props.baseUrl + props.prevPage}>
                            <i className="fas fa-chevron-left"></i>
                        </a>
                    </li> : 
                    null
            }

            {
                props.nextPage ?
                    <li key="page_next">
                        <a href={props.baseUrl + props.nextPage}>
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li> :
                    null
            }
        </ul>
    );
}

export default Paginator;