import './App.css';
import { Box, CssBaseline, Stack } from '@mui/material';

import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';

export const drawerWidth = 240;
function App() {
    return (
        <Stack direction="column">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Sidebar drawerWidth={drawerWidth} selectedKey="about" />
                <Content drawerWidth={drawerWidth} />
            </Box>
            <Footer />
        </Stack>
    );
}

export default App;
