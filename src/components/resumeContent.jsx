
import { Typography, Box, Link } from '@mui/material';
export default function ResumeContent(props) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.drawerWidth}px)` } }}
        >
            <Typography variant="h2" component="div" gutterBottom>
                Resume
            </Typography>
            <Typography paragraph>
                You can download the PDF version of my resume <Link href="http://adinastoica.com/extras/StoicaAdina_Resume.pdf" rel="noopener noreferrer" target="_blank" underline="none">here</Link>.
            </Typography>
            <iframe title="Resume" src="https://drive.google.com/file/d/1-yBduZ8VU4Gxjpgi1DWN6U5bQ0uqPEsR/preview" width="100%" height="700px" allow="autoplay"></iframe>
        </Box >
    );
}
