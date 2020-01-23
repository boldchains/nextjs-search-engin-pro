import React, { Component } from 'react';
import Head from 'next/head';

import Navbar from '../Navbar/Navbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Search Vavel</title>
                </Head>
                <Navbar/>
                { this.props.children }
            </div>
        );
    };
};

export default Layout;