import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function CustomTabs() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value2, setValue2] = React.useState(0);

    const handleChange2 = (event, newValue) => {
        setValue2(newValue);
    };
    const [value3, setValue3] = React.useState(0);

    const handleChange3 = (event, newValue) => {
        setValue3(newValue);
    };


    return (
        <>
            <Typography variant="h2" gutterBottom>
                Tabs
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Item One" />
                    <Tab value="two" label="Item Two" />
                    <Tab value="three" label="Item Three" />
                </Tabs>
            </Box>

            <Typography variant="h3" gutterBottom>
                Scrollable Tabs
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                </Box>
            </Box>

            <Typography variant="h3" gutterBottom>
                Icon Tabs
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Tabs
                    value={value2}
                    onChange={handleChange2}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="icon tabs example"
                >
                    <Tab icon={<PhoneIcon />} aria-label="phone" />
                    <Tab icon={<FavoriteIcon />} aria-label="favorite" />
                    <Tab icon={<PersonPinIcon />} aria-label="person" />
                </Tabs>
            </Box>
            <Typography variant="h3" gutterBottom>
                Labels tabs
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
            <Tabs value={value3} onChange={handleChange3} aria-label="icon label tabs example">
                <Tab icon={<PhoneIcon />} label="RECENTS" />
                <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} label="NEARBY" />
            </Tabs>
        </Box>
        </>
    );
}