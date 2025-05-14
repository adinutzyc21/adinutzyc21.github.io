import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import { Fastfood, LaptopMac, Hotel, Repeat } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';

export default function MyTimeline(props) {
    return (<Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${props.drawerWidth}px)` } }}
    >
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
        <Typography paragraph>
            I received my <b>Master's Degree in Computer Science from Washington University in St Louis </b> (Wash U)
            in August 2014. Between August 2011 and August 2014, I conducted research in Computer Vision at Wash U.
        </Typography>
        <Typography paragraph>
            I spent the Summer 2014 semester in Boston, interning at Mitsubishi Electric Research Laboratories (MERL). There, I
            worked in the Spatial Analysis group, on an indoor 3D reconstruction algorithm using images and 3D models.
        </Typography>
        <Typography paragraph>
            I received my <b>Bachelor's Degree in Computer Science from Bard College</b> in May 2011. At Bard, I was involved in
            the research activities of the Bard Laboratory for Algebraic and Symbolic Computation. I also took part, for a
            semester, in the Bard Globalization and International Affairs Program in New York City (BGIA). As part of the program,
            I was a Web Communication Intern at Human Rights First.
        </Typography>
        <Typography paragraph>
            During the summers of my freshman, sophomore and junior years at Bard, I participated in various Research Experience
            For Undergraduates (REU) programs. The first two summers I was at the University of Houston, performing research on
            thermal imaging for stress recognition. The last summer I went to Clemson University, where I performed research on
            distance estimation in virtual environments.
        </Typography>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    9:30 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <Fastfood />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Eat
                    </Typography>
                    <Typography>Because you need strength</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    10:00 am
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMac />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Code
                    </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <Hotel />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Sleep
                    </Typography>
                    <Typography>Because you need rest</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot color="secondary">
                        <Repeat />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Repeat
                    </Typography>
                    <Typography>Because this is the life you love!</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </Box>
    );
}
