import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function CustomFloatingActionButton() {
    return (
        <>
            <h1>Floating Action Button</h1>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                        <NavigationIcon sx={{ mr: 1 }} />
                        Navigate
                    </Fab>
                    <Fab disabled aria-label="like">
                        <FavoriteIcon />
                    </Fab>
                </Box>
            </Box>

            <h3>Size</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                    <Fab size="small" color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab size="medium" color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" size="medium" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
            </Box>
        </>
    );
}
export default CustomFloatingActionButton