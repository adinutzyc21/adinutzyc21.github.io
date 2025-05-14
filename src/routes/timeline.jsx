import { Box, CssBaseline, Stack } from '@mui/material';
import { drawerWidth } from "../App";

import Sidebar from '../components/sidebar';
import MyTimeline from "../components/timelineComponent";
import Footer from '../components/footer';

export default function Resume() {
    return (
        <Stack direction="column">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar drawerWidth={drawerWidth} selectedKey="timeline" />
                <MyTimeline drawerWidth={drawerWidth} />
            </Box>
            <Footer />
        </Stack>
    );
}
