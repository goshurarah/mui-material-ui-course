import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


function CustomProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <Typography variant="h2" gutterBottom>
                Progress
            </Typography>
            <Typography variant="h3" gutterBottom>
                Circular Progress
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Circular determinate
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack spacing={2} direction="row">
                    <CircularProgress variant="determinate" value={25} />
                    <CircularProgress variant="determinate" value={50} />
                    <CircularProgress variant="determinate" value={75} />
                    <CircularProgress variant="determinate" value={100} />
                    <CircularProgress variant="determinate" value={progress} />
                </Stack>
            </Box>

            <Typography variant="h3" gutterBottom>
                Linear determinate
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" />
                    <LinearProgress color="inherit" />
                </Stack>
            </Box>
        </>
    );
}
export default CustomProgress