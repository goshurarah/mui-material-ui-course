import * as React from 'react';
import { green, pink, deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';

function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };


}
function CustomAvatar() {
    return (
        <>
            <h1>Avatar</h1>
            <h3>Image Avator</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="../../images/b.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </Stack>
            </Box>

            <h3>Letter Avator</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar>H</Avatar>
                    <Avatar sx={{ bgcolor: pink[500] }}>N</Avatar>
                    <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                </Stack>
            </Box>

            <h3>Avator color generate</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar {...stringAvatar('Hurarah Akbar')} />
                    <Avatar {...stringAvatar('Talha Akbar')} />
                    <Avatar {...stringAvatar('Ali Raza')} />
                </Stack>
            </Box>

            <h3>Sizes</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="../../public/images/b.jpg" sx={{ width: 24, height: 24 }} />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} />
                </Stack>
            </Box>

            <h3>Icon Avatar</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: pink[500] }}>
                        <PageviewIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }}>
                        <AssignmentIcon />
                    </Avatar>
                </Stack>
            </Box>

            <h3>Variant</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: pink[500] }} variant="square">
                        N
                    </Avatar>
                    <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                        <AssignmentIcon />
                    </Avatar>
                </Stack>
            </Box>
        </>
    );
}
export default CustomAvatar;