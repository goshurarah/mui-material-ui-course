import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

function CustomDivider() {
    const content = (
        <div>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
    )
    return (
        <>
            <h1>Divider</h1>
            <h3>List dividers</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <ListItemText primary="Spam" />
                    </ListItem>
                </List>
            </Box>

            <h3>Inset dividers</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                </List>
            </Box>

            <h3>Vertical Text dividers</h3>
            <Box
                display="flex"
                justifyContent="center"
                bgcolor="white"
            >
                <Grid container>
                    <Grid item xs>
                        {content}
                    </Grid>
                    <Divider orientation="vertical" flexItem>
                        VERTICAL
                    </Divider>
                    <Grid item xs>
                        {content}
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
export default CustomDivider