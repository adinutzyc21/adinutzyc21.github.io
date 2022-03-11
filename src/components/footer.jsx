import { Typography, Link, Paper } from '@mui/material';

export default function Footer() {
    return (
        <Paper style={{ color: "gray", position: "fixed", bottom: 0, width: "100%", zIndex: "9999", borderTop: "solid", height: "2rem" }} >
            <Typography variant="body2" color="textSecondary" align="center" style={{ lineHeight: "2rem" }}>
                {'Copyright © '}
                <Link color="inherit" href="/about">
                    Adina Raluca Stoica
                </Link>{' '}
                {new Date().getFullYear()}
                {'. All rights reserved.'}
            </Typography>
        </Paper>
    );
}