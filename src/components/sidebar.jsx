import * as React from 'react';
import { Avatar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
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
                {['About Me', 'Resume', 'Code'].map((text, index) => (
                    <ListItem button key={text} selected={index === 0}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Research', 'Projects', 'Personal', 'Course Highlights'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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
