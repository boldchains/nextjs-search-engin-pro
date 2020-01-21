import React, { Component } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Search Vavel</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/sandstone/bootstrap.min.css"/>
                </Head>
                <Navbar/>
                { this.props.children }
            </div>
        );
    };
};

export default Layout;