import React, { Component } from 'react';
import Layout from 'components/Layout/Layout.js';
import TypeFilterSection from "page-sections/home-sections/TypeFilterSection.js";

class Home extends Component {
    render() {
        return (
            <Layout>
                <TypeFilterSection/>
            </Layout>
        );
    };
};

export default Home;