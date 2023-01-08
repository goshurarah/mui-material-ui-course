import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function CustomCheckbox() {
    return (
        <>
            <h1>Checkbox</h1>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div>
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} />
                    <Checkbox {...label} disabled />
                    <Checkbox {...label} disabled checked />
                </div>
            </Box>

            <h3>Label</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
            </Box>

            <h3>Size</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div>
                    <Checkbox {...label} defaultChecked size="small" />
                    <Checkbox {...label} defaultChecked />
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />
                </div>
            </Box>

            <h3>Icon</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div>
                    <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                    />
                </div>
            </Box>

            <h3>Color</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <div>
                    <Checkbox {...label} defaultChecked />
                    <Checkbox {...label} defaultChecked color="secondary" />
                    <Checkbox {...label} defaultChecked color="success" />
                    <Checkbox {...label} defaultChecked color="default" />
                    <Checkbox
                        {...label}
                        defaultChecked
                        sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                                color: pink[600],
                            },
                        }}
                    />
                </div>
            </Box>



        </>
    );
}
export default CustomCheckbox


