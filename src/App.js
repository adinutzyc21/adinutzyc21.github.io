import './App.css';
import { Box, CssBaseline } from '@mui/material';

import Sidebar from './components/sidebar';
import Content from './components/content';

export const drawerWidth = 240;
function App() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar drawerWidth={drawerWidth} selectedKey="about" />
            <Content drawerWidth={drawerWidth} />
        </Box>
    );
}

export default App;
