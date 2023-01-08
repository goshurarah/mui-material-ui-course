import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function CustomTypography() {
    return (
        <>
            <h1>Typography</h1>
            <Typography variant="h2" gutterBottom>
                Headings
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h1" gutterBottom>
                        h1. Heading
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        h2. Heading
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        h3. Heading
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        h4. Heading
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        h5. Heading
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        h6. Heading
                    </Typography>
                </Box>
            </Box>

            <Typography variant="h2" gutterBottom>
                Subtitle-1
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
            </Box>

            <Typography variant="h2" gutterBottom>
                Subtitle-2
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
            </Box>

            <Typography variant="h2" gutterBottom>
                Body-1
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
            </Box>

            <Typography variant="h2" gutterBottom>
                Body-2
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
            </Box>

            <Typography variant="h2" gutterBottom>
                Typography Buttons
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >

                <Typography variant="button" display="block" gutterBottom sx={{bgcolor:'blue', border:'1px solid white', borderRadius:'0.5rem'}}>
                    button text
                </Typography>
                <Typography variant="caption" display="block" gutterBottom sx={{bgcolor:'yellow', border:'1px solid white', borderRadius:'0.5rem'}}>
                    caption text
                </Typography>
                <Typography variant="overline" display="block" gutterBottom sx={{bgcolor:'grey', border:'1px solid white', borderRadius:'0.5rem'}}>
                    overline text
                </Typography>
            </Box>
        </>
    );
}
export default CustomTypography