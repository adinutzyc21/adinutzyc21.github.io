import { Box, Typography, Link/*, Stack*/ } from '@mui/material';
// import MyTimeline from './timeline';
// import OutlinedCard from './card';

function Content(props) {
    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.drawerWidth}px)` } }}
        >
            <Typography variant="h2" component="div" gutterBottom>
                Adina Raluca Stoica
            </Typography>
            <Typography paragraph>
                Welcome to my website! I am a full-stack software engineer with an interest in front-end development and improving
                user experience. You might be interested in my {" "}
                <Link href="http://adinastoica.com/extras/StoicaAdina_Resume.pdf" rel="noopener noreferrer" target="_blank"
                    underline="none">Resume</Link>, and you can also check out my {" "}
                <Link href="https://www.linkedin.com/in/adinutzyc21/" rel="noopener noreferrer" target="_blank"
                    underline="none">LinkedIn</Link>.
            </Typography>
            <Typography paragraph>
                Since June 2017, I have been a <b>Senior Software Engineer at Bloomberg LP</b> in New York City.
                I am currently in the <b>Recruiting Technology</b> team, where I am working on a CRM solution for
                technical recruiters to improve the sorcing of Bloomberg prospects. The solution integrates core Bloomberg
                Terminal functionality with various career websites through a Chrome extension written in React. <br />
                Before this, I was in two teams in the <b>Asset Investment Management</b> organization, first on a team working
                on a blotter for post trade, and later on a team working on a key settings screen.
            </Typography>
            <Typography paragraph>
                Before Bloomberg, I was a <b>Software Engineer at Cerner Corporation</b> in Kansas City, MO. One of my main
                projects there was a Mass Vaccination solution for streamlining vaccine administration, which has been more recently
                used by Cerner client hospitals across the world to improve COVID-19 vaccine administration.
            </Typography>
            {/* <Stack direction="row" spacing={2}>
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
            </Stack>
            <MyTimeline /> */}
        </Box>
    );
}

export default Content;
