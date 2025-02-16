import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import logo from './images/logo.png';


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        backgroundColor: '#1c1c1c',
        color: '#ffffff',
        width: 250,
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        border: '1px solid #444',
        justifyContent: 'flex-start',
    },
    listItem: {
        '&:hover': {
            backgroundColor: '#333333', // Hover effect
        },
    },
    logo: {
        width: '80%', // Adjust size as needed
        margin: '0 auto', // Center the logo
        padding: theme.spacing(2), // Add some padding
    },
}));

const HamburgerMenu = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', path: '/' },
        { text: 'About Us!', path: '/about' },
        { text: 'Media Kit', path: '/media-kit' },
    ];

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                style={{ position: 'absolute', left: 10 }} // Align to the left
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                classes={{ paper: classes.drawerPaper }}
            >
                <img src={logo} alt="Logo" width={80} className={classes.logo} />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem
                            button
                            component={Link}
                            to={item.path}
                            onClick={toggleDrawer(false)}
                            className={classes.listItem}
                            key={index}
                        >
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default HamburgerMenu;