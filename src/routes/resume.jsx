import { Box, CssBaseline } from '@mui/material';
import { drawerWidth } from "../App";

import Sidebar from '../components/sidebar';
import ResumeContent from "../components/resumeContent";

export default function Resume() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar drawerWidth={drawerWidth} selectedKey="resume" />
            <ResumeContent drawerWidth={drawerWidth} />
        </Box>
    );
}
