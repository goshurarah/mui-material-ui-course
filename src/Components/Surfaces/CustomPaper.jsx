import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

function CustomPaper() {
    return (
        <>
            <Typography variant="h2" gutterBottom>
                Paper
            </Typography>
            <Typography variant="h3" gutterBottom>
                Basic Paper
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={10} />
            </Box>

            <Typography variant="h3" gutterBottom>
                Variant
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper variant="outlined" />
                <Paper variant="outlined" square />
            </Box>

            <Typography variant="h3" gutterBottom>
                Elevation
            </Typography>
            <Grid container spacing={2}>
                {[lightTheme, darkTheme].map((theme, index) => (
                    <Grid item xs={6} key={index}>
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2,
                                }}
                            >
                                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                                    <Item key={elevation} elevation={elevation}>
                                        {`elevation=${elevation}`}
                                    </Item>
                                ))}
                            </Box>
                        </ThemeProvider>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
export default CustomPaper