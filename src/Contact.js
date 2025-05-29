import React, { useState, useMemo } from 'react';
import { Document, Page } from 'react-pdf';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { useElementSize } from '@custom-react-hooks/use-element-size';

import minMediaKit from './data/thetwopisceans-media-kit-min.pdf'

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

const ContactPage = () => {
    const classes = useStyles();
    const [numPages, setNumPages] = useState(null);
    const [pageWidth, setPageWidth] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const [ref, { width: wrapperWidth, height: wrapperHeight }] = useElementSize();

    const fitHorizontal = useMemo(() => {
        const wRatio = pageWidth / wrapperWidth;
        const hRatio = pageHeight / wrapperHeight;
        if (wRatio < hRatio) {
            return false;
        }
        return true;
    }, [pageHeight, pageWidth, wrapperWidth, wrapperHeight]);


    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    function removeTextLayerOffset(page) {
        setPageWidth(page.width);
        setPageHeight(page.height);
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
        textLayers.forEach(layer => {
            layer.remove()
        });

        const annotationLayers = document.querySelectorAll(".react-pdf__Page__annotations");
        annotationLayers.forEach(layer => {
            layer.remove()
        });
    }

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
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={window?.innerWidth} height={window?.innerHeight} pageIndex={0} renderAnnotationLayer={false} renderTextLayer={false} />
                    ))}
                </Document>
            </div>
        </Box>
    );
};
export default ContactPage;