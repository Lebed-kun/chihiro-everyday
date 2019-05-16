import React from 'react';

function Paginator(props) {
    return (
        <ul className="Paginator" style={{marginTop : '1rem'}}>
            {
                props.prevUrl ? 
                    <li key="page_prev" style={{float : 'left'}}>
                        <a href={props.prevUrl}>
                            Prev
                        </a>
                    </li> : 
                    null
            }

            {
                props.nextUrl ?
                    <li key="page_next" style={{float : 'right'}}>
                        <a href={props.nextUrl}>
                            Next
                        </a>
                    </li> :
                    null
            }
        </ul>
    );
}

export default Paginator;