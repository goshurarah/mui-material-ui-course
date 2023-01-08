import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function CustomGrid() {
    return (
        <>
            <h1>Grid</h1>
            <h3>Basic Grid:</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} sx={{ bgcolor: 'secondary.main' }}>
                        <p sx={{ bgcolor: 'success.main', height: '5rem' }}>xs=8</p>
                    </Grid>
                    <Grid item xs={4} sx={{ bgcolor: 'warning.main' }}>
                        <p>xs=4</p>
                    </Grid>
                    <Grid item xs={4} sx={{ bgcolor: 'primary.main' }}>
                        <p>xs=4</p>
                    </Grid>
                    <Grid item xs={8} sx={{ bgcolor: '#1A2027' }}>
                        <p>xs=8</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Basic Grid with breakpoints:</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={8} sx={{ bgcolor: 'secondary.main' }}>
                        <p>xs=6 md=8</p>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ bgcolor: 'warning.main' }}>
                        <p>xs=6 md=4</p>
                    </Grid>
                    <Grid item xs={6} md={4} sx={{ bgcolor: 'primary.main' }}>
                        <p>xs=6 md=4</p>
                    </Grid>
                    <Grid item xs={6} md={8} sx={{ bgcolor: '#1A2027' }}>
                        <p>xs=6 md=8</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Row & column spacing:</h3>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sx={{ bgcolor: '#f44336' }}>
                        <p>xs=6</p>
                    </Grid>
                    <Grid item xs={6} sx={{ bgcolor: '#388e3c' }}>
                        <p>xs=6</p>
                    </Grid>
                    <Grid item xs={3} md={6} sx={{ bgcolor: '#1A2027' }}>
                        <p>xs=3 md=6</p>
                    </Grid>
                    <Grid item xs={4} md={6} sx={{ bgcolor: '#ffa726' }}>
                        <p>xs=4 md=6</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Row direction:</h3>
            <Box sx={{ width: '100%' }}>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="baseline">
                    <Grid item sx={{ bgcolor: '#1A2027' }}>
                        <p>1</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#ffa726' }}>
                        <p>2</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#f44336' }}>
                        <p>3</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#388e3c' }}>
                        <p>4</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Column direction reverse:</h3>
            <Box sx={{ width: '100%' }}>
                <Grid container
                    direction="column-reverse"
                    justifyContent="space-evenly"
                    alignItems="baseline">
                    <Grid item sx={{ bgcolor: '#1A2027' }}>
                        <p>1</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#ffa726' }}>
                        <p>2</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#f44336' }}>
                        <p>3</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#388e3c' }}>
                        <p>4</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Column direction stretch:</h3>
            <Box sx={{ width: '100%' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                >
                    <Grid item sx={{ bgcolor: '#1A2027' }}>
                        <p>1</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#ffa726' }}>
                        <p>2</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#f44336' }}>
                        <p>3</p>
                    </Grid>
                    <Grid item sx={{ bgcolor: '#388e3c' }}>
                        <p>4</p>
                    </Grid>
                </Grid>
            </Box>

            <h3>Auto Layout:</h3>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={3}>
                    <Grid item xs sx={{ bgcolor: '#1A2027' }}>
                        <p>1</p>
                    </Grid>
                    <Grid item xs={6} sx={{ bgcolor: '#ffa726' }}>
                        <p>2</p>
                    </Grid>
                    <Grid item xs sx={{ bgcolor: '#f44336' }}>
                        <p>3</p>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default CustomGrid;

