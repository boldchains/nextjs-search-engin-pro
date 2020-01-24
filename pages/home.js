import React, { Component } from 'react';
import Layout from 'components/Layout/Layout.js';
import TypeFilterSection from "page-sections/home-sections/TypeFilterSection.js";
import TotalSection from 'page-sections/home-sections/TotalSection';

class Home extends Component {
    render() {
        return (
            <Layout>
                <TypeFilterSection/>
                <TotalSection/>
            </Layout>
        );
    };
};

export default Home;