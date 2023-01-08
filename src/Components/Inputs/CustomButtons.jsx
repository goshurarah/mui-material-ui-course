import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/material/Stack';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import LoadingButton from '@mui/lab/LoadingButton';
// import SaveIcon from '@mui/icons-material/Save';


function CustomButtons() {
    return (
        <>
            <h1>Buttons</h1>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button variant="text" alignItems="center" justifyContent="center" justify="center" alignself>Text</Button>
                <Button variant="contained" color="secondary">Contained</Button>
                <Button variant="outlined" color="secondary">Outlined</Button>
            </Box>

            <h3>Text Button:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Box>

            <h3>Contained Button:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button variant="contained" color="warning">Contained</Button>
                <Button variant="contained" disabled color="success">
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </Box>

            <h3>Handling click event:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button variant="outlined" color="success"
                    onClick={() => {
                        alert('Have A Nice Day!');
                    }}
                >
                    Click Me!
                </Button>
            </Box>

            <h3>Color:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Box>

            <h3>Upload button:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button variant="contained" color="success" component="label">
                    Upload
                    <input hidden accept="image/*" type="file" multiple />
                </Button>
                <IconButton color="secondary" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                </IconButton>
            </Box>

            <h3>Buttons with icons and label:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>

            <h3>Icon button:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Box>

            <h3>Sizes:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Box>

            {/* <h3>Loding button:</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <LoadingButton loading variant="outlined">
                        Submit
                    </LoadingButton>
                    <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                        Fetch data
                    </LoadingButton>
                    <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="outlined"
                    >
                        Save
                    </LoadingButton>
                </Stack>
            </Box> */}

        </>
    )
}
export default CustomButtons;
