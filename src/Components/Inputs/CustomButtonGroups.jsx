import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

function CustomButtonGroups() {
    return (
        <>
            <h1>Button Groups</h1>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >

                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>

            <h3>Button Variant</h3>
            <Box
                sx={{
                    bgcolor:"white",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>

            <h3>Sizes and colors</h3>
            <Box
                sx={{
                    bgcolor:"white",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="large button group">
                    {buttons}
                </ButtonGroup>
            </Box>
        </>
    );
}

export default CustomButtonGroups