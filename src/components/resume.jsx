
import { Typography } from '@mui/material';
export default function Resume() {
    return (
        <div>
            <Typography paragraph>
                You can download the PDF version of my resume <a href="http://adinastoica.com/extras/StoicaAdina_Resume.pdf" rel="noopener noreferrer" target="_blank">here</a>.
            </Typography>
            <iframe title="Resume" src="http://docs.google.com/gview?url=http://adinastoica.com/extras/StoicaAdina_Resume.pdf&embedded=true" style={{ width: "100%", height: "700px" }} frameborder="0"></iframe>
        </div >
    );
}
