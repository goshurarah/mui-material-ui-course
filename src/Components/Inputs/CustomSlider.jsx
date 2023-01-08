import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';

const Input = styled(MuiInput)`
  width: 42px;
`;
function valuetext(value) {
    return `${value}°C`;
}

function CustomSlider() {
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    return (
        <>
            <h1>Slider</h1>
            <h3>Continuous sliders</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: 200 }}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDown />
                        <Slider aria-label="Volume" value={value} onChange={handleChange} />
                        <VolumeUp />
                    </Stack>
                    <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                </Box>
            </Box>

            <h3>Discrete sliders</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={10}
                        max={110}
                    />
                    <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                </Box>
            </Box>

            <h3>Slider with input field</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: 250 }}>
                    <Typography id="input-slider" gutterBottom>
                        Volume
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <VolumeUp />
                        </Grid>
                        <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
export default CustomSlider