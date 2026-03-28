import React from "react";

import { Typography, Box, Button, Stack, Link } from "@mui/material";
export default function ResumeContent() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                maxWidth: 980,
                mx: "auto",
                px: { xs: 1, sm: 3, md: 5 },
                py: { xs: 4, md: 6 },
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                sx={{ mb: 2, maxWidth: 980, mx: "auto" }}
            >
                <Button
                    variant="contained"
                    component={Link}
                    href="https://drive.google.com/file/d/1_Q2HuxzGlVr12RFY9a7thgpZk1jMePTB/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    View PDF →
                </Button>
                <Button
                    variant="outlined"
                    component={Link}
                    href="https://docs.google.com/document/d/1ttBr2cXKuSrYuXwSQ9YKx6RKnwYzuDIvPDU15pxvhXw/edit?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                >
                    Open in Google Drive →
                </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary">
                Embedded preview below
            </Typography>
            <iframe
                title="Resume"
                src="https://drive.google.com/file/d/1_Q2HuxzGlVr12RFY9a7thgpZk1jMePTB/preview"
                style={{ width: "100%", height: "700px" }}
                allow="autoplay"
            ></iframe>
        </Box>
    );
}
