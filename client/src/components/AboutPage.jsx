import React from 'react';
import axios from 'axios';

import Layout from './Layout';

import { BASE_URL } from '../constants';

class AboutPage extends React.Component {
    state = {
        info : '',
        error : false
    }

    componentDidMount() {
        axios.get(`${BASE_URL}/api/about/`)
            .then(res => {
                this.setState({info : res.data.info})
            })
            .catch(err => {
                console.log(err);
                this.setState({error : true});
            })
    }

    render() {
        let content = null;
        if (this.state.error) {
            content = <h1 style={{color : 'red'}}>Не удалось загрузить информацию :(</h1>
        } else if (this.state.info) {
            content = (
                <div className="card" style={{marginTop : '20px'}}>
                    <div className="card-body">
                        <p className="card-text" dangerouslySetInnerHTML={{__html : this.state.info}}>
                        </p>
                    </div>
                </div>
            )
        }

        return <Layout content={content} />
    }
}

export default AboutPage;