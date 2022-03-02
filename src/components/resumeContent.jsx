
import { Typography, Box, Link } from '@mui/material';
export default function ResumeContent(props) {
    let resumeHeight = (window.innerHeight <= 700);

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.drawerWidth}px)` } }}
        >
            <Typography variant="h2" component="div" gutterBottom>
                Resume
            </Typography>
            <Typography paragraph>
                Below is an up-to-date PDF version of my resume.
                Alternatively, you can view it on and download it from Google Drive as a{" "}
                <Link href="https://drive.google.com/file/d/1-yBduZ8VU4Gxjpgi1DWN6U5bQ0uqPEsR/view?usp=sharing" rel="noopener noreferrer" target="_blank" underline="none">PDF</Link>
                {" "} or as a {" "} <Link href="https://docs.google.com/document/d/1-3t0KQSIWwOH8PAXfo9t-FovKuEXWS3x/edit?usp=sharing&ouid=111707461551079757727&rtpof=true&sd=true" rel="noopener noreferrer" target="_blank" underline="none">Word document</Link>.
            </Typography>
            <iframe title="Resume" src="https://drive.google.com/file/d/1-yBduZ8VU4Gxjpgi1DWN6U5bQ0uqPEsR/preview" style={{ width: "100%", height: "700px" }} allow="autoplay"></iframe>
        </Box >
    );
}
