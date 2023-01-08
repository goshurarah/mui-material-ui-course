import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function CustomRating() {
    const [value, setValue] = React.useState(2);

    return (
        <>
            <h1>Rating</h1>
            <h3>Basic Rating</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">Controlled</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography component="legend">Disabled</Typography>
                    <Rating name="disabled" value={value} disabled />
                    <Typography component="legend">No rating given</Typography>
                    <Rating name="no-value" value={null} />
                </Box>
            </Box>

            <h3>Rating precision</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </Box>
        </>
    );
}
export default CustomRating