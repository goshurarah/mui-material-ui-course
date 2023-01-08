import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlertTitle from '@mui/material/AlertTitle';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function CustomAlert() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Alert
            </Typography>
            <Typography variant="h3" gutterBottom>
                Basic alert
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">This is an error alert — check it out!</Alert>
                    <Alert severity="warning">This is a warning alert — check it out!</Alert>
                    <Alert severity="info">This is an info alert — check it out!</Alert>
                    <Alert severity="success">This is a success alert — check it out!</Alert>
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Alert with title
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Icons Alert
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        This is a success alert — check it out!
                    </Alert>
                    <Alert
                        iconMapping={{
                            success: <CheckCircleOutlineIcon fontSize="inherit" />,
                        }}
                    >
                        This is a success alert — check it out!
                    </Alert>
                    <Alert icon={false} severity="success">
                        This is a success alert — check it out!
                    </Alert>
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Variant
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="error">
                        This is an error alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="warning">
                        This is a warning alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="info">
                        This is an info alert — check it out!
                    </Alert>
                    <Alert variant="outlined" severity="success">
                        This is a success alert — check it out!
                    </Alert>
                </Stack>
            </Box>
        </>
    );
}
export default CustomAlert