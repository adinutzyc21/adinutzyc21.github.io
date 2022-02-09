import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Sidebar from './components/sidebar';
import Content from './component/content';

function App() {
    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar />
            <Content />
        </Box>
    );
}

export default App;
