import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinkHub from './LinkHub';
import CountryTravelPlans from './CountryTravelPlans';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="*" element={<LinkHub />} />
                <Route path="/travelplans" element={<CountryTravelPlans />} />
            </Routes>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));