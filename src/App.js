import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Sidebar from './components/sidebar';
import Content from './components/content';

const drawerWidth = 240;
function App() {
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar drawerWidth={drawerWidth} />
            <Content drawerWidth={drawerWidth} />
        </Box>
    );
}

export default App;
