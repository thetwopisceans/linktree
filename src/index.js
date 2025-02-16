import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LinkHub from './LinkHub';
import CountryTravelPlans from './CountryTravelPlans';
import AboutPage from './About';
import ContactPage from './Contact';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#121212',
        },
        text: {
            primary: '#ffffff',
        },
    },
    shadows: ['none', '0px 4px 6px rgba(0, 0, 0, 0.1)', '0px 8px 10px rgba(0, 0, 0, 0.15)'],
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h5: {
            color: '#ff9800', // Accent color for headings
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <HashRouter>
                <Routes>
                    <Route exact path="*" element={<LinkHub />} />
                    <Route path="/travelplans" element={<CountryTravelPlans />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/media-kit" element={<ContactPage />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);