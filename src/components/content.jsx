import React from "react";
import {
    Box,
    Button,
    Link,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouteLink } from "react-router-dom";

export default function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                maxWidth: 980,
                mx: "auto",
                px: { xs: 1, sm: 3, md: 5 },
                py: { xs: 4, md: 6 },
            }}
        >
            <Stack spacing={4}>
                <Box>
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: "0.18em",
                            color: "text.secondary",
                            fontWeight: 700,
                        }}
                    >
                        Software Engineer • User-Facing Systems • Scalable
                        Product Platforms
                    </Typography>

                    <Typography
                        variant={isMobile ? "h3" : "h2"}
                        sx={{
                            mt: 1.5,
                            fontWeight: 800,
                            lineHeight: 1.08,
                            maxWidth: 760,
                        }}
                    >
                        Hi, I’m Adina.
                    </Typography>

                    <Typography
                        variant={isMobile ? "h5" : "h4"}
                        sx={{
                            mt: 1.5,
                            fontWeight: 500,
                            lineHeight: 1.25,
                            color: "text.secondary",
                            maxWidth: 820,
                        }}
                    >
                        I build the systems behind product decisions.
                    </Typography>
                </Box>

                <Typography
                    variant="body1"
                    sx={{ fontSize: "1.08rem", lineHeight: 1.9 }}
                >
                    Most of my work sits at the intersection of UX,
                    experimentation, and infrastructure — where a small change
                    in behavior can drive measurable impact.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: "1.08rem", lineHeight: 1.9 }}
                >
                    At Bloomberg, I’ve built and scaled subscription platforms
                    that power dynamic paywalls across web and mobile, enable
                    rapid experimentation and audience targeting, and directly
                    impact conversion, engagement, and revenue.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: "1.08rem", lineHeight: 1.9 }}
                >
                    I’m especially interested in systems that are configurable
                    instead of hardcoded, experiment-driven instead of
                    opinion-driven, and simple to use but powerful under the
                    hood.
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ fontSize: "1.08rem", lineHeight: 1.9 }}
                >
                    Lately, I’ve also been exploring how AI can augment both
                    user experiences and developer workflows.
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ pt: 1 }}
                >
                    <Button
                        component={RouteLink}
                        to="/resume"
                        variant="contained"
                        size="large"
                        startIcon={<ArticleIcon />}
                        sx={{
                            px: 3,
                            py: 1.2,
                            textTransform: "none",
                            fontWeight: 700,
                            borderRadius: 999,
                        }}
                    >
                        Resume
                    </Button>

                    <Button
                        component={Link}
                        href="https://www.linkedin.com/in/adinutzyc21"
                        target="_blank"
                        rel="noreferrer"
                        variant="text"
                        size="large"
                        startIcon={<LinkedInIcon />}
                        sx={{
                            px: 3,
                            py: 1.2,
                            textTransform: "none",
                            fontWeight: 700,
                            borderRadius: 999,
                        }}
                    >
                        LinkedIn →
                    </Button>

                    <Button
                        component={Link}
                        href="https://github.com/adinutzyc21"
                        target="_blank"
                        rel="noreferrer"
                        variant="text"
                        size="large"
                        startIcon={<GitHubIcon />}
                        sx={{
                            px: 2,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "text.secondary",
                        }}
                    >
                        GitHub →
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}
