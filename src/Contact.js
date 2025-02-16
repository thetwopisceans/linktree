import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import minMediaKit from './data/full-profile-media-kit.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        textAlign: 'center',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
    },
    pdfContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

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
});

const ContactPage = () => {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    Media Kit
                </Typography>
                <Typography variant="body1">
                    Learn more about our mission and values by exploring our media kit.
                </Typography>
                <div className={classes.pdfContainer}>
                    <Document file={minMediaKit} onLoadSuccess={onDocumentLoadSuccess}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} onLoadSuccess={removeTextLayerOffset} />
                        ))}
                    </Document>
                </div>
            </Box>
        </ThemeProvider >
    );
};

function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
        layer.remove()
    });

    const annotationLayers = document.querySelectorAll(".react-pdf__Page__annotations");
    annotationLayers.forEach(layer => {
        layer.remove()
    });
}

export default ContactPage;