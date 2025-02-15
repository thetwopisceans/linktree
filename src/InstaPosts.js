import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { InstagramEmbed } from 'react-social-media-embed';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    embedContainer: {
        marginBottom: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: theme.shadows[3],
        },
    },
}));

const InstaEmbed = ({ url }) => {
    useEffect(() => {
        // Load the Instagram embed script
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, [url]);

    return (
        <div className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="12"></div>
    );
};

const InstagramPosts = () => {
    const classes = useStyles();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const title = queryParams.get('title');

    // List of Instagram post URLs
    const instagramUrls = [
        'https://www.instagram.com/thetwopisceans/p/DE1j4FCiNa7/', // Replace with actual Instagram post URLs
        'https://www.instagram.com/thetwopisceans/p/DE4_Qluiwim/',
        'https://www.instagram.com/p/ZZZZZZZZZ/',
    ];

    return (
        <ThemeProvider theme={darkTheme}>
            <Box className={classes.root}>
                <Typography variant="h5" gutterBottom>
                    Instagram Posts for {title}
                </Typography>
                {instagramUrls.map((url, index) => (
                    <Box key={index} className={classes.embedContainer}>
                        <InstagramEmbed
                            url={url}
                            width={320}
                        />
                    </Box>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default InstagramPosts;