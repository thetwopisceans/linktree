import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';

import { countryToAlpha2 } from "country-to-iso";

import uniqueLocData from './data/unique_locations_linktree.json'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.primary,
        transition: 'background-color 0.5s ease, color 0.5s ease',
    },
    travelContent: {
        marginTop: theme.spacing(5),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    travelCard: {
        maxWidth: 345,
        margin: theme.spacing(2),
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Softer shadow
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        backgroundColor: '#1e1e1e', // Card background
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)', // Enhanced shadow on hover
        },
    },
    travelLink: {
        textDecoration: 'none',
    },
    media: {
        height: 'auto',
        width: '70%',
        marginTop: '5%',
        justifySelf: 'center',
        filter: 'brightness(0.8)', // Darken images slightly
        transition: 'filter 0.3s ease, transform 0.3s ease', // Add transition for filter and transform
        '&:hover': {
            filter: 'brightness(1)', // Brighten image on hover
            transform: 'scale(1.2)', // Slightly scale up the image on hover
        },
    },
    cardTitle: {
        color: '#ff9800', // Accent color for titles
    },
    cardDescription: {
        color: '#b0bec5', // Subtle text color for descriptions
    },
}));

const ExtraContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.travelContent}>
                <Typography color='secondary' variant="h5" gutterBottom>
                    Our 2024 Travel Highlights
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {uniqueLocData.map((trip, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Link
                                to={`/travelplans?title=${encodeURIComponent(trip.title)}`}
                                className={classes.travelLink}
                            >
                                <Card className={classes.travelCard}>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        title={trip.title}
                                        src={`https://flagcdn.com/${countryToAlpha2(trip.title).toLowerCase()}.svg`}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="h2" className={classes.cardTitle}>
                                            {trip.title}
                                        </Typography>
                                        <Typography variant="body2" component="p" className={classes.cardDescription}>
                                            {trip.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ExtraContent;