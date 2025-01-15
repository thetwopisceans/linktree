import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';

import berlin from './/images/berlin.jpg'
import poznan from './/images/poznan.jpg'
import milan from './/images/milan.jpg'

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
        boxShadow: theme.shadows[5],
        transition: 'transform 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[10],
        },
    },
    media: {
        height: 140,
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
                    {[
                        { title: 'Berlin', image: berlin, description: 'Explore the vibrant culture and history of Germany\'s capital.' },
                        { title: 'Poznań', image: poznan, description: 'Discover the charming streets and rich history of this Polish city.' },
                        { title: 'Milan', image: milan, description: 'Experience the fashion and design capital of Italy.' },
                        { title: 'Munich', image: milan, description: 'Enjoy the Bavarian culture and beautiful architecture.' },
                        { title: 'Warsaw', image: milan, description: 'Visit the bustling capital of Poland with its mix of modern and historical attractions.' }
                    ].map((trip, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className={classes.travelCard}>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    image={trip.image}
                                    title={trip.title}
                                    src={trip.image}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {trip.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {trip.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ExtraContent;