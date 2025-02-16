import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import minMediaKit from './data/min-profile-media-kit.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    pdfContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

const AboutPage = () => {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };


    return (
        <Box className={classes.root}>
            <Typography variant="h4" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                Learn more about our mission and values by exploring our media kit.
            </Typography>
            <div className={classes.pdfContainer}>
                <Document file={minMediaKit} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page width={"1000"} key={`page_${index + 1}`} pageNumber={index + 1} onLoadSuccess={removeTextLayerOffset} />
                    ))}
                </Document>
            </div>
        </Box>
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

export default AboutPage;