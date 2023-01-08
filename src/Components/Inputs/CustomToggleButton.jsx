import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';


function CustomToggleButton() {
    const [alignment, setAlignment] = React.useState('left');
    // const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [devices, setDevices] = React.useState(() => ['phone']);

    const handleAlignment2 = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleDevices = (event, newDevices) => {
        if (newDevices.length) {
            setDevices(newDevices);
        }
    }
    return (
        <>
            <h1>Toggle Button</h1>
            <h3>Basic</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <h3>Colors</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton color='secondary' value="web">Web</ToggleButton>
                    <ToggleButton color='success' value="android">Android</ToggleButton>
                    <ToggleButton color='error' value="ios">iOS</ToggleButton>
                </ToggleButtonGroup>
            </Box>


            <h3>Enforce Value Set</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment2}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRightIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>

                    <ToggleButtonGroup
                        value={devices}
                        onChange={handleDevices}
                        aria-label="device"
                    >
                        <ToggleButton value="laptop" aria-label="laptop">
                            <LaptopIcon />
                        </ToggleButton>
                        <ToggleButton value="tv" aria-label="tv">
                            <TvIcon />
                        </ToggleButton>
                        <ToggleButton value="phone" aria-label="phone">
                            <PhoneAndroidIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Box>
        </>
    );
}
export default CustomToggleButton