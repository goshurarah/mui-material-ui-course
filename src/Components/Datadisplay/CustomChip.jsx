import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function CustomChip() {
    const handleClick = () => {
        return alert('You clicked the Chip.')
    };
    return (
        <>
            <h1>Chip</h1>
            <h3>Basic chip</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={1}>
                    <Chip label="Chip Filled" />
                    <Chip label="Chip Outlined" variant="outlined" />
                </Stack>
            </Box>

            <h3>Clickable</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={1}>
                    <Chip label="Clickable" onClick={handleClick} />
                    <Chip label="Clickable" variant="outlined" onClick={handleClick} />
                </Stack>
            </Box>

            <h3>Clickable Link</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={1}>
                    <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
                    <Chip
                        target='_blank'
                        label="Facebook"
                        component="a"
                        href="https://www.facebook.com/"
                        variant="outlined"
                        clickable
                    />
                </Stack>
            </Box>

            <h3>Chips Color</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={1} alignItems="center">
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" />    
                        <Chip label="success" color="success" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" variant="outlined" />
                        <Chip label="success" color="success" variant="outlined" />
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
export default CustomChip;