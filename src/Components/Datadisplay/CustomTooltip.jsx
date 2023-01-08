import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function CustomTooltip() {
    return (
        <>
            <h1>Tooltip</h1>
            <h3>Basic</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <h3>Button hover</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Tooltip title="Button">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                </Tooltip>
            </Box>
        </>
    );
}
export default CustomTooltip