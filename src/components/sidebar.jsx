import * as React from "react";

import {
    Avatar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Link,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
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
            <Avatar
                alt="Adina Stoica"
                src={me}
                sx={{
                    width: `${avatarWidth}px`,
                    height: `${avatarWidth}px`,
                    ml: `${(props.drawerWidth - avatarWidth) / 2}px`,
                }}
            />

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        selected={props.selectedKey === "about"}
                        component={RouteLink}
                        to="/about"
                    >
                        <ListItemIcon>
                            <PersonOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="About Me" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        selected={props.selectedKey === "resume"}
                        component={RouteLink}
                        to="/resume"
                    >
                        <ListItemIcon>
                            <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Resume" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="https://www.linkedin.com/in/adinutzyc21/"
                        rel="noopener noreferrer"
                        target="_blank"
                        underline="none"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: 0,
                            }}
                        >
                            <ListItemIcon>
                                <LinkedInIcon />
                            </ListItemIcon>
                            <ListItemText primary="LinkedIn" />
                        </Box>

                        <OpenInNewIcon fontSize="small" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        href="https://github.com/adinutzyc21"
                        rel="noopener noreferrer"
                        target="_blank"
                        underline="none"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: 0,
                            }}
                        >
                            <ListItemIcon>
                                <GitHubIcon />
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </Box>

                        <OpenInNewIcon fontSize="small" />
                    </ListItemButton>
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
                sx={{ ml: 2, display: { sm: "none" } }}
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
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: props.drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: props.drawerWidth,
                        },
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
