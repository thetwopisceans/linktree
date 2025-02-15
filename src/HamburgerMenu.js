// src/HamburgerMenu.js

import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, createTheme, ThemeProvider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Create a dark theme
const darkTheme = createTheme({
    palette: {
        type: 'dark',
    },
});

const HamburgerMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <ThemeProvider theme={darkTheme}>
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
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Contact" />
                        </ListItem>
                        {/* Add more items as needed */}
                    </List>
                </Drawer>
            </div>
        </ThemeProvider>
    );
};

export default HamburgerMenu;