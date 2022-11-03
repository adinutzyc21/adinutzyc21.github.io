import React from "react";
import { Box, Typography, Link /*, Stack*/ } from "@mui/material";
// import MyTimeline from './timeline';
// import OutlinedCard from './card';

export default function Content(props) {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                width: { sm: `calc(100% - ${props.drawerWidth}px)` },
            }}
        >
            <Typography variant="h2" component="div" gutterBottom>
                Adina Raluca Stoica
            </Typography>
            <Typography paragraph>
                Welcome to my website! I am a full-stack software engineer with
                an interest in front-end development and improving user
                experience. You might be interested in my{" "}
                <Link
                    href="https://drive.google.com/file/d/1-yBduZ8VU4Gxjpgi1DWN6U5bQ0uqPEsR/view?usp=sharing"
                    rel="noopener noreferrer"
                    target="_blank"
                    underline="none"
                >
                    Resume
                </Link>
                , and you can also check out my{" "}
                <Link
                    href="https://www.linkedin.com/in/adinutzyc21/"
                    rel="noopener noreferrer"
                    target="_blank"
                    underline="none"
                >
                    LinkedIn
                </Link>
                .
            </Typography>
            <Typography paragraph>
                Since June 2017, I have been a{" "}
                <b>Senior Software Engineer at Bloomberg LP</b> in New York
                City. I am currently in the <b>Recruiting Technology</b> team,
                where I am working on a CRM solution for technical recruiters to
                improve the sorcing of Bloomberg prospects. The solution
                integrates core Bloomberg Terminal functionality with various
                career websites through a Chrome extension written in React.{" "}
                <br />
                Before this, I was in two teams in the{" "}
                <b>Asset Investment Management</b> organization, first on a team
                working on a blotter for post trade, and later on a team working
                on a key settings screen.
            </Typography>
            <Typography paragraph>
                Before Bloomberg, I was a{" "}
                <b>Software Engineer at Cerner Corporation</b> in Kansas City,
                MO. One of my main projects there was a Mass Vaccination
                solution for streamlining vaccine administration, which has been
                more recently used by Cerner client hospitals across the world
                to improve COVID-19 vaccine administration.
            </Typography>
            <Typography paragraph>
                I received my{" "}
                <b>
                    Master's Degree in Computer Science from Washington
                    University in St Louis{" "}
                </b>{" "}
                (Wash U) in August 2014. Between August 2011 and August 2014, I
                conducted research in computer vision at Wash U.
            </Typography>
            <Typography paragraph>
                I spent the Summer 2014 semester in Boston, interning at
                Mitsubishi Electric Research Laboratories (MERL). There, I
                worked in the Spatial Analysis group, on an indoor 3D
                reconstruction algorithm using images and 3D models.
            </Typography>
            <Typography paragraph>
                I received my{" "}
                <b>Bachelor's Degree in Computer Science from Bard College</b>{" "}
                in May 2011. At Bard, I was involved in the research activities
                of the Bard Laboratory for Algebraic and Symbolic Computation. I
                also took part, for a semester, in the Bard Globalization and
                International Affairs Program in New York City (BGIA). As part
                of the program, I was a Web Communication Intern at Human Rights
                First.
            </Typography>
            <Typography paragraph>
                During the summers of my freshman, sophomore and junior years at
                Bard, I participated in various Research Experience For
                Undergraduates (REU) programs. The first two summers I was at
                the University of Houston, performing research on thermal
                imaging for stress recognition. The last summer I went to
                Clemson University, where I performed research on distance
                estimation in virtual environments.
            </Typography>
            {/* <Typography paragraph>
                You can read more about my research and in the Projects section of this website.
            </Typography>
            <Stack direction="row" spacing={2}>
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
                <OutlinedCard />
            </Stack>
            <MyTimeline /> */}
        </Box>
    );
}
