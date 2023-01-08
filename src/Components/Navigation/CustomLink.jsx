import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function CustomLink() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Links
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Grid display="flex" direction="column">
                    <Link href="#">Simple Link</Link>
                    <Link href="#" color="inherit">Inherit color Link</Link>
                    <Link href="#" variant="body2">Variant Body-2 Link</Link>
                    <Link href="#" underline="none">Without Underline Links</Link>
                    <Link href="#" underline="hover">Hover Link</Link>
                    <Link href="#" underline="always">Always underlined Link</Link>
                </Grid>
            </Box>
        </>
    );
}
export default CustomLink