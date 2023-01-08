import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function CustomPagination() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Pagination
            </Typography>
            <Typography variant="h3" gutterBottom>
                Basic Pagination
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2}>
                    <Pagination count={10} />
                    <Pagination count={10} color="primary" />
                    <Pagination count={10} color="secondary" />
                    <Pagination count={10} disabled />
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Outlined Pagination
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" />
                    <Pagination count={10} color="primary" variant="outlined" />
                    <Pagination count={10} color="secondary" variant="outlined" />
                    <Pagination count={10} disabled variant="outlined" />
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Rounded Paginaion
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2}>
                    <Pagination count={10} shape="rounded" variant="outlined" />
                    <Pagination count={10} shape="rounded" color="primary" variant="outlined" />
                    <Pagination count={10} shape="rounded" color="secondary" variant="outlined" />
                    <Pagination count={10} shape="rounded" disabled variant="outlined" />
                </Stack>
            </Box>
        </>
    );
}
export default CustomPagination