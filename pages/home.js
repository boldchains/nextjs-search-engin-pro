import React from 'react';
import { Provider } from "react-redux";
import { store } from "services/store";
import Layout from 'components/Layout/Layout.js';
import TypeFilterSection from "page-sections/home-sections/TypeFilterSection.js";
import TotalSection from 'page-sections/home-sections/TotalSection';

const Home = () => {
    return (
        <Provider store={store}>
            <Layout>
                <TypeFilterSection/>
                <TotalSection />
            </Layout>
        </Provider>
    );
};

export default Home;