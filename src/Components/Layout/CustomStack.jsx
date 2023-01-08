import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, Divider } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CustomStack() {
    return (
        <>
            <h1>Stack</h1>
            <h3>Basic Stack:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>

            <h3>Direction Row:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={5} direction='row'>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                    <Item>Item 5</Item>
                </Stack>
            </Box>
            <h3>Direction Column:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={5} direction='column'>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                    <Item>Item 5</Item>
                </Stack>
            </Box>

            <h3>Divider:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                    <Item>Item 5</Item>
                </Stack>
            </Box>

            <h3>Responsive:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 4</Item>
                    <Item>Item 5</Item>
                </Stack>
            </Box>

            <h3>Interactive:</h3>
            <Box sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                </Stack>
            </Box>
        </>
    );
}
export default CustomStack;