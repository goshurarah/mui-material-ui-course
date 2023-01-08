import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function CustomBox() {
    return (
        <>
            <h1>Box:</h1>
            <Box sx={{
                textAlign: 'center',
                margin: "auto",
                width: '50%',
                height: '20rem',
                bgcolor: 'success.main',
                '&:hover': {
                    backgroundColor: 'warning.main',
                    opacity: [0.9, 0.8, 0.7],
                }
            }}
            >
                <h1>This is Box!</h1>
            </Box>

            <h3>Size:</h3>
            <Box sx={{ p: 1, border: '1px dashed purple', display: 'inline' }}>
                <Button>Save</Button>
            </Box>
        </>
    );
}
export default CustomBox;