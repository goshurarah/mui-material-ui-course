import * as React from 'react';
import MessageApi from './CustomBottomNavigationApi/MessageApi';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ArchiveIcon from '@mui/icons-material/Archive';
import CssBaseline from '@mui/material/CssBaseline';


function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(6)).map(
        () => MessageApi[getRandomInt(MessageApi.length)],
    );
}

function CustomBottomNavigation() {
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue2(newValue);
    }

    const [value3, setValue3] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value3, setMessages]);

    return (
        <>
            <Typography variant="h2" gutterBottom>
                Navigation
            </Typography>
            <Typography variant="h3" gutterBottom>
                Bottom Navigation
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={value1}
                        onChange={(event, newValue) => {
                            setValue1(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Box>
            </Box>

            <Typography variant="h3" gutterBottom>
                Bottom Navigation with no labels
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ width: 500 }}>
                    <BottomNavigation
                        value={value2}
                        onChange={handleChange}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                    </BottomNavigation>
                </Box>
            </Box>

            <Typography variant="h3" gutterBottom>
                Bottom Navigation with fixed Positioning
            </Typography>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Box sx={{ pb: 7 }} ref={ref}>
                    <CssBaseline />
                    <List>
                        {messages.map(({ primary, secondary, person }, index) => (
                            <ListItem button key={index + person}>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person} />
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary} />
                            </ListItem>
                        ))}
                    </List>
                    <Paper sx={{ position: 'relative', bottom: 0, left: 0, right: 0 }} elevation={15}>
                        <BottomNavigation
                            value={value3}
                            onChange={(event, newValue) => {
                                setValue3(newValue);
                            }}
                        >
                            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                            <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                        </BottomNavigation>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}
export default CustomBottomNavigation