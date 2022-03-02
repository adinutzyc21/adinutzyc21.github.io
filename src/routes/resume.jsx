import { Box, CssBaseline, Stack } from '@mui/material';
import { drawerWidth } from "../App";

import Sidebar from '../components/sidebar';
import ResumeContent from "../components/resumeContent";
import Footer from '../components/footer';

export default function Resume() {
    return (
        <Stack direction="column">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar drawerWidth={drawerWidth} selectedKey="resume" />
                <ResumeContent drawerWidth={drawerWidth} />
            </Box>
            <Footer />
        </Stack>
    );
}
