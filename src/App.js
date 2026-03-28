import React from "react";
import "./App.css";
import { Box, CssBaseline, Stack } from "@mui/material";

import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";

export const drawerWidth = 240;
function App() {
    return (
        <Stack direction="column">
            <Box
                sx={{
                    display: "flex",
                    minHeight: "100vh",
                    background:
                        "radial-gradient(circle at top right, rgba(25,118,210,0.06), transparent 35%), #fafafa",
                }}
            >
                <CssBaseline />
                <Sidebar drawerWidth={drawerWidth} selectedKey="about" />
                <Content drawerWidth={drawerWidth} />
            </Box>
            <Footer />
        </Stack>
    );
}

export default App;
