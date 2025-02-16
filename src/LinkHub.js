import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid, Link, IconButton } from '@material-ui/core';
import { TypeAnimation } from 'react-type-animation';

import ExtraContent from './ExtraContent';
import HamburgerMenu from './HamburgerMenu';

import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import profilePic from './images/me.jpeg'
import travelBg from './images/travel-dark-bg-1.jpg'
import logo from './images/logo.png'; // Add your logo image here

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#121212',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${travelBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundBlendMode: 'luminosity',
        backgroundAttachment: 'fixed',
        fontFamily: 'Roboto, sans-serif',
    },
    profilePic: {
        borderRadius: '50%',
        width: "12vw",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
    welcomeText: {
        color: '#ff4081',
        fontSize: 'calc(1.5vw + 1em)', // Responsive font size
        animation: '$pulse 3s infinite',
    },
    description: {
        marginBottom: theme.spacing(1),
        maxWidth: '600px',
        textAlign: 'center',
        backgroundColor: 'rgba(30, 30, 30, 0.5)',
        borderRadius: '10px',
        border: '1px solid #ff4081',
        padding: theme.spacing(2),
        fontSize: 'calc(1.5vw + 0.3em)', // Responsive font size
    },
    linkGrid: {
        width: '80%',
        justifyContent: 'center',
    },
    linkButton: {
        borderRadius: '10px',
        border: '0.5px solid #ff4081',
        width: '90%',
        height: "8vh",
        backgroundColor: '#333333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1),
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: '#444444',
            borderColor: '#ff4081',
            boxShadow: '0 0 10px #ff4081, 0 0 20px #ff4081, 0 0 30px #ff4081',
        },
    },
    socialIcons: {
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: theme.spacing(28),
        marginTop: theme.spacing(4),
    },
    logo: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
        width: '100px',
        height: '50px', // Adjust size as needed
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'scale(1)',
            opacity: 0.8,
        },
        '50%': {
            transform: 'scale(1.1)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1)',
            opacity: 0.8,
        },
    },
}));

const LinkHub = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <HamburgerMenu />
            <img className={classes.profilePic} src={profilePic} alt="The Two Piscean's profile pic" />
            <img src={logo} alt="Logo" width={150} style={{ margin: 10 }} />
            {/* <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Welcome to THETWOPISCEANS!',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    // 'For Travel Tips!',
                    // 1000,
                    // 'For Travel Ideas!',
                    // 1000,
                    // 'For Much More!',
                    // 1000
                ]}
                wrapper="span"
                speed={20}
                style={{ fontSize: '2em', display: 'inline-block', color: '#ff4081' }}
                repeat={Infinity}
            /> */}
            <Typography variant="body1" className={classes.description}>
                Your ultimate destination for hassle-free travel planning! We've curated a collection of our favorite travel resources for you.
            </Typography>
            <Grid container spacing={2} className={classes.linkGrid}>
                {[
                    { href: 'https://getyourguide.tp.st/O2gRPpzL', src: 'https://raw.githubusercontent.com/thetwopisceans/linktree/c68cb473d2de1454e1949e6ca44971d5c296921d/assets/gyg_logo.svg', new: true, width: '60vw', height: '60vw' },
                    { href: 'https://agoda.tp.st/ZEcYskb9', src: 'agoda_logo.svg' },
                    { href: 'https://airhelp.tp.st/sncV94At', src: 'airhelp_logo.svg' },
                    { href: 'https://cheapoair.tp.st/Q6g6Netc', src: 'cheapair_logo.svg' },
                    { href: 'https://eatwith.tp.st/raDQCBCG', src: 'eatwith_logo.svg' },
                    { href: 'https://tp.st/ilpIKfKX', src: 'expedia_logo.svg' },
                    { href: 'https://flixbus.tp.st/6E1lmANC', src: 'flixbus_logo.svg' },
                    { href: 'https://hilton.tp.st/KWkVv0JC', src: 'hilton_logo.svg' },
                    { href: 'https://hostelworld.tp.st/L5x6A2Ek', src: 'hostelworld_logo.svg' },
                    { href: 'https://klook.tp.st/u0w0SS5I', src: 'klook_logo.svg' },
                    { href: 'https://omio.tp.st/ahI2FmOI', src: 'omio_logo.svg' },
                    { href: 'https://oyohotels.tp.st/ols8vgQv', src: 'oyo_logo.svg' },
                    { href: 'https://trainline.tp.st/mSg75zME', src: 'trainline_logo.svg' },
                    { href: 'https://trip.tp.st/TSjcIaN6', src: 'trip_logo.svg' },
                    { href: 'https://viator.tp.st/7Ruv7XSN', src: 'viator_logo.svg' },
                ].map((link, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer" className={classes.linkButton}>
                            <img
                                src={link.new ? link.src : `https://raw.githubusercontent.com/thetwopisceans/linktree/073bc7c6cf89f713b8d2a79ac67248ff9070e6c7/assets/${link.src}`}
                                width={link.width ? link.width : "90vw"}
                                height={link.height ? link.height : "90vw"}
                                alt="Primary Logo"
                            />
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.socialIcons}>
                <IconButton color='inherit' component="a" href="https://www.instagram.com/thetwopisceans/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </IconButton>
                <IconButton color='inherit' component="a" href="https://t.me/thetwopisceans" target="_blank" rel="noopener noreferrer">
                    <TelegramIcon />
                </IconButton>
                <IconButton color='inherit' component="a" href="https://twitter.com/thetwopisceans" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </IconButton>
                <IconButton color='inherit' component="a" href="mailto:thetwopisceans@gmail.com">
                    <EmailIcon />
                </IconButton>
                <IconButton color='inherit' component="a" href="https://github.com/kurtesy" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </IconButton>
            </Box>
            {/* <ExtraContent /> */}
        </Box>
    );
};

export default LinkHub;