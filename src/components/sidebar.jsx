import * as React from 'react';
import { Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Link } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import InboxIcon from '@mui/icons-material/Inbox';
import ArticleIcon from '@mui/icons-material/Article';
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Link as RouteLink } from "react-router-dom";

import me from "../images/me.jpeg";

function Sidebar(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const avatarWidth = 200;

    const drawer = (
        <Stack sx={{ background: "#f2f3f7", height: "100%" }}>
            <Avatar alt="Adina Stoica" src={me}
                sx={{ width: `${avatarWidth}px`, height: `${avatarWidth}px`, ml: `${(props.drawerWidth - avatarWidth) / 2}px` }} />
            <List>
                <ListItem button key="about" selected={props.selectedKey === "about"} component={RouteLink} to="/about" >
                    <ListItemIcon>
                        <PersonOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="About Me" />
                </ListItem>
                <ListItem button key="resume" selected={props.selectedKey === "resume"} component={RouteLink} to="/resume">
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Resume" />
                </ListItem>
                {/* <ListItem button key="code" selected={props.selectedKey === "code"} component={RouteLink} to="/">
                    <ListItemIcon>
                        <DeveloperModeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Code" />
                </ListItem> */}
            </List>
            {/* <Divider />
            <List>
                {['Research', 'Projects', 'Personal', 'Course Highlights'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            <Divider />
            <List>
                <ListItem button key="code" component={Link} href="https://www.linkedin.com/in/adinutzyc21/" rel="noopener noreferrer" target="_blank" underline="none">
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                </ListItem>
                <ListItem button key="code" component={Link} href="https://github.com/adinutzyc21" rel="noopener noreferrer" target="_blank" underline="none">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItem>
            </List>
        </Stack>
    );

    return (
        <div>
            <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, display: { sm: 'none' } }}
            >
                <MenuIcon sx={{ width: "20px", justifyContent: "left" }} />
            </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="nav folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    );
}

export default Sidebar;
