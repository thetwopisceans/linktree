import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InstagramPosts from './InstaPosts';
import { countryToAlpha2 } from "country-to-iso";
import uniqueLocData from './data/unique_locations_linktree.json';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.primary,
    },
    cityCard: {
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
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    fullWidthCollapse: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
}));

const CountryTravelPlans = () => {
    const classes = useStyles();
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const queryParams = new URLSearchParams(location.search);
    const country = queryParams.get('title');
    const countryCode = countryToAlpha2(country).toLowerCase()


    const countryData = uniqueLocData.find((loc) => loc.title.toLowerCase() === country.toLowerCase());

    if (!countryData) {
        return <Typography variant="h6">Country not found</Typography>;
    }

    return (
        <Box className={classes.root}>
            <Typography color='secondary' variant="h4" gutterBottom>
                Travel Plans for {countryData.title}
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {countryData.cities.map((city, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={classes.cityCard}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                title={city.title}
                                src={`https://flagcdn.com/${countryCode}.svg`}
                            />
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {city.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {city.description}
                                </Typography>
                                <IconButton
                                    className={`${classes.expand} ${expandedIndex === index ? classes.expandOpen : ''}`}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={expandedIndex === index}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {expandedIndex !== null && (
                <Collapse in={expandedIndex !== null} timeout="auto" unmountOnExit className={classes.fullWidthCollapse}>
                    <InstagramPosts />
                </Collapse>
            )}
        </Box>
    );
};

export default CountryTravelPlans;