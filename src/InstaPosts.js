import React, { useEffect } from 'react';
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
        boxShadow: theme.shadows[5],
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

    // List of Instagram post URLs
    const instagramUrls = [
        'https://www.instagram.com/thetwopisceans/p/DE1j4FCiNa7/', // Replace with actual Instagram post URLs
        'https://www.instagram.com/p/YYYYYYYYY/',
        'https://www.instagram.com/p/ZZZZZZZZZ/',
    ];

    return (
        <ThemeProvider theme={darkTheme}>
            <Box className={classes.root}>
                <Typography variant="h5" gutterBottom>
                    Instagram Posts
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